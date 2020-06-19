import React, { useContext, useEffect } from 'react';
import { Form } from './form';
import { Notes } from './notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { Preloader } from '../preloader/preloader';


export const MainPage = () => {
    const { loading, notes, fetch, remove } = useContext(FirebaseContext);
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div>
            <Form />

            <hr />
            {loading
                ? <Preloader />
                : <Notes notes={notes} onRemove={remove} />}
        </div>
    )
}