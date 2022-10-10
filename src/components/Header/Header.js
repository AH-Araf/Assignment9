import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo-design'>
                <h2><span className='color'>AraF</span><span className='color1'>'S</span><span className='color2'> QuiZ</span></h2>
            </div>
            <nav className='router-container'>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;