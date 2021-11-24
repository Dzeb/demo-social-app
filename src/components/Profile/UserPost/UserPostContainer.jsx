import React from 'react';
import {userPostActionCreator} from "../../../redux/profileReducer";
import UserPost from "./UserPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postsData
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addUserPost: (postItemText) => {
            dispatch(userPostActionCreator(postItemText))
        }
    }
}

const UserPostContainer = connect(mapStateToProps, mapDispatchToProps)(UserPost)

export default UserPostContainer;