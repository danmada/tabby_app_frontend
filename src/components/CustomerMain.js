import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"
import BarContainer from "./BarContainer"

function CustomerMain({ tabsData, bars, user}) {
    const [newTab, setNewTab] = useState([])

    const history = useHistory()

    console.log(tabsData)

    function handleStartTabClick(id) {
        fetch("http://localhost:3000/tabs", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                customer_id: user.id,
                bar_id: id,
                is_open: true
            }),
        })
            .then((res) => res.json())
            .then((json) => setNewTab(json))

            history.push(`/customertab/${newTab.id}`)
    } 

    return (
        <div>
            <BarContainer tabsData={tabsData} bars={bars} newTab={newTab} user={user} handleStartTabClick={handleStartTabClick}/>
        </div>
    )
}

export default CustomerMain