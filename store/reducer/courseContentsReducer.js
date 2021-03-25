import * as actionTypes from "../action/actionTypes";
const initState = {
	contents: {}
}

export default function courseContentsReducer(state=initState, action) {

	switch (action.type) {
		case actionTypes.GET_INITDATA:

			const todo = action.pagedatas

	        let final = {}
	        const courseNameArr = new Set()
	        const lessonNameArr = new Set()
	  		const topicNameArr = new Set()
	  		const subtopicNameArr = new Set()
	        todo.map(item=>courseNameArr.add(item.topic.lesson.course.course_title))
	        courseNameArr.forEach(ele=>{
	        	final[ele]={}
	        	todo
	        	.filter(item => item.topic.lesson.course.course_title === ele)
	        	.map(bie => {
	        		final[ele].course_detail = bie.topic.lesson.course.course_detail
	        		final[ele].course_imglink = bie.topic.lesson.course.course_imglink
	        		final[ele].svg_name = bie.topic.lesson.course.svg_name
	        		final[ele].lessons = {}
	        		lessonNameArr.add(bie.topic.lesson.lesson_title)
	        	})
	        	lessonNameArr.forEach(item => {
	                final[ele].lessons[item] = {}
	        		todo
	        		.filter(tt => tt.topic.lesson.course.course_title === ele)
	        		.filter(tt => tt.topic.lesson.lesson_title === item)
	        		.map(tt => {
	        			final[ele].lessons[item].lesson_detail = tt.topic.lesson.lesson_detail
	        			final[ele].lessons[item].lesson_img = tt.topic.lesson.lesson_img
	        			final[ele].lessons[item].topics = {}
	        			topicNameArr.add(tt.topic.topic_title)
	                    	                    
	                })
	                topicNameArr.forEach(aie=>{
	                	final[ele].lessons[item].topics[aie] = {}
	                	todo
	                	.filter(tt => tt.topic.lesson.course.course_title === ele)
	                	.filter(tt => tt.topic.lesson.lesson_title === item)
	                	.filter(tt => tt.topic.topic_title === aie)
	                	.map(tt=>{
	                		
	                		final[ele].lessons[item].topics[aie].topic_detail = tt.topic.topic_detail
	                		final[ele].lessons[item].topics[aie].topic_status = tt.topic.topic_status
	                		final[ele].lessons[item].topics[aie].subtopics = {}
	                		subtopicNameArr.add(tt.subtopic_title)
	                	})
	                	subtopicNameArr.forEach(kk=>{
	                		final[ele].lessons[item].topics[aie].subtopics[kk] = {}
	                		todo
		                	.filter(tt => tt.topic.lesson.course.course_title === ele)
		                	.filter(tt => tt.topic.lesson.lesson_title === item)
		                	.filter(tt => tt.topic.topic_title === aie)
		                	.filter(tt => tt.subtopic_title === kk)
		                	.map(tt=>{
		                		// final[ele].lessons[item].topics[aie].subtopics[kk].push([final[ele].lessons[item].topics[aie].subtopics[kk]]);
		                		final[ele].lessons[item].topics[aie].subtopics[kk].subtopic_detail = tt.subtopic_detail
		                		final[ele].lessons[item].topics[aie].subtopics[kk].subtopic_image_link = tt.subtopic_image_link
		                	})
	                	})
	                	subtopicNameArr.clear();
	                })
	                topicNameArr.clear()
	        	})
	        	lessonNameArr.clear()
	        })
	        return {
	        	...state,
	        	contents: final
	        }
		case actionTypes.ADD_CONFIRM:
			
			const {course, lesson, topic} = action.payload
			state.contents[course][lesson].filter(item => item[0] === topic)[0][1] = true
			return {
				...state
			}
		case actionTypes.REMOVE_CONFIRM:
			const {rcourse, rlesson, rtopic} = action.payload
			state.contents[rcourse][rlesson].filter(item => item[0] === rtopic)[0][1] = false
			return {
				...state
			}
		default:
			return state
	}
}