import { useState } from 'react';
import axios from 'axios';
import useUser from '../utils/useUser';

const CommentForm = ({ articleName, onArticleUpdated }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const { user } = useUser();

    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token} : {};
        const response = await axios.post(`/api/article/${articleName}/comments`, {
            username: name,
            text: commentText,
        }, {
            headers,
        });
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    }
    return (
        <div>
            <h3>Add a Comment</h3>
            {user && <p>You are posting as {user.email}</p>}
            <label>
                Comment:
                <textarea 
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                rows="4" 
                cols="50" />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default CommentForm; 