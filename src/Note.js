import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD

const Note = ({notes}) => {
    return (
        <ul>
            {
                notes.filter( note => note.archived === false).map( note => <li key={note.id}>{note.text}</li>)
=======
import { actions } from './store';

const Note = ({ notes }) => {
    return (
        <ul>
            {
                notes.filter(note => note.archived === archived).map( note => <li 
                    key={ note.id }>
                        { note.text}
                        <br />
                        {/* <button onClick={()=> { update({...note, archived: !note.archived})}}>{ archived ? 'unarchive': 'archive' }</button> */}
                        {/* <button onClick={ ()=> destroy(note)}>destroy</button> */}
                    </li>)
>>>>>>> origin/master
            }
        </ul>
    )
}

<<<<<<< HEAD
const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, null)(Note)
=======
export default Note;

>>>>>>> origin/master
