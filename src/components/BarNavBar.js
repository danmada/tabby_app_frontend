import styled from "styled-components";
import { Link, NavLink, useHistory } from "react-router-dom"

function BarNavBar({adminUser, onBarLogout}) {

    const history = useHistory()

    function handleLogout() {
        fetch("http://localhost:3000/barlogout", {
        method: "DELETE",
        }).then(() => onBarLogout());
        history.push('/')
    }

    console.log(adminUser)

    return (
        <Header>
            {adminUser ? (
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
`

export default BarNavBar