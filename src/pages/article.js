import { useParams } from 'react-router-dom';
import sampleArticles from '../data/Article-Samples';

const Article = () => {
    const { articleID } = useParams();
    const article = sampleArticles.find(article => article.name === articleID);

    return <><h1>{article.title}</h1>
    {article.content}
    </>
};

export default Article;