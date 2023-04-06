import { Link } from "react-router-dom";

const ArticleList = ( {sampleArticles} ) => {
    return (
        <>
        {sampleArticles.map(article => (
            <Link key={article.name} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content.substring(0, 150)}...</p>
            </Link>     
        ))}
        </>
    )
}

export default ArticleList;