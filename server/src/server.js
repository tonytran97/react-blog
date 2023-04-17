import fs from 'fs';
import admin from 'firebase-admin';
import express from 'express';
import { db, connectionToDB} from '../config/connection.js';

const credentials = JSON.parse(
    fs.readFileSync('./credentials.json')
);
admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

const app = express();
app.use(express.json());

app.use(async (req, res, next) => {
    const { authtoken } = req.headers; 

    if(authtoken) {
        try {
            req.user = await admin.auth().verifyIdToken(authtoken);
        } catch (e) {
           return res.sendStatus(400);
        }
    }
    req.user = req.user || {};

    next();
});

app.get('/api/article/:name', async (req, res) => {
    const { name } = req.params;
    const { uid } = req.user;

    const article = await db.collection('collection').findOne({ name });

    if (article) {
        const upvoteIDs = article.upvoteIDs || [];
        article.canUpvote = uid && !upvoteIDs.includes(uid);
        res.json(article);
    } else {
        return res.sendStatus(404);
    }
})

app.use((req, res, next) => {
    if (req.user) {
        next();
    } else { 
        return res.sendStatus(401);
    }
})

app.put('/api/article/:name/upvote', async (req, res) => {
    const { name } = req.params;
    const { uid } = req.user;

    const article = await db.collection('collection').findOne({ name });

    if (article) {
        const upvoteIDs = article.upvoteIDs || [];
        const canUpvote = uid && !upvoteIDs.includes(uid);

        if(canUpvote) {
            await db.collection('collection').updateOne({ name }, {
                $inc: { upvote: 1 },
                $push: { upvoteIDs: uid},
            });
        }
    
    const updatedArticle = await db.collection('collection').findOne({ name });
    res.json(updatedArticle);
    } else {
        res.send(`That article doesn't exist`);
    }
});

app.post('/api/article/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { text } = req.body;
    const { email } = req.user;

    await db.collection('collection').updateOne({ name }, {
        $push: { comments: { username: email, text} },
    });

    const article = await db.collection('collection').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        return res.send(`That article doesn't exist`);
    }
});

connectionToDB(() => {
    console.log('Connection to db has been made');
    app.listen(8000, () => {
        console.log('Server listening on port 8000');
    });
})