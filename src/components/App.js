import '../App.css';
import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"
import MainContainer from './MainContainer';
import NavBar from "./NavBar"





function App() {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([])
  const [adminName, setAdminName] = useState("")
  const [adminUser, setAdminUser] = useState(null)

  const history = useHistory()
  
  useEffect(() => {
    fetch("http://localhost:3000/me").then((response) => {
        if (response.ok) {
        response.json().then((user) => setUser(user));
        }
    });
    }, []);


  function handleCustLogin(e) {
      e.preventDefault();
      fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
      })
          .then((res) => res.json())
          .then(json => {
              if(json.error){
                  setErrors(json.error)
              } else {
                  setUser(json)
                  history.push('/main')
              }
          })
      }
    
      
      function handleBarLogin(e) {
        e.preventDefault();
        fetch("http://localhost:3000/barlogin", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ adminUser: adminName }),
        })
            .then((res) => res.json())
            .then(json => {
                if(json.error){
                    setErrors(json.error)
                } else {
                    setAdminUser(json)
                    // history.push('/main')
                }
            })
      }

      console.log(username)
      console.log(user)

  return (
    <div className="App">
      <NavBar />
      <h1>Login</h1>
          <form onSubmit={handleCustLogin}>
              <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
              <button type="submit">Login</button>
              </form>
              <NavLink to="/main">Login as a Customer</NavLink>
          {/* {errors ? errors.map(e => <p>{e}</p>) : null} */}
          <form onSubmit={handleBarLogin}>
              <input
                  type="text"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
              />
              <button type="submit">Login</button>
              </form>
          <NavLink to="/barmain">Login as a Bar</NavLink>
          {user ? <h4>Welcome, {user.name}</h4> : <h4>Please login</h4>}
          {adminUser ? <h4>Welcome, {adminUser.name}</h4> : <h4>Please login</h4>}
      <MainContainer user={user}/>
    </div>
  );
}

export default App;
