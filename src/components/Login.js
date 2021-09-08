import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"

function Login(handleSubmit, user) {
    // const [username, setUsername] = useState("");
    // const [user, setUser] = useState(null);
    // const [errors, setErrors] = useState([])

    // const history = useHistory()
    
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("http://localhost:3000/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ username }),
    //     })
    //         .then((res) => res.json())
    //         .then(json => {
    //             if(json.error){
    //                 setErrors(json.error)
    //             } else {
    //                 setUser(json)
    //                 // history.push('/main')
    //             }
    //         })
    //     }
        

    //     useEffect(() => {
    //         fetch("http://localhost:3000/me").then((response) => {
    //             if (response.ok) {
    //             response.json().then((user) => setUser(user));
    //             }
    //         });
    //         }, []);

            
        
    return (
        <div>
            {/* <h1>Login</h1>
            <NavLink to="/main">Login as a Customer</NavLink>
            <form onSubmit={() => handleSubmit(username)}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Login</button>
                </form>
            <NavLink to="/barmain">Login as a Bar</NavLink>
            {user ? <h4>Welcome, {user.name}</h4> : <h4>Please login</h4>}
            {errors ? errors.map(e => <p>{e}</p>) : null} */}
            
            
        </div>
    )

}

export default Login