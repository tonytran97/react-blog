import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/collection">Article Collection</Link></li>
                </ul>
            </nav>
    );
}

export default Navbar; 