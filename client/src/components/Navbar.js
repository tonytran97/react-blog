import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../utils/useUser';

const Navbar = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    return (
            <nav className='navbar'>
                <h3 className='title'>My React Blog</h3>
                <ul className='navList'>
                    <li className='navContent'><Link to="/">Home</Link></li>
                    <li className='navContent'><Link to ="/about">About</Link></li>
                    <li className='navContent'><Link to ="/collection">Article Collection</Link></li>
                </ul>
                <div>{user ? <button className='loginBtn' onClick={() => {signOut(getAuth());}}>Log Out</button>
                : <button className='loginBtn' onClick={() => {navigate('/login');
                }}>Login</button>}
                </div>
            </nav>
    );
}

export default Navbar; 