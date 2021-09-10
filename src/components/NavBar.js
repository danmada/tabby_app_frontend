import styled from "styled-components";
import { Link, NavLink, useHistory } from "react-router-dom"

function NavBar({ user, onLogout }) {

    const history = useHistory()

    function handleLogout() {
        fetch("http://localhost:3000/logout", {
        method: "DELETE",
        }).then(() => onLogout());
        history.push('/')
    }

    console.log(user)


    return (
        <Header>
            {user ? (
                <div>
                    <p>Welcome!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                    ) : (
                <div>
                    <h4>Please Login</h4>
                    <Link to="/">Home</Link>
                </div>
                    )
            }
        </Header>
    )

}


// Styled Components

const Header = styled.div`
    background-color: orange;
    padding-bottom: 10pt;
    margin: 0;
`


export default NavBar



