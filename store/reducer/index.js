import {combineReducers} from "redux";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import courseContentsReducer from "./courseContentsReducer"
import valsLessonReducer from "./valsLessonReducer"
import authReducer from "./authReducer"
import errorsReducer from "./errorsReducer"
import examReducer from "./examContentsReducer"
import blogReducer from "./blogContentsReducer"
import signCacheUserReducer from "./signCacheUserReducer"

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['courseContents', 'auth', 'exams', 'blogs']
}

const rootReducer =  combineReducers({
	courseContents: courseContentsReducer,
	valsLesson: valsLessonReducer,
	auth: authReducer,
	exams: examReducer,
	blogs: blogReducer,
	cacheUser: signCacheUserReducer,
	errors: errorsReducer
})

export default persistReducer(persistConfig, rootReducer)