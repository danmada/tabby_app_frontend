import '../App.css';
import styled from "styled-components";
import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"
import MainContainer from './MainContainer';
import NavBar from "./NavBar"
import NavContainer from './NavContainer';
import Title from './Title';
import barImg from './assets/bar-background.jpg'





function App() {

  const [user, setUser] = useState(null);
  const [adminUser, setAdminUser] = useState(null)
  const [testing, setTesting] = useState(null)

  const history = useHistory()
  

    function handleLogout() {
        setUser(null);
    }

    function handleBarLogout() {
        setAdminUser(null);
    }

    function test(json) {
        setAdminUser(json)
    }




    return (
        <MainCont className="App">
            <Image src={barImg}/>
            <AppMain>
            {/* <Title /> */}
            <NavContainer user={user} adminUser={adminUser} onLogout={handleLogout} onBarLogout={handleBarLogout}/>
            <div>
                <MainContainer test={test} user={user} setUser={setUser} adminUser={adminUser} setAdminUser={setAdminUser}/>
            </div>
            </AppMain>
        </MainCont>
    );
}

// styled components

const AppMain = styled.div`
    width: 25%;
    height: 500pt;
    margin-left: 33%;
    margin-top: 5%;
    margin-bottom: 0;
    border-style: solid;
    background-color: white;
    position: fixed;
    
`

const MainCont = styled.div`
 
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
    z-index: -1;
    position: fixed;
    right: 0%;
    margin-top: -.5%;
`

export default App;
