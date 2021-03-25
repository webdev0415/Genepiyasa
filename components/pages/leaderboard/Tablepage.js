import React from "react"
import styled from 'styled-components'
import Avatar from '../../../images/tiger.png'
const TablePage = ({data, category, writer}) => {
  let writerNameArr = new Set()
  let newdata
  if (writer) {
    if (category) {
      newdata = data.filter(item => item.trade_author === writer).filter(item => item.trade_category === category)
    } else {
      newdata = data.filter(item => item.trade_author === writer)
    }
  } else {
    if (category) {
      newdata = data.filter(item => item.trade_category === category)
    } else {
      newdata = data
    }
  }
  let score = {}
  let status = {}
  if (newdata.length !== 0 && newdata.length !== undefined && newdata !==undefined) {
    
    newdata.forEach(item => writerNameArr.add(item.trade_author))
    writerNameArr.forEach(item => {
      score[item] = 0
      status[item] = {}
      status[item]["total"] = 0
      status[item]["success"] = 0
      status[item]["waiting"] = 0
      status[item]["failed"] = 0
      newdata.filter(list => list.trade_author === item).forEach(list => {
      score[item] += list.trade_score
      switch(list.trade_status_flag) {
        case "success":
          status[item]["total"] += 1
        status[item]["success"] += 1
          break;
        case "waiting":
          status[item]["total"] += 1
        status[item]["waiting"] += 1
          break;
        case "failed":
          status[item]["total"] += 1
        status[item]["failed"] += 1
          break;
        default:
          break;
      } 
      })
    })
  }

  const writerNameList = Array.from(writerNameArr)
  writerNameList.sort(function(a,b) {return score[b]- score[a]})
  let ranking_no = 0
  return(
    <TableWrapper>
              
              <DataTable>
                <Thead>
                  <Tr>
                    <Th>NO</Th>
                    <Th>Yazarlar</Th>
                    <Th>&#8645; Durum</Th>
                    <Th>Analiz Sayısı</Th>
                    <Th>&#8645; Puan</Th>
                  </Tr>
                </Thead>
                <Tbody>
                {
                  writerNameList.length !== 0 && writerNameList.length !== undefined && writerNameList !==undefined
                    ? writerNameList.map(list => {
                      const success_percent = status[list].success / status[list].total * 100
                      const waiting_percent = status[list].waiting / status[list].total * 100
                      const failed_percent = status[list].failed / status[list].total * 100
                      return(
                      <Tr>
                      <Td bgcolor = "#332B68">{ranking_no += 1}</Td>
                      <Td>
                         <ProfileData>
                             <ProfileAvatar>
                                <img src={Avatar} />
                             </ProfileAvatar>
                             <Details>
                                <h4>{list}</h4>
                                <a href="#">Profile Git &nbsp; > </a>
                             </Details>
                         </ProfileData>
                      </Td>
                      <Td>
                         <Status>
                              <ProgressWrap>
                                 <ProgressWrapText>
                                    <span>Hedefte</span>
                                    <span>{success_percent}%</span>
                                 </ProgressWrapText>
                                 <ProgressWrapBar>
                                    <ProgressWrapInnerbar bgcolor="#0BCE91" width={`${success_percent}%`}></ProgressWrapInnerbar>
                                 </ProgressWrapBar>
                              </ProgressWrap>

                              <ProgressWrap>
                                 <ProgressWrapText>
                                    <span>Stop</span>
                                    <span>{failed_percent}%</span>
                                 </ProgressWrapText>
                                 <ProgressWrapBar class="bar">
                                    <ProgressWrapInnerbar bgcolor="#DF585A" width={`${failed_percent}%`}></ProgressWrapInnerbar>
                                 </ProgressWrapBar>
                              </ProgressWrap>
                         </Status>
                      </Td>
                      <Td>
                         <NumberWrap>
                              {status[list].total}
                         </NumberWrap>
                      </Td>
                      <Td>
                         <NumberWrap>
                              {score[list]}
                         </NumberWrap>
                      </Td>
                   </Tr>
                      )

                })
                : <tr>No Data</tr>
              }
                   


                </Tbody>
              </DataTable>
           </TableWrapper>
    )
}  
const TableWrapper = styled.div`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
`
const Th = styled.th`
padding: 15px;
  background: #1C1544;
  color: #686195;
`
const Tr = styled.tr`
  border-bottom: 1px solid #17113D;
`
const Thead = styled.thead``
const Tbody = styled.tbody``
const Td = styled.td`
  background: ${(props) => props.bgcolor ? props.bgcolor : "#201A4B"};
  padding: 0 15px;
  height: 200px;
  align-items: center;
  text-align: center;
  font-weight: 500;
  height: 200px;
  &.text {
    font-size: 3rem;
  }
`
const NumberWrap = styled.div`
font-weight: normal;
  font-size: 22px;
  text-align: center;
`
const Status = styled.div``
const ProgressWrap = styled.div`
width: 100%;
  margin-bottom: 15px;
`
const ProgressWrapText = styled.div`
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font-size: 14px;
  color: white;
  font-weight: 500;
  margin-bottom: 5px;

`
const ProgressWrapBar = styled.div`
width: 100%;
  height: 3px;
  background: #2A2359;
  position: relative;
`
const ProgressWrapInnerbar = styled.div`
  background: ${(props) => props.bgcolor};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => props.width};
`
const DataTable = styled.table`
  width: 100%;

  border-collapse: collapse;

`
const ProfileData = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-left: 15px;
`
const ProfileAvatar = styled.div`
overflow: hidden;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin-right: 25px;
  & > img {
    -o-object-fit: cover;
     object-fit: cover;
  }
`
const Details = styled.div`
  & > h4 {
    margin: 0;
  font-size: 22px;
  color: white;
  }
  & > a {
    font-size: 14px;
  color: #686195;
  text-decoration: none;
  font-weight: 500;
  }
  & > a:hover {
    text-decoration: underline;
  }
`
export default TablePage