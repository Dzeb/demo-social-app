import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    
    return (
        <div className={classes.navbarWrap}>
            
            {/*Навигация*/}
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to={"/profile"} activeClassName={classes.active}>Profile</NavLink></li>
                    <li><NavLink to={"/dialogs"} activeClassName={classes.active}>Dialogs</NavLink></li>
                    <li><NavLink to={"/news"} activeClassName={classes.active}>News</NavLink></li>
                    <li><NavLink to={"/music"} activeClassName={classes.active}>Music</NavLink></li>
                    <li><NavLink to={"/users"} activeClassName={classes.active}>Users</NavLink></li>
                    <li><NavLink to={"/settings"} activeClassName={classes.active}>Settings</NavLink></li>
                </ul>
            </nav>
            
            {/* Друзья */}
            <div className={classes.sidebar}>
                
                {/*Заголовок*/}
                <div className={classes.friendsTitle}>Friends</div>
    
                {/*Контент*/}
                <div className={classes.friends}>
                    <div className={classes.friendsItem}>
                        <div className={classes.friendsItem__img}>
                            <img src="https://sun9-36.userapi.com/s/v1/ig1/mD30tqXN88MWbiNShELuWw8xRhviRzyn4ecEInLWNDNxVJFR08_wGHdTxgn_KnsKsw_alH2p.jpg?size=100x100&quality=96&crop=433,72,544,544&ava=1" alt=""/>
                        </div>
                        <div className={classes.friendsItem__name}>Karina</div>
                    </div>
                    <div className={classes.friendsItem}>
                        <div className={classes.friendsItem__img}>
                            <img src="https://avatars.mds.yandex.net/get-yapic/54535/3peqFosuqvbp7YQVooeRXTTxq0-1/islands-retina-50" alt=""/>
                        </div>
                        <div className={classes.friendsItem__name}>Eva</div>
                    </div>
                    <div className={classes.friendsItem}>
                        <div className={classes.friendsItem__img}>
                            <img src="https://cdn1.flamp.ru/0899ba35d3b0699d7744812acec32038_100_100.jpg" alt=""/>
                        </div>
                        <div className={classes.friendsItem__name}>Alexa</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;