import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            {/*Логотип*/}
            <div className={classes.logo}>
                <img src="https://i.ya-webdesign.com/images/png-background-creator-8.png" alt='logo'/>
            </div>
    
            {/*Логин*/}
            <div className={classes.login}>
                {props.isAuth
                    ? <div>{props.email}  <button onClick={props.logout}>log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;