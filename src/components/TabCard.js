import { Link } from "react-router-dom"

function TabCard({cust, custId, tabId, barId, params}) {

    console.log(barId)
    console.log(`Bar Tabs: ${params.id}`)

    const barsTab = params.id

    console.log(barsTab)

    return (

        <div>
            <div>
            { barId == barsTab ?
                (<Link to={`/tab/${tabId}`}>{custId}: {cust}</Link>) :
                (console.log('it didnt work'))
            }
            </div>
        </div>
    )

}

export default TabCard