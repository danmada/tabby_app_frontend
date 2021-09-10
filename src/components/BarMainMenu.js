import { Link, NavLink, useHistory, useParams } from "react-router-dom"

function BarMainMenu({adminUser}) {

    const params = useParams() 

    const id =  adminUser.id




    return (
        <div>
        Bar Main Menu
        <Link to={`barmain/${id}`}> See Open Tabs </Link>
        </div>
        
    )
}

export default BarMainMenu