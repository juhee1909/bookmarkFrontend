import axios from 'axios';
import {browserHistory} from 'react-router';
import config from '../../config.js';
export const VisibilityFilters = {
    LOGIN_SUCCESS   : 'LOGIN_SUCCESS',
    LOGIN_FAILURE   : 'LOGIN_FAILURE',
    SIGNUP_SUCCESS  : 'SIGNUP_SUCCESS',
    SIGNUP_FAILURE  : 'SIGNUP_FAILURE',
    NOT_AUTHORIZED  : 'NOT_AUTHORIZED',
    CLEAR_MESSAGE   : 'CLEAR_MESSAGE'
}

export function login(inputs){
    return dispatch =>{
        axios.post(config.apiUrl +'user/login',{
        ...inputs  
        }).then(function(response){
                localStorage.setItem('token',response.data.data);
                return dispatch({type : VisibilityFilters.LOGIN_SUCCESS,message : 'Successfuly logged in'})
        }).catch(function(error){
            return dispatch({message : error.response.data.message ,type : VisibilityFilters.LOGIN_FAILURE})
        })
    }
}
export function signup(inputs){
    return dispatch =>{
        axios.post(config.apiUrl +'user/signup',{
        ...inputs  
        }).then(function(response){
                localStorage.setItem('token',response.data.data);
                return dispatch({type : VisibilityFilters.SIGNUP_SUCCESS,message : 'Successfuly signed up'})
        }).catch(function(error){
            return dispatch({message : error.response.data.message ,type : VisibilityFilters.SIGNUP_FAILURE})
        })
    }
}

export function isAuthorized(){
    return dispatch =>{
        axios.get(config.apiUrl +'user/verifyToken',{
            headers: { "authorization": localStorage.getItem('token') },
        }).then(function(response){
            browserHistory.push('/bookmark');return false;
        }).catch(function(error){
            localStorage.removeItem('token');
            return dispatch( { type: VisibilityFilters.NOT_AUTHORIZED } )
        })
    }
}
export function clearMessage(){
    return dispatch =>{
        return dispatch( {type: VisibilityFilters.CLEAR_MESSAGE} )
    }
}