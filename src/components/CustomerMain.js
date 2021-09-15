import { Link, NavLink, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"
import BarContainer from "./BarContainer"

function CustomerMain({ tabsData, bars, user, addNewOpenTab}) {
    const [newTab, setNewTab] = useState([])
    const [errors, setErrors] = useState([]);

    const history = useHistory()

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
        .then((r) => {
            if (r.ok) {
                r.json().then((openedTab) => {
                    addNewOpenTab(openedTab);
                    setNewTab(openedTab)
                    history.push(`/customertab/${openedTab.id}`)
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
              }
            });
    } 

    return (
        <div>
            <BarContainer tabsData={tabsData} bars={bars} user={user} handleStartTabClick={handleStartTabClick}/>
        </div>
    )
}

export default CustomerMain