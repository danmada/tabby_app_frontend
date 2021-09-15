import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TabCard from "./TabCard";



function TabContainer({tabs, params}) {
    


    const tabsList = tabs.map((tab) => {
        if (tab.is_open) {
        return <TabCard key={tab.id} params={params} tabId={tab.id} custId={tab.customer_id} cust={tab.customer.name} barId={tab.bar_id}/> } 
    })

    return (

        <div>
            <Title>Tabs List</Title>
            {tabsList}
        </div>

    )

}

//styled components

const Title = styled.h2`
   font-family: Arial;
   color: rgb(255, 140, 0);
`

export default TabContainer