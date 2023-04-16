import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirm) {
                setError('Your passwords do not match, please try again');
                return;
            }

            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/collection');
        } catch(e) {
            setError(e.message);
        }
    }

    return(
        <>
        <h1>Create an Account</h1>
        {error && <p>{error}</p>}
        <input
         placeholder='Email address'
         value={email}
         onChange={e => setEmail(e.target.value)} />
        <input 
        type="password"
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)} />
        <input 
        type="password"
        placeholder='Re-enter your password'
        value={confirm}
        onChange={e => setConfirm(e.target.value)} />
        <button onClick={createAccount}>Create your Account</button>
        <Link to="/login">Already have an account? Login here</Link>
        </>
    );
}

export default CreateUser;