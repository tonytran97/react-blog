import express from 'express';

let articleInfo = [{
    name: 'learning-react',
    upvote: 0,
    comments: [],
}, {
    name: 'learning-node', 
    upvote: 0,
    comments: [],
}, {
    name: 'learning-mongo',
    upvote: 0,
    comments: [],
}]

const app = express();
app.use(express.json());

app.put('/api/article/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articleInfo.find(a => a.name === name);
    if (article){
        article.upvote += 1;
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