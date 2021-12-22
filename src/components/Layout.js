import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <main className='columns is-flex-direction-column is-fullheight-100vh'>
                <Navbar className='column is-narrow'/>
                <div className='column'>
                    {children}
                </div>
                <Footer className='column is-narrow'/>
            </main>
        </div>
    );
};

export default Layout;