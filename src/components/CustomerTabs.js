import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect} from "react";
import styled from "styled-components";

function CustomerTabs({ tabsData, user, bars}) {

    const [barData, setBarData] = useState(null)
    const history = useHistory()

    function handleSeeOpenTabClick() {

        // history.push(`/customertab/${tabs.id}`)

    }
    

    return (
        <Main>
            <Title>Your Open Tabs</Title>
            {tabsData.map(tabs => 
                tabs.customer_id == user.id ? 
                <Link className="btn" to={`/customertab/${tabs.id}`} style={linkStyle}> <h4>{tabs.bar.name}</h4> </Link> 
                : 
                console.log('it didnt work'))}
        </Main>
    )
}

//styled components

const Title = styled.h1`
   font-family: Arial;
   color: rgb(255, 140, 0);
`
const Main = styled.div`
    display: grid;
    
`

const linkStyle = {
    // margin: "1rem",
    // textDecoration: "none",
    // color: 'rgb(255, 140, 0)',
    // fontFamily: "Arial",
    // padding: "0",
    // height: "60%",
    // width: "100%",
    // backgroundColor: "rgb(245, 204, 180)"
  };

  const List = styled.li`
   margin: 0;
  `




export default CustomerTabs