import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../utils/useUser';

const Navbar = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/collection">Article Collection</Link></li>
                </ul>
                <div>{user ? <button onClick={() => {signOut(getAuth());}}>Log Out</button>
                : <button onClick={() => {navigate('/login');
                }}>Login</button>}
                </div>
            </nav>
    );
}

export default Navbar; 