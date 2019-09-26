import { combineReducers } from 'redux';

import { SET_NOTES } from './constants'

const notesReducer = ( state = [], action) => {
    switch(action.type){
        case SET_NOTES:
            return action.notes;
            break;
    }
    return state
}

const reducer = combineReducers({
    notes: notesReducer
})

export default reducer;