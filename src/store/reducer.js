import { combineReducers } from 'redux';
import { SET_USERS, SET_NOTES, DESTROY_NOTE, UPDATE_NOTE, CREATE_NOTE } from './constants'

const usersReduer = ( state = [], action) => {
    switch(action.type){
        case SET_USERS: 
            return action.users;
            break;
    }
    return state;
}

const notesReduer = ( state = [], action) => {
    switch(action.type){
        case SET_NOTES:
            return action.notes;
            break;
    }
    return state;
}

const reducer = combineReducers({
    notes: notesReduer,
    users: usersReduer
})

export default reducer;