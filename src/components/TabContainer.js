import TabCard from "./TabCard"
import TabDisplay from "./TabDisplay"

function TabContainer({tabs}) {


    const tabsList = tabs.map((tab) => (
        <TabCard key={tab.id} tabId={tab.id} custId={tab.customer_id} cust={tab.customer.name}/>
    ))
    

    


    return (

        <div>
            <h1>Tabs List</h1>
            {tabsList}
        </div>

    )

}

export default TabContainer