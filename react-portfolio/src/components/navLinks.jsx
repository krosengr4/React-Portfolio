import { Link, useLocation } from 'react-router-dom';

// Using object destructuring to get our variables from the prop object
function NavLinks() {
    const currentPage = useLocation().pathname;
    
    return (
        <ul className='nav nav-links'>
            {/* homepage link */}
            <li className='nav-item'>
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                Home
                </Link>
            </li>
            {/* AboutMe page link */}
            <li className='nav-item'>
                <Link
                    to="/AboutMe"

                    className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
                    >
                About Me
                </Link>
            </li>

            {/* Portfolio page link */}
            <li className='nav-item'>
                <Link
                    to="/Portfolio"

                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                My Portfolio
                </Link>
                </li>

                {/* Contact page link */}
                <li className='nav-item'>
                <Link
                    to="/Contact"

                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                    >
                Contact Me 
                </Link>
                </li>

                {/* Resume page link */}
                <li className='nav-item'>
                <Link
                    to="/Resume"

                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                    >
                Resume
                </Link>
                </li>
        </ul>
    );
}

export default NavLinks;