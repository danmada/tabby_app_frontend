import { Link } from "react-router-dom"
import BarCard from "./BarCard"
import styled from "styled-components";

function BarContainer({ user, bars, handleStartTabClick}) {

    const barList = bars.map((bar) => (
        <BarCard key={bar.id} user={user} bar={bar} handleStartTabClick={handleStartTabClick}/>
    ))

    return (

        <div>
            <Title>Near By Bars 📍</Title>
            <P>Click Bar To Start Tab</P>
            {barList}
        </div>
    )

}

// styled components

const Title = styled.h2`
   font-family: Arial;
   color: rgb(255, 140, 0);
`
const P = styled.p`
   font-family: Arial;
   color: rgb(255, 140, 0);
`

export default BarContainer