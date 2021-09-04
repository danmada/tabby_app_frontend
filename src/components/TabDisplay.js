import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import DrinksList from "./DrinksList";


function TabDisplay() {
const [indTab, setIndTab] = useState([])
const [barId, setBarId] = useState([])
const [drinksList, setDrinksList] = useState([])
const params = useParams()




useEffect(() => {
    fetch(`http://localhost:3000/tabs/${params.id}`)
    .then((res) => res.json())
    .then((json) => {
        const drinks = json.orders
        setIndTab(drinks)
    })
    .catch((err) => {
        console.log(err);
      })
}, [params.id]);

console.log(indTab)

// function handleDisplayDrinks() {
//     fetch(`http://localhost:3000/drinks`)
//     .then((res) => res.json())
//     .then((json) => {
//         setDrinksList(json)
//     })

// }






    return (
        <div>
        <h1>Tab Display</h1>
        {/* <button onClick={handleDisplayDrinks}>Add New Item</button> */}
        <div>
        {indTab.map((order) => <h4>{order.drink.drink_type} - ${order.drink.price}</h4>)}
        </div>
        {/* {drinksList.map((drink) => {
            if (drink.bar_id === barId) {
                <p>{drink.name}</p>
            } else {
                return null
            }
        })} */}
        </div>
    )

}

export default TabDisplay