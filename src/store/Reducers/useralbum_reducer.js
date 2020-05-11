import {GETALBUM_START,GETALBUM_SUCCESS,GETALBUM_FAIL,ALBUM_ID_SUCCESS,ALBUM_ID_FAIL} from '../ActionTypes/action_type';
const initialState = {
    albums: [],
    album_id: [],
    ID: null,
    clicked: true,
    err: null
}

export const useralbum_reducer = ( state = initialState, action={}) => {
    switch(action.type) {
        case GETALBUM_SUCCESS:
            return {...state, albums: action.payload};
        case GETALBUM_FAIL:
            return {...state};
        case ALBUM_ID_SUCCESS:
            return {...state, album_id: action.payload}
        case ALBUM_ID_FAIL:
            return {...state}
        default:
            return {
                ...state
            }
    };
}

