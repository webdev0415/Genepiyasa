import React from "react"
import TradeEditor from "../../components/utility/TradeEditor"
import styled from 'styled-components'

const NewTrade = () => {
	return (
		<ContainerContent>
			<TradeEditor />
		</ContainerContent>
		)
}
const ContainerContent = styled.div`
	max-width: 111.7rem;
  margin: 0 auto;

  min-height: calc(100vh - 15rem);
  padding-bottom: 5rem;
`
export default NewTrade;