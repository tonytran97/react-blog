import sampleArticles from "../data/Article-Samples";
import ArticleList from "../components/ArticleList";

const Collection = () => {
    return (
        <>
        <h1>Article Collection List</h1>
        <ArticleList sampleArticles={sampleArticles} />   
        </>
    );
}

export default Collection;