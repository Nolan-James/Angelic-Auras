import React, { useState } from 'react';
import { Link } from "gatsby";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [activeClass, setActiveClass] = useState("");

    const toggleNavbar = () => {
            setNavbar(navbar => !navbar);
            setActiveClass(navbar ? "is-active" : "");
        }
    ;
    return (
        <nav className="navbar pt-4" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <button className={`navbar-burger ${activeClass}`} aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample" onClick={toggleNavbar} onKeyPress={toggleNavbar}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${activeClass}`}>
                <div className="navbar-start">
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

                    <Link to='/news' className="navbar-item">
                        News
                    </Link>

                    <Link to='/blog' className="navbar-item">
                        Blog
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;