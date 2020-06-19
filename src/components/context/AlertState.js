import React, { useReducer } from 'react';
import { AlertContext } from './alertContext';
import { alertReducer, showAlert, hideAlert } from './alertReducer';


export const AlertState = ({ children }) => {

    const [state, dispatch] = useReducer(alertReducer, { visible: false });
    const show = (text, type) => (dispatch(showAlert(text, type)));
    const hide = () => (dispatch(hideAlert()));
    return (
        <AlertContext.Provider value={{ alert: state, hide, show }} >
            {children}
        </AlertContext.Provider >
    )
}