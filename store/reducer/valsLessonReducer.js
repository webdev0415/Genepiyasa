import * as actionTypes from "../action/actionTypes"

const initState = {
	count: 0
}

export default function courseContentsReducer(state=initState, action) {
	switch (action.type) {
		case actionTypes.ADD_COUNT:
			return {
				...state,
				count: state.count+1
			}
		default:
			return state
	}
}