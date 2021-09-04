import { Link } from "react-router-dom"

function TabCard({cust, custId, tabId}) {


    return (

        <div>
            <Link to={`/tab/${tabId}`}>{custId}: {cust}</Link>
        </div>
    )

}

export default TabCard