import { Link, NavLink, useHistory } from "react-router-dom"

function CustomerTabs({ tabsData, user}) {

    console.log(tabsData)
    console.log(user)

    return (
        <div>Customer Tabs
            <h1>Open Tabs</h1>
            {tabsData.map(tabs => 
                tabs.customer_id == user.id ? <Link to={`/customertab/${tabs.id}`}> {tabs.id} </Link> 
                : 
                console.log('it didnt work'))}
        </div>
    )
}

export default CustomerTabs