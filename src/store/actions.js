import { SET_USERS, SET_NOTES, DESTROY_NOTE, UPDATE_NOTE, CREATE_NOTE } from './constants';
import axios from 'axios';

const setNotes = (notes)=> {
    return {
        notes,
        type: SET_NOTES
    }
}

const fetchNotes = () => {
    return async(dispatch)=> {
        const notes = (await axios.get('/api/notes')).data;
        return dispatch(setNotes(notes))
    }
}

export { fetchNotes };