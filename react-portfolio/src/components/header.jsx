//! This file contains the react component for the applications header

// import Link to link to our pages 
// useLocation to determine if nav-link is active or not
import { Link, useLocation } from 'react-router-dom';
// import css
import '../App.css'


// Using object destructuring to get our variables from the prop object
function NavLinks() {
    const currentPage = useLocation().pathname;
    return (
        <div className='header'>
        <Link to='/'>
        <h1 className='my-name'>Kevin Rosengren</h1>
        </Link>
        <p className='header-tag'>React Portfolio</p>
        <ul className='nav-links'>
            {/* homepage/aboutMe link */}
            <li className='nav-item'>
                <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                About Me
                </Link>
            </li>

                {/* Portfolio page link */}
            <li className='nav-item'>
                <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                My Portfolio
                </Link>
            </li>

                {/* Contact page link */}
            <li className='nav-item'>
                <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                Contact Me 
                </Link>
            </li>

                {/* Resume page link */}
            <li className='nav-item'>
                <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                Resume
                </Link>
            </li>
        </ul>
    </div>
    );
}

export default NavLinks;