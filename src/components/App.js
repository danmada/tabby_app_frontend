import '../App.css';
import styled from "styled-components";
import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"
import MainContainer from './MainContainer';
import NavBar from "./NavBar"
import NavContainer from './NavContainer';
import barImg from './assets/bar-background.jpg'





function App() {

  const [user, setUser] = useState(null);
  const [adminUser, setAdminUser] = useState(null)
  const [testing, setTesting] = useState(null)

  const history = useHistory()
  

    useEffect(() => {
        fetch("/me").then((response) => {
        if (response.ok) {
            response.json().then((user) => setUser(user));
        }
        });
    }, []);

    function handleSubmit(e, username, name, age, email, creditCard, password, passwordConfirmation) {
        e.preventDefault();
        fetch("http://localhost:3000/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            name: name,
            age: age,
            email: email,
            credit_card: creditCard,
            password: password,
            password_confirmation: passwordConfirmation,
          }),
        })
    .then((r) => {
        if (r.ok) {
          r.json().then(user => setUser(user));
        }
      });
      }

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
            <Image src={barImg} alt="bar-back"/>
            <AppMain>
            {/* <Title /> */}
            <NavContainer user={user} adminUser={adminUser} onLogout={handleLogout} onBarLogout={handleBarLogout}/>
            <div>
                <MainContainer handleSignUp={handleSubmit} test={test} user={user} setUser={setUser} adminUser={adminUser} setAdminUser={setAdminUser}/>
            </div>
            </AppMain>
        </MainCont>
    );
}

// styled components

const AppMain = styled.div`
    width: 25%;
    // height: 500pt;
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
