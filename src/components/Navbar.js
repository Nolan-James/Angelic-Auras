import React, { useState } from 'react';
import { Link } from "gatsby";

const Navbar = () => {
    const [isActive, setIsActive] = React.useState(false);

    return (
        <nav className='navbar pt-4' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a
                    onClick={() => {
                        setIsActive(!isActive)
                    }}
                    role='button'
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''} `}>
                <div className='navbar-end'>
                    <div className='navbar-start is-justify-content-center container is-flex-wrap-wrap'>
                        <Link to='/' className="navbar-item">
                            Home
                        </Link>

                        <Link to='/energy' className="navbar-item ">
                            Energy Field Healing
                        </Link>

                        <Link to='/meditation' className="navbar-item">
                            Meditation
                        </Link>

                        <Link to='/guidance' className="navbar-item">
                            Spiritual Guidance Healing
                        </Link>

                        <Link to='/animals' className="navbar-item">
                            Angels for Animals
                        </Link>

                        <Link to='/crystal' className="navbar-item">
                            Crystal Chakra & Violet fire Cleansing
                        </Link>

                        <Link to='/light' className="navbar-item">
                            “The Light Within” – Women’s Circle
                        </Link>

                        <Link to='/news' className="navbar-item">
                            News
                        </Link>

                        <Link to='/blog' className="navbar-item">
                            Blog
                        </Link>

                        <Link to='/about' className="navbar-item">
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;