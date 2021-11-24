import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


let store = {
   /* _state:{
        profilePage: {
            postsData: [
                {id: 1, post: 'Hello world !', likesCount: 3},
                {id: 2, post: 'Nice weather today !', likesCount: 12},
                {id: 3, post: 'Yes, the weather is very good!', likesCount: 5}
            ],
            
            newPostText: 'it-kamasutra-new'
        },
        
        dialogPage: {
            
            messagesData: [
                {id: 1, message: 'Text massage 1'},
                {id: 2, message: 'Text massage 2'},
                {id: 3, message: 'Text massage 3'},
                {id: 4, message: 'Text massage 4'},
                {id: 5, message: 'Text massage 5'},
                {id: 6, message: 'Text massage 6'}
            ],
            
            newMessageText: 'Adding new message text !',
            
            dialogsData: [
                {id: 1, name: 'Person 1'},
                {id: 2, name: 'Person 2'},
                {id: 3, name: 'Person 3'},
                {id: 4, name: 'Person 4'},
                {id: 5, name: 'Person 5'},
                {id: 6, name: 'Person 6'}
            ]
        }
    },*/

    // getState(){
    //     return this._state;
    // },
    //
    // _callSubscriber() {
    //     console.log('State changed');
    // },
    //
    // subscribe(observer){
    //     this._callSubscriber = observer; // принимает rerenderentiretree() из index.js
    // },
    //
    // dispatch(action){
    //     this._state.profilePage = profileReducer(this._state.profilePage, action);
    //     this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    //     this._callSubscriber(this._state);
    // }
}

//window.state = store;
//alt+ctrl+s изменить размер шрифта

//export default store;