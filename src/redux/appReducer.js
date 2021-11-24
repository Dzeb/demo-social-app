import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    init: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIALIZED:
            return  {
                ...state,
                init: true
            }
    
        default:
            return state;
    }
}

export const setInit = () => ({type: SET_INITIALIZED});

export const initApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        
        Promise.all([promise])
            .then(() => {
                dispatch(setInit());
            })
    }
}

export default appReducer;