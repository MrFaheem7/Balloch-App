import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import headerLogo from '../../../assets/jpeg/headerlogo.jpeg'
import classes from './header.module.scss'
const Header = () => {
    return (

        <div className={classes.container} >
            <img alt='logo' src={headerLogo} />
            <button className={classes.btn} >Download Now</button>
        </div>
    )
}

export default Header