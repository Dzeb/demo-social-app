import {usersAPI} from "../Api/Api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [ ],
    pageSize: 10,
    totalUserCount: 21,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type){
        case FOLLOW:
            return  {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
               /* users: state.users.map(user => {
                    if(user.id === action.userID){
                        return {...user, followed: true}
                    }
                    return user
                })*/
            }
    
        case UNFOLLOW:
            return  {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false} )
                /*users: state.users.map(user => {
                    if(user.id === action.userID){
                        return {...user, followed: false}
                    }
                    return user
                })*/
            }
        
        case SET_USERS:
            return {  ...state, users: action.users }
        
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUserCount: action.totalCount}
        
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.toggleIsFetching}
        
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
            
        default:
            return state;
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID});
export const setUsers = (users) => ({ type: SET_USERS, users});
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page});
export const setTotalUsersCount = (number) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: number});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, toggleIsFetching: isFetching});
export const toggleFollowing = (followingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId});

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    /*Запрос на сервер,
    * получение данных, диспатчим данные в redux-store
    * */

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setCurrentPage(page));
}

const followUnfollowHelper = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowing(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowing(false, userId));
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        await followUnfollowHelper(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfollowHelper(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export default usersReducer;