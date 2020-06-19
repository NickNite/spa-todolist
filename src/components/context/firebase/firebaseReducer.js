const SHOW_LOADER = 'context/firebase/SHOW-LOADER';
const ADD_NOTE = 'context/firebase/ADD-NOTE';
const REMOVE_NOTE = 'context/firebase/REMOVE-NOTE';
const FETCH_NOTES = 'context/firebase/FETCH-NOTES';


export const firebaseReducer = (state, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case REMOVE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case FETCH_NOTES:
            return {
                ...state,
                notes: action.payload,
                loading: false
            }
    }
}


export const showLoader = () => ({ type: SHOW_LOADER });
export const addNote = (payload) => ({ type: ADD_NOTE, payload });
export const removeNote = (payload) => ({ type: REMOVE_NOTE, payload });
export const fetchNotes = (payload) => ({ type: FETCH_NOTES, payload });