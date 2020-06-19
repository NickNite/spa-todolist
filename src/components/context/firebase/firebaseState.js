import React, { useReducer } from 'react';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer, showLoader, addNote, removeNote, fetchNotes } from './firebaseReducer';
import axios from 'axios';

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({ children }) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoad = () => dispatch(showLoader());

    const add = async (title) => {
        const note = {
            title, date: new Date().toJSON()
        }
        try {
            const response = await axios.post(`${url}/notes.json`, note);
            const payload = {
                ...note,
                id: response.data.name
            }
            dispatch(addNote(payload));
        }
        catch (e) {
            throw new Error(e.message)
        }
    }

    const remove = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`)
        dispatch(removeNote(id));
    }

    const fetch = async () => {
        showLoad();
        const response = await axios.get(`${url}/notes.json`);
        const payload = Object.keys(response.data).map(item => {
            return {
                ...response.data[item],
                id: item
            }
        })
        dispatch(fetchNotes(payload));
    }

    return (
        <FirebaseContext.Provider value={{
            showLoad, add, remove, fetch,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}