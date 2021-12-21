import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Energy Field Healing
                    </a>

                    <a className="navbar-item">
                        Meditation
                    </a>

                    <a className="navbar-item">
                        Spiritual Guidance Healing
                    </a>

                    <a className="navbar-item">
                        Angels for Animals
                    </a>

                    <a className="navbar-item">
                        News
                    </a>

                    <a className="navbar-item">
                        Blog
                    </a>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;