import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";



function TabDisplay() {
const [indTab, setIndTab] = useState([])
const [drinksList, setDrinksList] = useState([])
const [barId, setBarId] = useState()
const [isOpen, setIsOpen] = useState(true)
const params = useParams()




useEffect(() => {
    fetch(`http://localhost:3000/tabs/${params.id}`)
    .then((res) => res.json())
    .then((json) => {
        setBarId(json.bar_id)
        const drinks = json.orders
        setIndTab(drinks)
        setIsOpen(json)

    })
    .catch((err) => {
        console.log(err);
    })
}, [params.id]);



function handleDisplayDrinks() {
    fetch(`http://localhost:3000/drinks`)
    .then((res) => res.json())
    .then((json) => {
        setDrinksList(json)
    })

}

function handleAddDrink(e) {
    console.log(params.id)
    console.log(e.target.value)
    fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        tab_id: params.id,
        drink_id: e.target.value,
    }),
    });
}

function handleRemoveOrder(e) {
    console.log(e.target.value)
    fetch(`http://localhost:3000/orders/${e.target.value}`, {
    method: "DELETE",
    })
}

function handleCloseTabClick() {
    console.log('I was clicked')
    fetch(`http://localhost:3000/tabs/${params.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            is_open: !isOpen.is_open
        }),
    })
        .then((res) => res.json())
}




    return (
        <div>
        <h1>Tab Display</h1>
        <div>
        {isOpen.is_open === false ? <h1>Paid!</h1> :
        
        indTab.map((order) => 
            <div>
            <h4>{order.drink.drink_type} - ${order.drink.price}</h4>
            <button value={order.id} onClick={handleRemoveOrder}>Remove</button>
            </div>
        )}
        <button onClick={handleCloseTabClick}>Close Tab</button>
        <button onClick={handleDisplayDrinks}>Add New Item</button>
        </div>
        {drinksList.map((drink) => {
            if (drink.bar_id == barId) {
                return  <div>
                            <h4>{drink.drink_type}</h4>
                            <p>{drink.id}</p>
                            <button value={drink.id} onClick={handleAddDrink}>Add</button>
                        </div>
            } 
        })}

        </div>
    )

}

export default TabDisplay