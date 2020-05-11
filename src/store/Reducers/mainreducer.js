import { combineReducers } from "redux";
import {albumcontent_reducer} from './albumcontent_reducer';
import {useralbum_reducer} from './useralbum_reducer';

const mainreducer = combineReducers({ albumcontent_reducer: albumcontent_reducer, useralbum_reducer: useralbum_reducer });

export default mainreducer;