import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    
    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return(
        <>
        <h1>Login</h1>
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
        <button onClick={signIn}>Login</button>
        <Link to="/create-account">Don't have an account? Click here!</Link>
        </>
    );
}

export default Login;