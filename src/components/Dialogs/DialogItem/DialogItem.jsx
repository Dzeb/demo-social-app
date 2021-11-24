import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

//Диалог
const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id;
    
    return(
        <div className={classes.dialog}>
            <NavLink to={path} className={classes.dialogNavItem} activeClassName={classes.active}>
                <div className={classes.dialogNavItem__avatar}>
                    <img src="https://sun9-36.userapi.com/s/v1/ig1/mD30tqXN88MWbiNShELuWw8xRhviRzyn4ecEInLWNDNxVJFR08_wGHdTxgn_KnsKsw_alH2p.jpg?size=100x100&quality=96&crop=433,72,544,544&ava=1" alt=""/>
                </div>
                <div className={classes.dialogNavItem__name}>{props.person}</div>
            </NavLink>
        </div>
    )
}

export default DialogItem;