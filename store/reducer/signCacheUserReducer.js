import * as actionTypes from "../action/actionTypes";

const initState = {
	chacheUser: {},
	interests: [],
	talent: []
}

export default function signCacheUser(state=initState, action) {
	switch (action.type) {
		case actionTypes.ADD_OR_REMOVE_INTERESTS:
			return {
				...state,
				interests: action.payload
			}
		case actionTypes.ADD_OR_REMOVE_TALENT:
			return {
				...state,
				talent: action.payload
			}
		case actionTypes.CACHE_USER:
			return {
				...state,
				chacheUser: action.payload
			}
		default:
			return state;
	}
}