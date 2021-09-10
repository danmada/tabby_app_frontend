import { Link, NavLink, useHistory } from "react-router-dom"

function CustMainMenu() {

    return (
        <div>
            Cust Main Menu
            <Link to='/custalltabs'>See Your Tabs</Link>
            <Link to='/main'>Find a Bar</Link>

        </div>
    )
}

export default CustMainMenu