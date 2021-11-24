import React from "react";
import classes from "./../Dialogs.module.css";

//Сообщение
const UsersMessages = (props) =>{
    return <div className={classes.message}>{props.text}</div>
}

export default UsersMessages;