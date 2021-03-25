import * as actionTypes from "../action/actionTypes";
const isEmpty = require("is-empty");

const initState = {
	allusers: [],
	user: [],
	profiles: {},
	isAuthenticated: false,
	message: '',
}

export default function authReducer(state=initState, action) {
	switch (action.type) {

		case actionTypes.SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}
		case actionTypes.GET_INITUSER:
			const todo = action.pagedatas
			const nameArr = []
			todo.map(item => nameArr.push([item.id, item.username, item.email, item.date_joined]))
			return {
				...state,
				allusers: nameArr
			}
		case actionTypes.GET_INITPROFILE:
			return {
				...state,
				profiles: action.payload
			}
		case actionTypes.ADD_MSG:
			return {
				...state,
				message: action.payload
			}
		default:
			return state;
	}
}