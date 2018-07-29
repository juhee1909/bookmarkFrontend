import { VisibilityFilters } from '../actions/bookmark.js';

const {
    GET_BOOKMARK,ADD_BOOKMARK_SUCCESS,DELETE_BOOKMARK_SUCCESS
} = VisibilityFilters;

const initialState = {
    bookmark : {
        success : '',
        data : []
    }
}


export default function bookmark(state = initialState,action){
    switch(action.type){
        case 'GET_BOOKMARK' : 
            return {...state,bookmark : { data : action.bookmark , success : true } };
        case 'ADD_BOOKMARK_SUCCESS' : 
            return {...state,bookmark : {data : action.bookmark ,sucess : true } };
        case 'DELETE_BOOKMARK_SUCCESS':
            return {...state,bookmark : {data : action.bookmark ,sucess : true } };
        default : 
            return state;
    }
}