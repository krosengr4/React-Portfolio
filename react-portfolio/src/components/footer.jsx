//! This file contains the react component for the applications footer

// import css, link use location, and icons
import { VscGithubAlt } from 'react-icons/vsc';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import '../App.css'

function footer() {
    return(
    <footer className='footer'>
    <h3 className='made-by'> Made by Kevin Rosengren</h3>
    
    <div className='footer-div'>
        <a href='https://github.com/krosengr4'>
            <li className='logo'>
                <VscGithubAlt />
            </li>
        </a>
        <a href='https://linkedin.com'>
            <li className='logo'>
                <AiOutlineLinkedin />
            </li>
        </a>
        <a href='https://instagram.com/kevinr_4'>
            <li className='logo'>
                <FaInstagram />
            </li>
        </a>
    </div>

    </footer>
    
    
    );
}

export default footer;

