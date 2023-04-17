import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import sampleArticles from '../data/Article-Samples';
import NotFound from './404';
import CommentsList from '../components/CommentsList';
import CommentForm from '../components/AddComments';
import useUser from '../utils/useUser';

const Article = () => {
    const [articleInfo, setArticleInfo] = useState({ upvote: 0, comments: [] });
    const { articleID } = useParams();

    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token} : {};
            const response = await axios.get(`/api/article/${articleID}`, { headers });

            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, []);

    const article = sampleArticles.find(article => article.name === articleID);

    const increaseUpvote = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token} : {};
        const response = await axios.put(`/api/article/${articleID}/upvote`, null, { headers });

        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return <NotFound />
    }

    return <><h1>{article.title}</h1>
    {user
    ? <button onClick={increaseUpvote}>Upvote</button>
    : <button>Login if you would like to upvote </button>}
    <p>This article has {articleInfo.upvote} upvote(s)</p>
    {article.content}
    {user
    ? <CommentForm
    articleName={articleID}
    onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
    : <button>Login if you would like to add a comment </button>}
    <CommentsList comments={articleInfo.comments} />
    </>
};

export default Article;