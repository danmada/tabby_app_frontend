import NavBar from "./NavBar"
import BarNavBar from "./BarNavBar"
import styled from "styled-components";

function NavContainer({user, adminUser, onLogout, onBarLogout}) {

    return (

        <AppName>
            <Title>tabby</Title>
            { user ? <NavBar user={user} onLogout={onLogout}/> : <div></div> }
            
            
            { adminUser ? <BarNavBar adminUser={adminUser} onBarLogout={onBarLogout}/> : <div></div>}
        </AppName>
    )
}

// Styled Components

const AppName = styled.h1`
    font-family: Arial;
    background-color: rgb(255, 140, 0);
    margin-top: 0pt;
    color: white;
`
const Title = styled.h1`
    font-family: 'Space Mono', monospace;
    margin: 0;
`

export default NavContainer