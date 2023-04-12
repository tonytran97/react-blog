import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import sampleArticles from '../data/Article-Samples';
import NotFound from './404';
import CommentsList from '../components/CommentsList';

const Article = () => {
    const [articleInfo, setArticleInfo] = useState({ upvote: 0, comments: [] });
    const { articleID } = useParams();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/article/${articleID}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, []);

    const article = sampleArticles.find(article => article.name === articleID);

    if (!article) {
        return <NotFound />
    }

    return <><h1>{article.title}</h1>
    <p>This article has {articleInfo.upvote} upvote(s)</p>
    {article.content}
    <CommentsList comments={articleInfo.comments} />
    </>
};

export default Article;