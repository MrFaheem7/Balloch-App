import React from 'react'
import Header from '../../pages/landing/header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../../pages/landing/footer/Footer'
import classes from "./layout.module.scss";

const Layout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <div className={classes.main}>
                    <Outlet />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout