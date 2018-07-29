import axios from 'axios';
import {browserHistory} from 'react-router';
import config from '../../config.js';
export const VisibilityFilters = {
    GET_BOOKMARK   : 'GET_BOOKMARK',
    ADD_BOOKMARK_SUCCESS   : 'ADD_BOOKMARK_SUCCESS',
    ADD_BOOKMARK_FAILURE: 'ADD_BOOKMARK_FAILURE',
    DELETE_BOOKMARK_SUCCESS : 'DELETE_BOOKMARK_SUCCESS'
}

export function getBookmarks(){
    return dispatch =>{
        axios.get(config.apiUrl +'bookmark/',{
            headers: { "authorization": localStorage.getItem('token') },
        }).then(function(response){
            return dispatch ({ message :response.data.message ,bookmark : response.data.data,type : VisibilityFilters.GET_BOOKMARK});     
        }).catch(function(error){
            if (error.response.status === 401 || error.response.status === 403){
                return browserHistory.push('/')
            }
        })
    }
}
export function bookmarkAdd(inputs){
    return dispatch =>{
        axios.post(config.apiUrl + 'bookmark/create/',{
            ...inputs
        },{
            headers: { "authorization": localStorage.getItem('token') },
        }).then(function(response){
            return dispatch ({ message :response.data.message ,bookmark : response.data.data,type : VisibilityFilters.ADD_BOOKMARK_SUCCESS});     
        }).catch(function(error){
            console.log(error);
            if (error.response.status === 401 || error.response.status === 403){
                return browserHistory.push('/')
            }    
        })
    }
}

export function logout(){
    return dispatch =>{
        localStorage.removeItem('token');
        browserHistory.push('/');
    }
}

export function deleteBookmark(id){
    return dispatch =>{
        axios.delete(config.apiUrl + 'bookmark/delete/' + id,{
            headers: { "authorization": localStorage.getItem('token') },
        }).then(function(response){
            return dispatch ({ message :response.data.message ,bookmark : response.data.data,type : VisibilityFilters.DELETE_BOOKMARK_SUCCESS});     
        }).catch(function(error){
            console.log(error);
            if (error.response.status === 401 || error.response.status === 403){
                return browserHistory.push('/')
            }    
        })
    }
}