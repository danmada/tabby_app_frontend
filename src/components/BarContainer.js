import { Link } from "react-router-dom"
import BarCard from "./BarCard"
import styled from "styled-components";

function BarContainer({ tabsData, newTab, user, bars, handleStartTabClick}) {

    const barList = bars.map((bar) => (
        <BarCard key={bar.id} newTab={newTab} user={user} bar={bar} handleStartTabClick={handleStartTabClick}/>
    ))
        console.log(`BC: ${user}`)
    return (

        <div>
            <Title>BAR LIST</Title>
            <P>Click Bar To Start Tab</P>
            {barList}
        </div>
    )

}

// styled components

const Title = styled.h1`
   font-family: Arial;
   color: rgb(255, 140, 0);
`
const P = styled.p`
   font-family: Arial;
   color: rgb(255, 140, 0);
`

export default BarContainer