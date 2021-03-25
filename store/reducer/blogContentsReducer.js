import * as actionTypes from "../action/actionTypes";
const initState = {
	categorys: {},
	posts: {},
	tradeideas: {}
}

export default function courseContentsReducer(state=initState, action) {

	switch (action.type) {
		case actionTypes.GET_INITBLOG:
	        return {
	        	...state,
	        	posts: action.pagedatas
	        }
	    case actionTypes.GET_INITCATEGORY:
	    	return {
	    		...state,
	    		categorys: action.pagedatas
	    	}
	    case actionTypes.GET_INITTRADEIDEA:
	    	return {
	    		...state,
	    		tradeideas: action.pagedatas
	    	}
		default:
			return state
	}
}