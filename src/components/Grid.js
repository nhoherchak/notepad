import React from 'react';
import Single from './Single';

class Grid extends React.Component {
    deleteNote(id) {
        this.props.deleteNote(id);
    }
    updateNote(id) {
        this.props.updateNote(id);
    }
    renderItems() { //need to use this.props from stateful comps
        return this.props.notes.map(item => 
        <Single 
        key = {item.id}
        note = {item} //passing as a prop
        deleteNote= {this.deleteNote.bind(this)}
        updateNote= {this.updateNote.bind(this)}
        />
    );
    }

    render() {
        return (
            <div className="row">
                <ul>
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}

export default Grid;