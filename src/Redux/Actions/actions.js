import ADD_NOTE from './action-types';


export const addNote = (payload) => {
    return {
        type : ADD_NOTE,
        payload : payload
    }
}