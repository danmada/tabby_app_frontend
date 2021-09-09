import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import TabCard from "./TabCard"


function TabContainer({tabs, params}) {


    

    const tabsList = tabs.map((tab) => {
        return <TabCard key={tab.id} params={params} tabId={tab.id} custId={tab.customer_id} cust={tab.customer.name} barId={tab.bar_id}/>
    })

    return (

        <div>
            <h1>Tabs List</h1>
            {tabsList}
        </div>

    )

}

export default TabContainer