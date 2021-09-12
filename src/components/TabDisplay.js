import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import AddDrinkDisplay from './AddDrinkDisplay'



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


function handleAddNewDrink(newOrder) {
    setIndTab((indTab) => [...indTab, newOrder])
}


function handleRemoveOrder(e) {
    console.log(e.target.value)
    fetch(`http://localhost:3000/orders/${e.target.value}`, {
    method: "DELETE",
    }).then((r) => {
        if (r.ok) {
          setIndTab((indTab) =>
            indTab.filter((order) => order.id != e.target.value)
          );
        }
      });
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
        <AddDrinkDisplay onAddOrder={handleAddNewDrink} params={params} barId={barId} drinksList={drinksList}/>

        </div>
    )

}

export default TabDisplay