<<<<<<< HEAD
import { SET_NOTES } from './constants';
import axios from 'axios';

const setNotes = (notes) => {
=======
import { SET_USERS, SET_NOTES, DESTROY_NOTE, UPDATE_NOTE, CREATE_NOTE } from './constants';
import axios from 'axios';

const setNotes = (notes)=> {
>>>>>>> origin/master
    return {
        notes,
        type: SET_NOTES
    }
<<<<<<< HEAD
} 
=======
}
>>>>>>> origin/master

const fetchNotes = () => {
    return async(dispatch)=> {
        const notes = (await axios.get('/api/notes')).data;
        return dispatch(setNotes(notes))
    }
}

export { fetchNotes };