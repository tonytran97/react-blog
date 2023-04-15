import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        <button>Login</button>
        <Link to="/create-account">Don't have an account? Click here!</Link>
        </>
    );
}

export default Login;