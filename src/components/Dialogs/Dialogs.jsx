import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import UsersMessages from "./UsersMessages/UsersMessages";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators";


const Dialogs = (props) => {
    
    let dialogElements = props.dialogPage.dialogsData.map(dialog =>
        <DialogItem id={dialog.id} person={dialog.name} key={dialog.id}/>
    );
    
    let messageElements = props.dialogPage.messagesData.map(message =>
        <UsersMessages text={message.message} key={message.id}/>
    );
    
    if(!props.isAuth) return <Redirect to={"/login"}/>
    
    let addMessage = (formData) => {
        props.addUserMessage(formData.textMessageItem)
    }
    
    return (
        <div className={classes.dialogWrap}>
            
            {/*Блок - Диалоги*/}
            <div className={classes.dialogs}>
                {dialogElements}
            </div>
    
    
            <div className={classes.messages}>
        
                {/*Блок - Все сообщения*/}
                <div className={classes.messages__wrap}>
                    {messageElements}
                </div>
    
                {/*Ввод сообщения*/}
                <div className={classes.addMessage}>
                    <AddMessageReduxForm onSubmit={addMessage}/>
                </div>
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  component={Textarea}
                    name='textMessageItem'
                    placeholder='Enter message'
                    validate={[requiredField, maxLength10]}
            />
            
            <button > Send </button>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
