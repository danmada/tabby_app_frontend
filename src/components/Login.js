import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"
import styled from "styled-components";
import Testing from "./Testing";
import CustomerSignup from "./CustomerSignup";

function Login({ user, setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])
    const [login, setLogin]  = useState('')
    const history = useHistory()

    function handleCustLogin(e){
        e.preventDefault()
        let API_PATH 
        login?API_PATH = 'login' : API_PATH = 'customers'
        fetch(`http://localhost:3000/${API_PATH}`,{
            method:'POST',
            credentials: 'include',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({username, password})
        })
        .then(res => res.json())
        .then(json => {
            if(json.error){
                setErrors(json.error)
            }else {
                setUser(json)
                history.push('/custmainmenu')
            }
        })
        // history.push('/custmainmenu')
    }


            
        
    return (
        <Main>
            <LoginForm onSubmit={handleCustLogin}>
                <Title>
                    Username
                    <br/>
                    <LoginText type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    Password
                    <br/>
                    <LoginText type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Title>
                <input className="login" type="submit" value="Login!" onClick={()=> setLogin(true)} />
            </LoginForm>
            {errors?errors.map(e => <p>{e}</p>):null}
            <NavLink to="/custsignup" style={linkStyle} >Don't have an account?</NavLink>
            <NavLink to="/barlogin" style={linkStyle} >Login as a Bar</NavLink>
            
        </Main>
    )

}

// styled components
const Main = styled.div`
    display: grid;
    padding-top: 50pt;
    height: 100pt;
`
const Title = styled.label`
   font-family: Arial;
   color: rgb(255, 140, 0);
`
const LoginForm = styled.form`
    display: grid;
    width: 200pt;
    padding-left: 18%;
    left: 35pt;
`
const LoginText = styled.input`
    width: 200pt;
`
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'rgb(255, 140, 0)',
    fontFamily: "Arial",
    // padding: "0",
    paddingLeft: "3%",
    height: "60%",
  };

export default Login