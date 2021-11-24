import {profileAPI, usersAPI} from "../Api/Api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    postsData: [
        {id: 1, post: 'Hello world !', likesCount: 3},
        {id: 2, post: 'Nice weather today !', likesCount: 12},
        {id: 3, post: 'Yes, the weather is very good!', likesCount: 5}
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
          
            return  {
                ...state,
                postsData:[
                    ...state.postsData,
                    {
                        post: action.postItemText,
                        id: 4,
                        likesCount: 0
                    }
                ]
            }
        }
        
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profileData
            }
        
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        
        default:
            return state;
    }
}

export let userPostActionCreator = (postItemText) => ({type: ADD_POST, postItemText});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profileData: profile});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status: status});


export let getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
            dispatch(setUserProfile(response.data));
        } )
    }
};
export let getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
            dispatch(setUserStatus(response.data));
        } )
    }
};
export let updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
        if(response.data.resultCode === 0){
            dispatch(setUserStatus(status));
        }
    } )
};


export default profileReducer;