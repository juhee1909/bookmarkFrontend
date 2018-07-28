import { VisibilityFilters } from '../actions/auth.js';

const {
    LOGIN_SUCCESS,LOGIN_FAILURE,SIGNUP_SUCCESS,SIGNUP_FAILURE
} = VisibilityFilters;

const initialState = {
    login : {
        success : '',
        error : ''
    }
}


export default function auth(state = initialState,action){
    switch(action.type){
        default : 
            return state;
    }
}