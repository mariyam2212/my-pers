import { act } from 'react-dom/test-utils';
import {ADD_NOTE} from '../Actions/action-types';

const initialState = {
    id : '0',
    content : '',
    isFav : false,
    tag : ''
}

const reducerNote = (state=initialState, action) => {
    switch(action.type){
        case ADD_NOTE : {
            return [
                ...state,
                {
                    id : Math.random(),
                    content : action.payload.content,
                    isFav : action.payload.isFav,
                    tag : action.payload.tag
                }
            ]
        }
        default : 
        return state;
    }
    return state;
}

export default reducerNote;