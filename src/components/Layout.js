import React from 'react';
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <div>
                    <h1>Angelic Auras</h1>
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;