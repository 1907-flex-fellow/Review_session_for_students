import { SET_NOTES } from './constants';
import axios from 'axios';

const setNotes = (notes) => {
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