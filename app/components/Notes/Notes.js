import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

class Notes extends React.Component {
    render(){
        return (
            <div>
                <h2>Notes for {this.props.username}</h2>
                <AddNote
                    addNote={this.props.addNote}
                    username={this.props.username}
                />
                <NotesList notes={this.props.notes} />
            </div>
        );
    }
}

Notes.propTypes= {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default Notes;