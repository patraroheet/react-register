import { RETURN_BACK_ID} from "../ActionTypes/action_type";

const initialState = {
    ID: null
}

export const albumcontent_reducer = (state = initialState, action={}) => {
    switch(action.type) {
        case RETURN_BACK_ID:
            return {...state, ID: action.payload};
        default:
            return {
                    ...state
                }    
    };
}

