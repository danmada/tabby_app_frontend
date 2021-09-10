import '../App.css';
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
        <Title />
        <NavContainer user={user} adminUser={adminUser} onLogout={handleLogout} onBarLogout={handleBarLogout}/>
        <MainContainer user={user} setUser={setUser} adminUser={adminUser} setAdminUser={setAdminUser}/>
        </div>
    );
}

export default App;
