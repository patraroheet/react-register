import {RETURN_BACK_ID} from '../ActionTypes/action_type';


// export const loadAlbumContent = () => {
//     dispatch({
//         type: LOAD_CONTENT
//         payload: 
//     })
// }


export const handleReturn = (id) => dispatch => {
    dispatch({
        type: RETURN_BACK_ID,
        payload : id
    });
    console.log("handlereturn function sends:",id)
}