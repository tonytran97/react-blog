import { Link } from "react-router-dom";
import sampleArticles from "../data/Article-Samples";

const Collection = () => {
    return (
        <>
        <h1>Article Collection List</h1>
        {sampleArticles.map(article => (
            <Link key={article.name} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content.substring(0, 150)}...</p>
            </Link>     
        ))}
        </>
    );
}

export default Collection;