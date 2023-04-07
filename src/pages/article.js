import { useParams } from 'react-router-dom';
import sampleArticles from '../data/Article-Samples';
import NotFound from './404';

const Article = () => {
    const { articleID } = useParams();
    const article = sampleArticles.find(article => article.name === articleID);

    if (!article) {
        return <NotFound />
    }

    return <><h1>{article.title}</h1>
    {article.content}
    </>
};

export default Article;