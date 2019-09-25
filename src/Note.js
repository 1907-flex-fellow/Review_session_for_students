import React from 'react';
import { connect } from 'react-redux';
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
            }
        </ul>
    )
}

export default Note;

