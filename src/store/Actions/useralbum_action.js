import {GETALBUM_START,GETALBUM_SUCCESS,GETALBUM_FAIL,ALBUM_ID_SUCCESS,ALBUM_ID_FAIL} from '../ActionTypes/action_type';
import axios from 'axios';


 export const getAlbums = () => dispatch => {
   
     axios.get(`https://picsum.photos/v2/list`)
    .then(res => {
        dispatch({
            type:GETALBUM_SUCCESS,
            payload:res.data
        })
    })
    .catch (err => {
        dispatch({
            type:GETALBUM_FAIL,
            payload: err
        });
    })
}

export const handleInfo = (id) => dispatch =>  {
    axios.get(`https://picsum.photos/id/`+ id +`/info`)
.then(res => {
    dispatch({
        type: ALBUM_ID_SUCCESS,
        payload:res.data
    });
})
.catch (err => {
    dispatch({
        type: ALBUM_ID_FAIL,
        payload: err    
    });
})
}


// handleInfo = (id) => {
//     .then(res => {
//         this.setState({album_id: res.data})
 
//         this.props.history.push({
//             pathname: '/albumcontent',
//             state: {album_id: res.data},
//         })
//       this.setState({ID: id}) 
//     })
// }
