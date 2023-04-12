const CommentsList = ({ comments }) => (
    <>
    <h3>Comments:</h3>
    {comments.map( comment => (
        <div className="comment" key={comment.username + ': ' + comment.text}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;