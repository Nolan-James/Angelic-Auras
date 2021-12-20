import React from 'react';
import styles from './Layout.module.css'
import { Link } from "gatsby";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div>

            {/*<header>*/}
            {/*    <div>*/}
            {/*        <h1><Link to="/">Angelic Auras</Link></h1>*/}
            {/*        <Link to="/blog">Blog</Link>*/}
            {/*    </div>*/}
            {/*</header>*/}
            <main>
                <Navbar/>
                {children}
            </main>
        </div>
    );
};

export default Layout;