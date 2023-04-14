import express from 'express';
import { db, connectionToDB} from '../config/connection.js';

const app = express();
app.use(express.json());

app.get('/api/article/:name', async (req, res) => {
    const { name } = req.params;

    const article = await db.collection('collection').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404);
    }
})

app.put('/api/article/:name/upvote', async (req, res) => {
    const { name } = req.params;
    
    await db.collection('collection').updateOne({ name }, {
        $inc: { upvote: 1 },
    });

    const article = await db.collection('collection').findOne({ name });

    if (article){
        res.json(article);
    } else {
        res.send(`That article doesn't exist`);
    }
});

app.post('/api/article/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { username, text } = req.body;

    await db.collection('collection').updateOne({ name }, {
        $push: { comments: { username, text} },
    });

    const article = await db.collection('collection').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.send(`That article doesn't exist`);
    }
});

connectionToDB(() => {
    console.log('Connection to db has been made');
    app.listen(8000, () => {
        console.log('Server listening on port 8000');
    });
})
