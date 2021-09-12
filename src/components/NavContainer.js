import NavBar from "./NavBar"
import BarNavBar from "./BarNavBar"
import styled from "styled-components";

function NavContainer({user, adminUser, onLogout, onBarLogout}) {

    return (

        <AppName>
            <h1>TABBY</h1>
            { user ? <NavBar user={user} onLogout={onLogout}/> : <div></div> }
            
            
            { adminUser ? <BarNavBar adminUser={adminUser} onBarLogout={onBarLogout}/> : <div></div>}
        </AppName>
    )
}

// Styled Components

const AppName = styled.h1`
    background-color: rgb(255, 140, 0);
    margin: 0;
`

export default NavContainer