import React from 'react';
import classes from './Post.module.css';

const Post = (props) =>{
    return(
      <div className={classes.wrap}>
        <div className={classes.message}>
          <div className={classes.message__img}>
            <img src="https://pbs.twimg.com/profile_images/1186282378714472449/1FFdpXMC_bigger.jpg" alt="" />
          </div>
          <div className={classes.message__text}>{props.text}</div>       
        </div>
        <div className={classes.like}>{props.likeCount}</div>
      </div>
    );
}
export default Post;