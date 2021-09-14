import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"
import styled from "styled-components";


function BarLogin({adminUser, setAdminUser, test}) {
    const [adminUsername, setAdminUsername] = useState("")
    const [barLogin, setBarLogin]  = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleBarLogin(e){
        e.preventDefault()
        console.log('I was clicked')
        let API_PATH 
        barLogin?API_PATH = 'barlogin' : API_PATH = 'bars'
        fetch(`http://localhost:3000/${API_PATH}`,{
          method:'POST',
          credentials: 'include',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({adminUsername})
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.error){
                setErrors(json.error)
            }else {
                test(json)
            }
        })
        history.push('/barmainmenu')
    }

    return (

        <Main>
            <LoginForm onSubmit={handleBarLogin}>
                <Title>
                    Admin Name
                    <br/>
                    <LoginText type="text" value={adminUsername} onChange={(e) => setAdminUsername(e.target.value)} />
                </Title>
                <input className="login" type="submit" value="Login!" onClick={()=> setBarLogin(true)} />
                <NavLink to="/" style={linkStyle}> Back </NavLink>
            </LoginForm>
        </Main>

    )
}

//styled components

const Main = styled.div`
    display: grid;
    padding-top: 50pt;
`
const Title = styled.label`
   font-family: Arial;
   color: rgb(255, 140, 0);
`
const LoginForm = styled.form`
    display: grid;
    width: 200pt;
    padding-left: 16%;
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
    padding: "0",
    height: "60%",
  };

export default BarLogin