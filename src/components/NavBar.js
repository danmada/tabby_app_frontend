import styled from "styled-components";
import { Link, NavLink, useHistory } from "react-router-dom"

function NavBar({ user, onLogout }) {

    const history = useHistory()

    function handleLogout() {
        fetch("http://localhost:3000/logout")
        .then(() => onLogout());
        history.push('/')
    }

    function goHomeYoureDrunk() {
        history.push("/custmainmenu")
    }


    return (
        <Header>
            {user ? (
                <div>
                    <Welcome>Welcome, <WelName>{user.name}</WelName></Welcome>
                    <button className="backBtn" onClick={() => history.goBack()}>Back</button>
                    <button className="backBtn" onClick={goHomeYoureDrunk}>Home</button>
                    <button className="logout" onClick={handleLogout}>Logout</button>
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


export default NavBar



