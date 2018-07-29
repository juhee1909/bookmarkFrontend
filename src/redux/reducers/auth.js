import { VisibilityFilters } from '../actions/auth.js';

const {
    LOGIN_SUCCESS,LOGIN_FAILURE,SIGNUP_SUCCESS,SIGNUP_FAILURE,CLEAR_MESSAGE
} = VisibilityFilters;

const initialState = {
    login : {
        success : '',
        error : ''
    },
    signup : {
        success : '',
        error : ''
    }
}


export default function auth(state = initialState,action){
    switch(action.type){
        case 'LOGIN_SUCCESS' : 
            return {...state,login : { success : true } };
        case 'LOGIN_FAILURE' :
            return {...state,login : { success : false,error : action.message } };
        case 'SIGNUP_SUCCESS' : 
            return {...state,signup : { success : true } };
        case 'SIGNUP_FAILURE' :
            return {...state,signup : { success : false,error : action.message } };
        case 'CLEAR_MESSAGE' : 
            return {...state, login : {success : '' ,error : ''} };
        default : 
            return state;
    }
}