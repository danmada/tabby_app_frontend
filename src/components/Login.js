import { Link, NavLink, useHistory } from "react-router-dom"

function Login() {

    return (
        <div>
            <h1>Login</h1>
            <NavLink to="/main">Login as a Customer</NavLink>
            <NavLink to="/barmain">Login as a Bar</NavLink>
            
            
        </div>
    )

}

export default Login