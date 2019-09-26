import { combineReducers } from 'redux';
<<<<<<< HEAD

import { SET_NOTES } from './constants'

const notesReducer = ( state = [], action) => {
=======
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
>>>>>>> origin/master
    switch(action.type){
        case SET_NOTES:
            return action.notes;
            break;
    }
<<<<<<< HEAD
    return state
}

const reducer = combineReducers({
    notes: notesReducer
=======
    return state;
}

const reducer = combineReducers({
    notes: notesReduer,
    users: usersReduer
>>>>>>> origin/master
})

export default reducer;