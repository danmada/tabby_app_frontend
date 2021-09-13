import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddDrinkDisplay from './AddDrinkDisplay'
import TabTotal from "./TabTotal";




function BarTabDisplay({showCustOrders, custOrders}) {
const [indTab, setIndTab] = useState([])
const [drinksList, setDrinksList] = useState([])
const [barId, setBarId] = useState()
const [isOpen, setIsOpen] = useState(true)
const params = useParams()
const [getPrice, setGetPrice] = useState()


useEffect(() => {
    fetch(`http://localhost:3000/tabs/${params.id}`)
    .then((res) => res.json())
    .then((json) => {
        setBarId(json.bar_id)
        const drinks = json.orders
        setIndTab(drinks)
        setIsOpen(json)
        setGetPrice(drinks)
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
    setGetPrice((getPrice) => [...getPrice, newOrder])
}



function handleRemoveOrder(e) {
    fetch(`http://localhost:3000/orders/${e.target.value}`, {
    method: "DELETE",
    }).then((r) => {
        if (r.ok) {
        setIndTab((indTab) =>
        indTab.filter((order) => order.id != e.target.value)
        );
        setGetPrice((getPrice) =>
        getPrice.filter((order) => order.id != e.target.value)
        );
    }
    });
}

function handleCloseTabClick() {
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

// console.log('price test:', getPrice)


    return (
        <div>
            <Title>Tab Display</Title>
            <div>
                {isOpen.is_open === false ? <h1>Paid!</h1> :
                
                indTab.map((order) => 
                    <div>
                    <Items>{order.drink.drink_type} - ${order.drink.price}</Items>
                    <RemoveBtn value={order.id} onClick={handleRemoveOrder}>❌</RemoveBtn>
                    </div>
                )}
                <TabTotal indTab={indTab} getPrice={getPrice}/>
                <AddNewBtn onClick={handleCloseTabClick}>Close Tab</AddNewBtn>
                <AddNewBtn onClick={handleDisplayDrinks}>Add New Item</AddNewBtn>
            </div>
            <AddDrinkDisplay onAddOrder={handleAddNewDrink} params={params} barId={barId} drinksList={drinksList}/>

        </div>
    )

}

//styled components

const Title = styled.h2`
   font-family: Arial;
   color: rgb(255, 140, 0);
`
const AddNewBtn = styled.button`
    background-color: rgb(245, 204, 180);
    border: none;
    color: rgb(255, 140, 0);
    width: 150pt;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    &:hover {
        background-color: lightblue;
`
const Items = styled.h4`
    font-family: Arial;
    color: rgb(255, 140, 0); 
    display: inline-block;
`
const RemoveBtn = styled.button`
    background-color: white;
    border: none;
    display: inline-block;
    padding-left: 10pt;
    &:hover {
        background-color: lightblue;
`

export default BarTabDisplay