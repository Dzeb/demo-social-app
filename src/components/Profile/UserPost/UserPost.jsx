import React from 'react';
import classes from './UserPost.module.css';
import Post from "../Messages/Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators";
import {Textarea} from "../../Common/FormControls/FormControls";

const UserPost = props => {
    
    console.log('render');
    
    let postElements = props.postData.map(post =>
        <Post text={post.post} likeCount={"likes " + post.likesCount} key={post.id}/>
    )
    
    let addPost = (formData) => {
        props.addUserPost(formData.postItemText)
    }
    
    return (
        <div>
            <div className={classes.user}>
                
                {/* User post */}
                <div className={classes.user_post}>
                    {/*Заголовок*/}
                    <div className={classes.user_post_title}>My post title</div>
                    
                    {/*Форма - Ввод сообщения*/}
                    <div>
                        <AddPostReduxForm onSubmit={addPost}/>
                    </div>
                </div>
            
            </div>
            
            <div className={classes.messagesContainer}>
                {postElements}
            </div>
        
        </div>
    )
};

const maxLength30 = maxLengthCreator(30);

const AddPostForm = (props) => {
    
    return (
        
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name='postItemText'
                   placeholder='Add post'
                   validate={[requiredField, maxLength30]}
            />
        
            {/*Отпавить сообщение*/}
            <button className={classes.user_post_button} >Send</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'profileAddUserPost'})(AddPostForm)

export default UserPost;