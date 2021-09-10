import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"


function BarLogin({adminUser, setAdminUser}) {
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
                setAdminUser(json)
            }
        })
        history.push('/barmainmenu')
    }

    return (

        <div>
            <h4>Bar Login</h4>
            <form onSubmit={handleBarLogin}>
                <label>
                    Username
                    <br/>
                    <input type="text" value={adminUsername} onChange={(e) => setAdminUsername(e.target.value)} />
                </label>
                <input type="submit" value="Login!" onClick={()=> setBarLogin(true)} />
            </form>
        </div>

    )
}

export default BarLogin