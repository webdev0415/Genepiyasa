import React from "react";
import {useRouter} from "next/router";
import { ContentContainer, Paragraph } from "../../../../components/layout";
import {connect} from "react-redux"
import Breadcrum from "../../../../components/utility/Breadcrum";
import styled from "styled-components"

const Detail = ({auth, contents}) => {
	const router = useRouter()
	const {course, lesson} = router.query;
	let data
	if (contents && contents[course]) {
		data = contents[course].lessons[lesson[0]] && contents[course].lessons[lesson[0]].topics[lesson[1]].subtopics
	}
	
	return (
		<React.Fragment>
		{
			course && lesson && (
				<Breadcrum
	        items={[
	          { url: "/akademi", text: "Akademi" },
	          { url: "/akademi/kurslar", text: "kurslar" },
	          {
	            url: `/akademi/kurslar/${course}`,
	            text: `${course}`,
	          },
	          {
	            url: `/akademi/kurslar/${course}/${lesson[0]}`,
	            text: `${lesson[0]}`,
	          },
	          {
	            url: `/akademi/kurslar/${course}/${lesson[0]}/${lesson[1]}`,
	            text: `${lesson[1]}`,
	          },
	        ]}
	      />
				)
		}
			
	      <ContentContainer>
		      <ContainerContent>
		      {contents && contents[course] && contents[course].lessons[lesson[0]] && (
		      	<TopicContent>
			      	<TopicTitle>{lesson[1]}</TopicTitle>
			      	<TopicDetail>{contents[course].lessons[lesson[0]].topics[lesson[1]].topic_detail}</TopicDetail>
		      	</TopicContent>
		      )}
			  {data && Object.keys(data).map((item, key)=>(
			  	<SubTopicContent>
		      		<SubTopicTitle>{item}</SubTopicTitle>
		      		<SubTopicDetail>{data[item].subtopic_detail}</SubTopicDetail>
		      		<SubTopicImg src={data[item].subtopic_image_link} alt="SubTopic Image"/>
		        </SubTopicContent>
			  	)) }
		      </ContainerContent>
		      
	      </ContentContainer>
		</React.Fragment>
		)
}
const SubTopicImg = styled.img`
	width: 400px;
	height: 300px;
	padding: 1rem;
`
const ContainerContent = styled.div`
	max-width: 111.7rem;
  margin: 0 auto;

  min-height: calc(100vh - 15rem);
  padding-bottom: 5rem;
`
const SubTopicContent = styled.div`
	color: ${({ theme }) => theme.breadcrumInactiveColor};
	padding: 1rem;
`
const SubTopicTitle = styled.h2`
	font-size: 2rem;
	padding-bottom: 1rem;
`
const SubTopicDetail = styled.p`
`
const TopicContent = styled.div`
	color: ${({ theme }) => theme.breadcrumInactiveColor};
	padding: 1.5rem;
`
const TopicTitle = styled.h1`
	font-size: 3.5rem;
	padding-bottom: 2rem;
`
const TopicDetail = styled.p`
	font-size: 1.5rem;
`
const mapStateToProps = state=>({
  auth: state.auth,
  contents: state.courseContents.contents
});
export default connect(mapStateToProps, null)(Detail)
// export default Detail;