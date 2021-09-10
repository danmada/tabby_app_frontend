import NavBar from "./NavBar"
import BarNavBar from "./BarNavBar"

function NavContainer({user, adminUser, onLogout, onBarLogout}) {

    return (

        <div>
            { user ? <NavBar user={user} onLogout={onLogout}/> : null }
            
            
            { adminUser ? <BarNavBar adminUser={adminUser} onBarLogout={onBarLogout}/> : null}
        </div>
    )
}

export default NavContainer