import React from 'react';
import { connect } from 'react-redux';

const Note = ({notes}) => {
    return (
        <ul>
            {
                notes.filter( note => note.archived === false).map( note => <li key={note.id}>{note.text}</li>)
            }
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, null)(Note)