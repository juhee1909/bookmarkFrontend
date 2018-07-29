import { combineReducers } from 'redux';
import auth from './auth';
import bookmark from './bookmark';

export default combineReducers({
    auth,bookmark
})