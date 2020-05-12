import {RETURN_BACK_ID} from '../ActionTypes/action_type';
import store from '../store_index';




export const handleReturn = (id) => dispatch => {
    dispatch({
        type: RETURN_BACK_ID,
        payload : id
    });
    console.log("handlereturn function sends:",id)
}