import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';


export const Form = () => {

    const [value, setValue] = useState('');
    const state = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            firebase.add(value.trim()).then(() => {
                state.show('Note was created', 'success')
            }).catch(() => {
                state.show('Oops, something went wrong', 'danger')
            })
            setValue('');
        } else {
            state.show('Note cannot be empty', 'warning')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" id="email" placeholder="Enter new note"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}