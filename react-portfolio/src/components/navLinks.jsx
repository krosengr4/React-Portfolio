import { Link, useLocation } from 'react-router-dom';

// Using object destructuring to get our variables from the prop object
function NavLinks() {
    const currentPage = useLocation().pathname;
    
    return (
        <ul className='nav nav-links'>
            <li className='nav-item'>
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to="/AboutMe"

                    className={currentPage === '/AboutMe' ? 'nav-link' : 'nav-link'}
                    >
                About Me
                </Link>
            </li>
        </ul>
    );
}

export default NavLinks;