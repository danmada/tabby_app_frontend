import '../App.css';
import styled from "styled-components";
import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"
import MainContainer from './MainContainer';
import NavBar from "./NavBar"
import NavContainer from './NavContainer';
import Title from './Title';





function App() {

  const [user, setUser] = useState(null);
  const [adminUser, setAdminUser] = useState(null)

  const history = useHistory()
  

        function handleLogout() {
            setUser(null);
        }

        function handleBarLogout() {
            setAdminUser(null);
        }


    console.log(user)


    return (
        <div className="App">
            <AppMain>
            {/* <Title /> */}
            <NavContainer user={user} adminUser={adminUser} onLogout={handleLogout} onBarLogout={handleBarLogout}/>
            <MainCont>
                <MainContainer user={user} setUser={setUser} adminUser={adminUser} setAdminUser={setAdminUser}/>
            </MainCont>
            </AppMain>
        </div>
    );
}

// styled components

const AppMain = styled.div`
    width: 50%;
    height: 100%;
    // top: 10%;
    left: 25%;
    // margin-top: -100px;
    // margin-left: -100px;
    margin-top: 0;
    border-style: solid;
    background-color: white;
`

const MainCont = styled.div`

`

export default App;
