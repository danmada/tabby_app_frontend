import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"
import BarContainer from "./BarContainer"

function CustomerMain({bars, user}) {
    const [newTab, setNewTab] = useState([])

    const history = useHistory()

    function handleStartTabClick(id) {
        console.log(id)
        console.log(user.id)
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

    console.log(newTab)

    

    return (
        <div>
            <h1>Customer Main</h1>
            <BarContainer bars={bars} handleStartTabClick={handleStartTabClick}/>
        </div>
    )
}

export default CustomerMain