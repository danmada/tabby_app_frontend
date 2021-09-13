import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

function BarMainMenu({adminUser}) {

    const params = useParams() 

    // const id =  adminUser.id
    
    console.log('test:', adminUser)

    return (
        <Menu>
        <MenuTitle>Main Menu</MenuTitle>
        {adminUser ? <Link to={`barmain/${adminUser.id}`} style={linkStyle}><h3>See Open Tabs</h3></Link> : <div></div>}
        </Menu>
        
    )
}

//styled components
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'rgb(255, 140, 0)',
    fontFamily: "Arial",
    padding: "0",
    height: "60%",
    backgroundColor: "rgb(245, 204, 180)"
  };

  const MenuTitle = styled.h2`
   font-family: Arial;
   color: rgb(255, 140, 0);
`
const Menu = styled.div`
    display: grid;
    
`

export default BarMainMenu