import React from "react";
import Breadcrum from "../../components/utility/Breadcrum";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown'
import {connect} from "react-redux";
import {useRouter} from "next/router";

const Detail = ({user, tradeideas}) => {
	const router = useRouter();
	const {tradeidea} = router.query;
	const username = user.username;
	let publishde_date, date, time;
	if (tradeideas.length !== undefined) {
		tradeideas.filter(item=> item.trade_subject == tradeidea)
			.map((item, index)=>{
				publishde_date = new Date(item.trade_published)
				date = publishde_date.toDateString()
				time = publishde_date.toTimeString()
			})
	} 
	const handleChange = e => {
		if (e.target.id === "success") {
			setSuccess("success")
			setFailed("")
		} else if (e.target.id === "failed") {
			setFailed("failed")
			setSuccess()
		}
	}
	const handleClick = (id) => {
		if (success) {
			addTradeScore(id, success)
		} else if (failed) {
			addTradeScore(id, failed)
		} else {
			alert("Select a status tag.")
		}
	}

	return(
		<React.Fragment>
		<Breadcrum
        items={[
          { url: "/analizler", text: "Analizler" },
          { url: `/analizler/${tradeidea}`, text: `${tradeidea}` },
          // {
          //   url: "/akademi/sinavlar/destec",
          //   text: "Destek ve Direnç Seviyeleri",
          // },
        ]}
      />
		<ContainerContent>
		{ tradeideas.length !== undefined 
			&& tradeideas.filter(item=> item.trade_subject == tradeidea)
			.map((item, index)=>(
				<TradeIdeaContent key={index}>
					<TradeIdeaTitle>{item.trade_subject}</TradeIdeaTitle>
					<BulletHeader>
		              <BulletTitle>Date: {time.slice(0,8)} {date}</BulletTitle><br />
		              <AuthorTitle>Author: {item.trade_author}</AuthorTitle><br />
		              <AuthorTitle>Status: {item.trade_status_flag}</AuthorTitle>
		              <AuthorTitle>
		              {
						item.trade_status_flag === "success"
						? item.trade_score === null
							? <span>Waiting for admin approval...</span>
							: <span>Score: {item.trade_score}</span>
						: item.trade_status_flag === "failed"
							? <div></div>
							: item.trade_author === username
							  ? <div>
									<input type="radio" id="success" name="radio" value=" success" onChange={handleChange}/>
									<label htmlFor="success">success</label>&nbsp;&nbsp;
									<input type="radio" id="failed" name="radio" value=" failed" onChange={handleChange}/>
									<label htmlFor="failed">failed</label>&nbsp;&nbsp;
									<StatusButton type="button" className="btn btn-primary btn-sm" onClick={() => handleClick(item.id)}>Status Submit</StatusButton>
							  	</div>
							  : <div></div>
						}
						</AuthorTitle>
		    		</BulletHeader>
					<ReactMarkdown source={item.trade_content} />

				</TradeIdeaContent>
			))	
		}
		</ContainerContent>
		</React.Fragment>
	)
}
const TradeIdeaContent = styled.div`
	color: ${({ theme }) => theme.breadcrumInactiveColor};
	padding: 1rem;
`
const TradeIdeaTitle = styled.h1`
	font-size: 3.5rem;
	padding-bottom: 1rem;
`
const ContainerContent = styled.div`
	max-width: 111.7rem;
  margin: 0 auto;

  min-height: calc(100vh - 15rem);
  padding-bottom: 5rem;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.breadcrumInactiveColor};
`

const StatusButton = styled.button`
  text-align: center;
  padding: .8rem 1rem;
  color: ${({ theme }) => theme.buttonColor};
  font-size: 1.6rem;
  letter-spacing: -0.04em;
  border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
  box-shadow: none;
  color: #0bce91;
  background-color: rgba(11, 206, 145, 0.1);

`
const BulletHeader = styled.div`
  align-items: center;
  padding: 1.6rem 0;


  
`;

const BulletTitle = styled.div`
  padding-left: 2rem;
  
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: -0.02em;
  margin-right: 1rem;
`;
const AuthorTitle = styled.div`
  padding-left: 2rem;
  
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: -0.02em;
  margin-right: 1rem;
`
const mapStateToProps = state => ({
  tradeideas: state.blogs.tradeideas,
  user: state.auth.user
})
export default connect(mapStateToProps, null)(Detail);