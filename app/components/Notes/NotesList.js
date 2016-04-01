import React, { Component } from 'react';

class NotesList extends Component {
    render(){
        const notes = this.props.notes;
        return (
            <ul className="list-group">
                {
                    notes
                        .map(
                            (note, index) =>
                                <li className="list-group-item" key={index}>{note}</li>
                        )
                }
            </ul>
        );
    }
}

export default NotesList;