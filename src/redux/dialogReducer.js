const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: 'Text massage 1'},
        {id: 2, message: 'Text massage 2'},
        {id: 3, message: 'Text massage 3'},
        {id: 4, message: 'Text massage 4'},
        {id: 5, message: 'Text massage 5'},
        {id: 6, message: 'Text massage 6'}
    ],
    
    dialogsData: [
        {id: 1, name: 'Person 1'},
        {id: 2, name: 'Person 2'},
        {id: 3, name: 'Person 3'},
        {id: 4, name: 'Person 4'},
        {id: 5, name: 'Person 5'},
        {id: 6, name: 'Person 6'}
    ]
}

const dialogReducer = (state = initialState, action) => {
    
    switch (action.type){
        
        case ADD_MESSAGE:
            return  {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    {id: 7, message: action.message}
                ]
            }
        default:
            return state;
    }
}

export let userMessageActionCreator = (message) => ({type: ADD_MESSAGE, message});

export default dialogReducer;