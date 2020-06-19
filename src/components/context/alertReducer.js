const SHOW_ALERT = 'components/context/SHOW-ALERT';
const HIDE_ALERT = 'components/context/HIDE-ALERT';

export const alertReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...action.payload,
                visible: true
            }
        case HIDE_ALERT:
            return {
                ...state,
                visible: false
            }
        default:
            return state;
    }
};



export const showAlert = (text, type = 'warning') => ({ type: SHOW_ALERT, payload: { text, type } });
export const hideAlert = () => ({ type: HIDE_ALERT });
