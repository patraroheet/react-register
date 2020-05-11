import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import mainreducer from './Reducers/mainreducer';

const store = createStore( mainreducer,applyMiddleware(thunk));

export default store;