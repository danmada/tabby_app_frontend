import styled from "styled-components";
import { Link, NavLink, useHistory } from "react-router-dom"

function BarNavBar({adminUser, onBarLogout}) {

    const history = useHistory()

    function handleLogout() {
        fetch("http://localhost:3000/barlogout")
        .then(() => onBarLogout());
        history.push('/')
    }

    function goHome() {
        history.push("/barmainmenu")
    }

    return (
        <Header>
            {adminUser ? (
                <div>
                    <Welcome>Welcome, <WelName>{adminUser.name}</WelName> </Welcome>
                    <button className="backBtn" onClick={() => history.goBack()}>Back</button>
                    <button className="backBtn" onClick={goHome}>Home</button>
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </div>
                    ) : (
                <div>
                    <h4>Please Login</h4>
                    <Link to="/" style={linkStyle}>Home</Link>
                </div>
                    )
            }
        </Header>
    )
}

// Styled Components

const Header = styled.div`
    background-color: rgb(255, 140, 0);
    padding-bottom: 5pt;
    height: 50pt;
`
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    fontFamily: "Arial",
    padding: "0",
    height: "60%",
    fontSize: "16px"
  };

  const Welcome = styled.p`
  font-size: 12pt;
  margin: 0;
  color: rgb(245, 204, 180);
`

const WelName = styled.span`
font-size: 12pt;
margin: 0;
color: white;
`
export default BarNavBar