import React from "react"
import ReactMarkdown from 'react-markdown'
import styled from "styled-components";
import GreenButtonSecondary from "./GreenButtonSecondary";
import Link from "next/link"

const BlogItem = ({item, username, addTradeScore}) => {
	const [more, setMore] = React.useState(false)
	const [success, setSuccess] = React.useState("")
	const [failed, setFailed] = React.useState("")
	const handleMoreClick = () => {
		setMore(!more)
	}
	const handleChange = e => {
		console.log("item id", e.target.id)
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
	const publishde_date = new Date(item.trade_published)
	const date = publishde_date.toDateString()
	const time = publishde_date.toTimeString()
	return (
		<>
		<BulletHeader>
              <BulletTitle>{time.slice(0,8)} {date}</BulletTitle>
              <AuthorTitle> by {item.trade_author}</AuthorTitle>
              <AuthorTitle>{item.trade_status_flag}</AuthorTitle>
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
							<input type="radio" id="success" name="radio" value="success" onChange={handleChange}/>
							<label htmlFor="success">success</label>&nbsp;&nbsp;
							<input type="radio" id="failed" name="radio" value="failed" onChange={handleChange}/>
							<label htmlFor="failed">failed</label>&nbsp;&nbsp;
							<StatusButton type="button" className="btn btn-primary btn-sm" onClick={() => handleClick(item.id)}>Status Submit</StatusButton>
					  	</div>
					  : <div></div>
				}
				</AuthorTitle>
    </BulletHeader>
            
            <Link href={`/analizler/${item.trade_subject}`}>
              <Description>{item.trade_subject} Category: {item.trade_category}</Description>
             </Link>
              {/*<p style={{textAlign: 'right'}} onClick={handleMoreClick}>{more ? "Read Less..." : "Read More..."}</p>
              {
                more && (<ReactMarkdown source={item.trade_content} />)
              }*/}
            
        
            </>
		)
}
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
  display: flex;
  align-items: center;
  padding: 1.6rem 0;
  position: relative;

  &::before {
    content: "";
    height: 1.6rem;
    width: 1.6rem;
    position: absolute;
    background-color: ${({ theme }) => theme.nestedBulletTitleColor};
    left: 0;
    border-radius: 0.8rem;
    transform: translateX(-50%);
    z-index: 2;
  }

  &::after {
    content: "";
    height: 100%;
    width: 0.2rem;

    position: absolute;
    left: -0.1rem;
    top: 50%;
    z-index: 1;

    background-color: ${({ theme }) => theme.nestedBulletTitleColor};
  }
`;

const BulletTitle = styled.li`
  padding-left: 2rem;
  color: ${({ theme }) => theme.nestedBulletTitleColor};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: -0.02em;
  margin-right: 1rem;
`;

const Description = styled.p`
  max-width: 79rem;
  font-weight: 500;
  padding-left: 2rem;
  font-size: 2.2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.titleColor};
  position: relative;
  padding-bottom: 2rem;

  &::after {
    content: "";
    height: calc(100% - 0.2rem);
    width: 0.2rem;

    position: absolute;
    left: -0.1rem;
    top: 30%;
    z-index: 1;

    background-color: ${({ theme }) => theme.nestedBulletTitleColor};
  }

  &:last-child::after {
    /* height: calc(100% - 0.2rem); */
  }
`;
const AuthorTitle = styled.span`
  padding-left: 2rem;
  color: ${({ theme }) => theme.nestedBulletTitleColor};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: -0.02em;
  margin-right: 1rem;
`
const AddContainer = styled.li`
  padding-left: 2rem;
  position: relative;

  &::after {
    content: "";
    height: 1.4rem;
    width: 1.4rem;
    position: absolute;
    border: 0.2rem solid ${({ theme }) => theme.nestedBulletTitleColor};
    top: 50%;
    left: 0;
    border-radius: 0.8rem;
    transform: translateX(-50%) translateY(-50%);
    z-index: 2;
  }
`;
export default BlogItem