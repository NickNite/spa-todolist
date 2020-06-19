import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Notes = ({ notes, onRemove }) => {
    return (
        <div>
            <TransitionGroup component="ul" className="list-group">
                {notes.map((note, index) => {
                    return (
                        <CSSTransition
                            key={index}
                            classNames={'note'}
                            timeout={800}>
                            <li className="list-group-item list-group-item-primary notes mb-2">
                                <div>
                                    <strong>{note.title}</strong>
                                    <small>{new Date().toLocaleDateString()}</small>
                                </div>
                                <button onClick={() => { onRemove(note.id) }} type="button" className="btn btn-outline-danger">&times;</button>
                            </li>
                        </CSSTransition>)
                })}
            </TransitionGroup>
        </div>
    )
}