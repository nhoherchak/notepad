import React from 'react';

const Single = (props) => {
    return (
        <li className="col s4">
            <div className="card teal darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{props.note.title}</span>
                    <p> {props.note.details} </p>
                </div>
                <div className="row">
                    <div className="card-action col s3">
                        <a onClick={() => props.deleteNote(props.note.id)}>Delete</a>
                    </div>
                    <div className="card-action col s3">
                        <a onClick={() => props.updateNote(props.note.id)}>Update</a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Single;