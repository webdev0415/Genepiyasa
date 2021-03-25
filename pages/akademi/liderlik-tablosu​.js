import React from 'react'
import styled from 'styled-components'
import Breadcrum from "../../components/utility/Breadcrum";
import Cloud from '../../rawSvg/cloud.svg'
import { ContentContainer, Wrapper, User } from "../../components/layout";
import Reward1 from '../../rawSvg/reward1.svg'
import Reward2 from '../../rawSvg/reward2.svg'
import Reward3 from '../../rawSvg/reward3.svg'
import Calendar from '../../rawSvg/calendar.svg'
import CategoryIcon from '../../rawSvg/categori.svg'
import GroupIcon from '../../rawSvg/group.svg'
import PageTitle from "./../../components/typography/PageTitle";
import {getInitCategory, getInitTradeIdea, getInitUser} from "../../store/action/actions"
import {connect} from 'react-redux'
import TablePage from '../../components/pages/leaderboard/Tablepage'
import DownIcon from '../../images/down.png'
import SearchIcon from '../../images/search.png'

const LeaderBoard = ({categorys, allusers, tradeideas, getInitUser, getInitCategory, getInitTradeIdea}) => {
	React.useEffect(()=>{
	    getInitUser()
	    getInitCategory()
	    getInitTradeIdea()
	  }, [])
	const [writersec, setWritersec] = React.useState(false)
	  const [categorysec, setCategorysec] = React.useState(false)
	if (tradeideas.length !== 0 && tradeideas.length !== undefined && tradeideas !== undefined) {
      tradeideas.forEach(item => {
        delete item.id
        delete item.trade_subject
        delete item.trade_content
        delete item.admin_approval
      })
  	}
  const [category, setCategory] = React.useState("")
	  const [writer, setWriter] = React.useState("")
	  
	  const handelCategoryChange = e => {
	      setCategory(e.target.textContent)
	    }
	  const handelWriterChange = e => {
	    setWriter(e.target.textContent)
	  }
  // const handleOptionClick = e => {
  // 	console.log(e.target)
  // }
  const handleWriterDisplaly = () => {
  	setWritersec(!writersec)
  }
  const handleCategoryDisplaly = () => {
  	setCategorysec(!categorysec)
  }
	return(
		<React.Fragment>
		<Breadcrum
        items={[
          { url: "/akademi", text: "Akademi" },
          { url: "/akademi/liderlik_tablosu", text: "Liderlik Tablosu" },
        ]}
      />
      <ContentContainer>
      <Wrapper style={{ flexDirection: "column", alignItems: "stretch" }}>
        <PageTitle><img src={Cloud} /> Trandingview Ligi</PageTitle>
        <SubTitle>
        	<h4>Trandingview sponsorluğundaki yazar ligine siz de katılım ve 1 aylık premium üyelik fırsatını yakalayın!</h4>
               <p>Lige katılabilmek için en az Ahtapot Rütbesi’ne ulaşmanız gerekmektedir.</p>
               <a href="#">Rütbe Sistem Detayları &rarr;</a>
        </SubTitle>
        <RewardArea>
	        <Reward>
		        <IconWrapper><img src={Reward1} /></IconWrapper>
		        <RewardDetails color="#0BCE91">
		        		<h6>Ayın Birincisine : </h6>
		                    <h4>1 Aylık  Premium Üyelik</h4>
		        </RewardDetails>
	        </Reward>
	        <Reward>
		        <IconWrapper><img src={Reward2} /></IconWrapper>
		        <RewardDetails color="#F7A05B">
		        		<h6>Ayın Birincisine : </h6>
		                    <h4>1 Aylık  Premium Üyelik</h4>
		        </RewardDetails>
	        </Reward>
	        <Reward>
		        <IconWrapper><img src={Reward3} /></IconWrapper>
		        <RewardDetails color="#686195">
		        		<h6>Ayın Birincisine : </h6>
		                    <h4>1 Aylık  Premium Üyelik</h4>
		        </RewardDetails>
	        </Reward>
        </RewardArea>
        <FilterArea>
           <DateInputWrapper>
                    <span><img src={Calendar} alt="" />&nbsp; Tarih: </span>
                    <DateInput type="text" placeholder="01/03/2020 - 31/03/2020" />
                 </DateInputWrapper>
                 <MultiSearch>
                    <SelectText>
                       <LeftSelect>
                        <span><img src={GroupIcon} alt="" />&nbsp; Yazarlar: &nbsp;</span>
                        <span class="selected">{writer}</span>
                       </LeftSelect>
                       <ArrowDown onClick={handleWriterDisplaly}><img src={DownIcon} alt="" /></ArrowDown>
                    </SelectText>
                    <div>
	                    {
	                    	writersec && (
	                    		<DropdownArea>
	                       <InputSearch />
	                       <ul>
	                       { allusers.length !== 0 && allusers !== undefined && allusers.length !== undefined
				              ? allusers.map((item, index) => <li value={item[1]} key={index}  onClick={handelWriterChange}>{item[1]}</li>)
				              : <li>No Writers</li> 
				            }
	                       </ul>
	                    </DropdownArea>
	                    		)
	                    }
                    </div>
                    

                 </MultiSearch>
                 <MultiSearch>
                    <SelectText>
                       <LeftSelect>
                        <span><img src={CategoryIcon} alt="" />&nbsp; Kategoriler: &nbsp;</span>
                        <span class="selected">{category}</span>
                       </LeftSelect>
                       <ArrowDown onClick={handleCategoryDisplaly}><img src={DownIcon} alt="" /></ArrowDown>
                    </SelectText>
                    {
                    	categorysec && (
                    		<DropdownArea>
                       <InputSearch />
                       <ul>
                       { categorys.length !== 0 && categorys !== undefined && categorys.length !== undefined
			              ? categorys.map((category, index) => <li value={category.category_title} key={index} onClick={handelCategoryChange}>{category.category_title}</li>)
			              : <li>No Category</li> 
			            }
                       </ul>
                    </DropdownArea>
                    		)
                    }
                    

                 </MultiSearch>
        </FilterArea>
        <TablePage data={tradeideas} category={category} writer={writer}/>

        </Wrapper>
        </ContentContainer>
    </React.Fragment>
		)
}
const InputSearch = styled.input`
	width: 100%;
  padding: 10px;
  padding-right: 30px;
  color: white;
  background: transparent url(../img/search.png) no-repeat 98% center;
  border: 1px solid #332B68;
  &:focus {
  	border: 1px solid #6b5ec1;
  outline: none;
  border-radius: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  }
`
const DropdownArea = styled.div`

  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background: #2A2359;
  padding: 10px;
  padding-bottom: 0;
  & > ul > li {
  	text-decoration: none;
  color: #686195;
  display: block;
  padding: 10px;
  border-bottom: 1px solid #332B68;
  }
  & > ul li:hover {
  	background: #332B68;
  }
`
const LeftSelect = styled.div`
color: #686195;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  & > span {
  	display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  }
`
const ArrowDown = styled.div`
cursor: pointer;
`
const SelectText = styled.div`
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
`
const MultiSearch = styled.div`
padding: 15px;
  width: 250px;
  margin: 0 12px;
  border: 1px solid #332B68;
  position: relative;
`
const DateInputWrapper = styled.div`
	width: 340px;
  border: 1px solid #332B68;
  padding: 15px;
  font-size: 14px;
  font-weight: 500;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-right: 12px;
`
const DateInput = styled.input`

`

const FilterArea = styled.div`
	background: #201A4B;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 25px;
  margin-top: 3rem;
`

const RewardDetails = styled.div`
  & > h4 {
  	font-size: 22px;
  font-weight: normal;
  margin: 0;
  color: white;
  }
  & > h6 {
  	font-size: 14px;
  color: ${(props) => props.color};
  margin: 0;
  font-weight: normal;
  margin-bottom: 10px;
  }
`
const IconWrapper = styled.div`

  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: 15px;
`
const Reward = styled.div`
	display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
`
const RewardArea = styled.div`
	display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-top: 1.5rem;
`
const SubTitle = styled.div`
	padding: 45px 0;
  border-bottom: 1px solid #201A4B;
  border-top: 1px solid #201A4B;
  & > h4 {
  	font-size: 22px;
  color: white;
  margin: 0;
  font-weight: normal;
  }
  & > p {
  	font-size: 14px;
  color: #686195;
  }
  & > a {
  	font-size: 14px;
  color: #0BCE91;
  }
`

const mapStateToProps = state => ({
  categorys: state.blogs.categorys,
  allusers: state.auth.allusers,
  tradeideas: state.blogs.tradeideas
})
const mapDispatchToProps = dispatch => ({
  getInitUser: () => dispatch(getInitUser()),
  getInitCategory: () => dispatch(getInitCategory()),
  getInitTradeIdea: () => dispatch(getInitTradeIdea())
})
export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)
// export default LeaderBoard;