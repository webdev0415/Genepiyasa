import * as actionTypes from "./actionTypes"
import axios from "axios"
import {SERVER_PORT} from "../config"
import Router from 'next/router'
import setAuthToken from "../../utils/setAuthToken"
import jwt_decode from "jwt-decode";

export const addAttendingCount = () => {
    return {
        type: actionTypes.ADD_ATTENDING_COUNT
    }
}

export const changePassword = (data) => {
    return dispatch => {
        axios
        .post(`${SERVER_PORT}/rest-auth/password/change/`, data)
        .then(res => console.log(res))
        .catch(err =>
                dispatch({
                    type:actionTypes.GET_ERRORS,
                    payload: err.response.data
                }) 
        )
    }
    
}

export const addReal = (course, lesson, topic, detectVal, id) => {
    
    axios
    .put(`${SERVER_PORT}/api/courses/${id}/`, detectVal)
    .then(res => console.log(res))
    .catch(err=>console.log(err))
    return {
        type: actionTypes.ADD_CONFIRM,
        payload: {course: course, lesson: lesson, topic: topic}
    }
}
export const removeReal = (course, lesson, topic, detectVal, id) => {
    
    axios
    .put(`${SERVER_PORT}/api/courses/${id}/`, detectVal)
    .then(res => console.log(res))
    .catch(err=>console.log(err))
    return {
        type: actionTypes.REMOVE_CONFIRM,
        payload: {rcourse: course, rlesson: lesson, rtopic: topic}
    }
}
export const addConfirm = (course, lesson, topic, id) => {
	return dispatch=> {
	let detectVal;
	axios
    .get(`${SERVER_PORT}/api/courses/`)
    .then( res => {
        detectVal = res.data.filter(list => list.id === id)[0]

        detectVal.topic_status = true
        dispatch(addReal(course, lesson, topic, detectVal, id))
    })
    .catch(err => console.log(err));

	}
}
export const removeConfirm = (course, lesson, topic, id) => {
	return dispatch=> {
	let detectVal;
    axios
    .get(`${SERVER_PORT}/api/courses/`)
    .then( res => {
        detectVal = res.data.filter(list => list.id === id)[0]

        detectVal.topic_status = false
        dispatch(removeReal(course, lesson, topic, detectVal, id))
    })
    .catch(err => console.log(err));
	}
}
export const updateScore = (detectVal, id) => {
    axios
    .put(`${SERVER_PORT}/api/userscores/${id}/`, detectVal)
    .then(res => console.log(res))
    .catch(err=>console.log(err))
     return {
        type: actionTypes.UPDATE_SCORE
    }
}
export const addScore = (newScore) => {
    axios
    .post(`${SERVER_PORT}/api/userscores/`, newScore)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    return {
        type: actionTypes.UPDATE_SCORE
    }
}
export const updateTradeScore = (id, detectVal) => {
    return dispatch => {
        axios
        .put(`${SERVER_PORT}/api/tradeidea/${id}/`, detectVal)
        .then(res => dispatch(getInitTradeIdea()))
        .catch(err => console.log(err))
    }

}
export const addTradeScore = (id, val) => {
    return dispatch => {
        let detectVal;
        axios
        .get(`${SERVER_PORT}/api/tradeidea/${id}`)
        .then(res=>{
            detectVal = res.data
            detectVal.trade_status_flag = val
            dispatch(updateTradeScore(id, detectVal))
        })
        .catch(err => console.log(err))
    }
}
export const updateUserScore = (courseName, user_id, username, grade, count) => {
    const newScore = {
                        "user_id": user_id,
                        "username": username,
                        "exam_title": courseName,
                        "exam_score": grade,
                        "exam_attending_count": count,
                        "exam_pass_status": true
                    }
    return dispatch=> {
    let detectVal;
    axios
    .get(`${SERVER_PORT}/api/userscores/`)
    .then( res => {
        if (res.data.length !== 0 && res.data.length !== undefined) {
            detectVal = res.data.filter(list => list.user_id === user_id && list.exam_title === courseName)
            if (detectVal.length !== 0 && detectVal.length !== undefined) {
                const newVal = detectVal[0]
                newVal.exam_score = grade
                newVal.exam_attending_count = count
                dispatch(updateScore(newVal, newVal.id))
            } else {
                dispatch(addScore(newScore))
            }
        } else {
            dispatch(addScore(newScore))
        }
    })
    .catch(err => console.log(err));
    }
}
export const addCount = () => {
	return {
		type: actionTypes.ADD_COUNT
	}
}
export const addPost = (newPost) => {
    return dispatch => {
        axios
        .post(`${SERVER_PORT}/api/blog/`, newPost)
        .then(res => dispatch(getInitBlog()))
        .catch(err=>
            dispatch({
                type:actionTypes.GET_ERRORS,
                payload: err.response.data
                })
            )
    }
    
}
export const addTrade = (newPost) => {
    return dispatch => {
        axios
        .post(`${SERVER_PORT}/api/tradeidea/`, newPost)
        .then(res => dispatch(getInitTradeIdea()))
        .catch(err=>
            dispatch({
                type:actionTypes.GET_ERRORS,
                payload: err.response.data
                })
            )
    }
    
}
export const getInitUser = () => {
    
    return dispatch=> {
    axios
    .get(`${SERVER_PORT}/api/users/`)
    .then( res => {
        res.status === 200
        ? dispatch({type: actionTypes.GET_INITUSER, pagedatas:res.data})
        : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
    })
    .catch(err => console.log(err));
    }
}
export const getInitProfile = () => {
    
    return dispatch=> {
    axios
    .get(`${SERVER_PORT}/api/userprofile/`)
    .then( res => {
        res.status === 200
        ? dispatch({type: actionTypes.GET_INITPROFILE, payload:res.data})
        : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
    })
    .catch(err => console.log(err));
    }
}
export const getInitTradeIdea = () => {
    
    return dispatch=> {
    axios
    .get(`${SERVER_PORT}/api/tradeidea/`)
    .then( res => {
        res.status === 200
        ? dispatch({type: actionTypes.GET_INITTRADEIDEA, pagedatas:res.data})
        : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
    })
    .catch(err => console.log(err));
    }
}
export const getInitBlog = () => {
    
    return dispatch=> {
    axios
    .get(`${SERVER_PORT}/api/blog/`)
    .then( res => {
        res.status === 200
        ? dispatch({type: actionTypes.GET_INITBLOG, pagedatas:res.data})
        : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
    })
    .catch(err => console.log(err));
    }
}
export const getInitCategory = () => {
    
    return dispatch=> {
    axios
    .get(`${SERVER_PORT}/api/category/`)
    .then( res => {
        res.status === 200
        ? dispatch({type: actionTypes.GET_INITCATEGORY, pagedatas:res.data})
        : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
    })
    .catch(err => console.log(err));
    }
}
export const getInitData = () => {
	
	return dispatch=> {
	axios
    .get(`${SERVER_PORT}/api/courses/`)
    .then( res => {
    	res.status === 200
    	? dispatch({type: actionTypes.GET_INITDATA, pagedatas:res.data})
		: Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
    })
    .catch(err => console.log(err));
	}
}
export const getInitScore = (username) => {
    return dispatch=> {
    axios
    .get(`${SERVER_PORT}/api/userscores/`)
    .then( res => {

        const payload = res.data
        //                 .filter(item => item.user.username === username)
        // for (var i = 0; i < payload.length; i++) {
        //     delete payload[i].user
        // }

        // console.log("payload", payload)
        res.status === 200
        ? dispatch({type: actionTypes.GET_INITSCORE, pagedatas: payload})
        : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
    })
    .catch(err => console.log(err));
    }
}
export const getInitExam = () => {
    
    return dispatch=> {
    axios
    .get(`${SERVER_PORT}/api/answers/`)
    .then( res => {
        res.status === 200
        ? dispatch({type: actionTypes.GET_INITEXAM, pagedatas:res.data})
        : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
    })
    .catch(err => console.log(err));
    }
}
export const signProfile = (newProfile, id) => {
    return dispatch => {
        axios
        .put(`${SERVER_PORT}/api/userprofile/${id}/`, newProfile)
        .then(res => {
            dispatch({
                type: actionTypes.GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
    }
}
export const addOrRemoveToCacheUser = (icon, value) => {
    if (icon == "interests") {
        return {
            type: actionTypes.ADD_OR_REMOVE_INTERESTS,
            payload: value
        }
    } else if (icon == "talent") {
            return {
                type: actionTypes.ADD_OR_REMOVE_TALENT,
                payload: value
            }
    }

}
export const signupCacheUser = (userData) => {
    return {
        type: actionTypes.CACHE_USER,
        payload: userData
    }
}
export const addMessage = (detail) => {
    return {
        type: actionTypes.ADD_MSG,
        payload: detail
    }
}
export const signupUser = (userData, userProfile, setStep, setMessage) => {

    const detectEmail = userData.email
    let newProfile
    
    return  dispatch => {
    axios
    .post(`${SERVER_PORT}/rest-auth/registration/`, userData)
    .then(res => {
        if (res.data.detail) {
            setMessage(res.data.detail)
            axios
            .get(`${SERVER_PORT}/api/users/`)
            .then(res => {
                const detectUser = res.data.filter(item => item.email === detectEmail)[0]
                axios
                .get(`${SERVER_PORT}/api/userprofile/`)
                .then(res=> {
                    const detectProfile = res.data.filter(item=>item.user === detectUser.id)[0]
                    newProfile = {
                        ...userProfile,
                        "user": detectUser.id
                    }
                    dispatch(signProfile(newProfile, detectProfile.id))
                    Router.push('/login')
                })
                .catch(err => {
                    if (err.response && err.response.data) {
                        dispatch({
                            type: actionTypes.GET_ERRORS,
                            payload: err.response.data
                        })
                    } else {
                        console.log(err)
                    }    
                })
            
            })
            .catch(err => {
                if (err.response && err.response.data) {
                        dispatch({
                            type: actionTypes.GET_ERRORS,
                            payload: err.response.data
                        })
                    } else {
                        console.log(err)
                        setMessage("Unexpected Error")
                    }
            })
            
        }
   
    })
    .catch(err=> {
        if (err.response && err.response.data) {
                        dispatch({
                            type: actionTypes.GET_ERRORS,
                            payload: err.response.data
                        })
                        setStep(1)
                    } else {
                        console.log(err)
                        setMessage("Unexpected Error")
                    } 
    })
    }
}
export const loginUser = (userData, setMessage) => {
    return dispatch => {
        axios
        .post(`${SERVER_PORT}/rest-auth/login/`, userData)
        .then(res=>{    
            let token
            if (res.data.token) {
                token = res.data.token
            } else if (res.data.key) {
                token = res.data.key
            }
            localStorage.setItem("jwtToken", token)
            // setAuthToken(token);
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))
        })
        .catch(err=>{
                if (err.response) {
                    dispatch({
                        type:actionTypes.GET_ERRORS,
                        payload: err.response.data
                    })
                    setMessage(err.response.data.non_field_errors)
                }
            }
            ) 

    }
}
export const setCurrentUser = decoded=> {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: decoded
    }
}
export const logoutUser = () =>dispatch=> {
    axios
    .post(`${SERVER_PORT}/rest-auth/logout/`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    }