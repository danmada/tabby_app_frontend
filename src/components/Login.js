import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"

function Login({ user, setUser}) {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState([])
    const [login, setLogin]  = useState('')
    const history = useHistory()

    function handleCustLogin(e){
        e.preventDefault()
        console.log('I was clicked')
        let API_PATH 
        login?API_PATH = 'login' : API_PATH = 'customers'
        fetch(`http://localhost:3000/${API_PATH}`,{
            method:'POST',
            credentials: 'include',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({username})
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.error){
                setErrors(json.error)
            }else {
                setUser(json)
            }
        })
        history.push('/custmainmenu')
    }

        

        console.log(`Login`, user)

            
        
    return (
        <div>
            <h4>Login</h4>
            <form onSubmit={handleCustLogin}>
                <label>
                    Username
                    <br/>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <input type="submit" value="Login!" onClick={()=> setLogin(true)} />
            </form>
            <NavLink to="/barlogin">Login as a Bar</NavLink>
            
            
            
        </div>
    )

}

export default Login