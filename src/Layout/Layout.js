import React from 'react'
import Header from './include/header';
import Footer from './include/footer';

function Layout ({children}) {
    return (
            <div className="main-wrapper">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
    )
}
export default Layout;