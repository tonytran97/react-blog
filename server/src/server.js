import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());

app.get('/api/article/:name', async (req, res) => {
    const { name } = req.params;
    
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('react-blog-db');

    const article = await db.collection('collection').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404);
    }
})

app.put('/api/article/:name/upvote', async (req, res) => {
    const { name } = req.params;
    
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('react-blog-db');
    await db.collection('collection').updateOne({ name }, {
        $inc: { upvote: 1 },
    });

    const article = await db.collection('collection').findOne({ name });

    if (article){
        res.send(`The ${name} article now has ${article.upvote} upvotes`);
    } else {
        res.send(`That article doesn't exist`);
    }
});

app.post('/api/article/:name/comments', (req, res) => {
    const { name } = req.params;
    const { username, text } = req.body;
    const article = articleInfo.find(a => a.name === name);
    if (article) {
        article.comments.push({ username, text });
        res.send(article.comments);
    } else {
        res.send(`That article doesn't exist`);
    }
});

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});