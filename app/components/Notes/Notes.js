import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({username, addNote, notes}) => {

    return (
        <div>
            <h2>Notes for { username }</h2>
            <AddNote
                addNote={ addNote }
                username={ username }
            />
            <NotesList notes={ notes } />
        </div>
    );
}

Notes.propTypes= {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default Notes;