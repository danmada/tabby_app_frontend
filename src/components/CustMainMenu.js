import { Link, NavLink, useHistory } from "react-router-dom"
import styled from "styled-components";

function CustMainMenu() {

    return (
        <Menu>
             <MenuTitle>Main Menu</MenuTitle>
            <Link to='/custalltabs' style={linkStyle}><h3>See Your Tabs</h3></Link>
            
            <Link  to='/main' style={linkStyle}><h3>Find a Bar</h3></Link>
        </Menu>
    )
}

// styled components

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'rgb(255, 140, 0)',
    fontFamily: "Arial",
    padding: "0",
    height: "60%",
    backgroundColor: "rgb(245, 204, 180)"
  };

const Menu = styled.div`
    display: grid;
    
`

const MenuTitle = styled.h2`
   font-family: Arial;
   color: rgb(255, 140, 0);
`


export default CustMainMenu