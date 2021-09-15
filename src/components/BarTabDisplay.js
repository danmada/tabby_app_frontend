import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup"
import ReactLoading from "react-loading";
import AddDrinkDisplay from './AddDrinkDisplay'
import TabTotal from "./TabTotal";




function BarTabDisplay({showCustOrders, custOrders}) {
const [indTab, setIndTab] = useState([])
const [drinksList, setDrinksList] = useState([])
const [barId, setBarId] = useState()
const [isOpen, setIsOpen] = useState(true)
const params = useParams()
const [getPrice, setGetPrice] = useState()
const [toggleList, setToggleList] = useState(true);
const [done, setDone] = useState(undefined);


useEffect(() => {
    fetch(`http://localhost:3000/tabs/${params.id}`)
    .then((res) => res.json())
    .then((json) => {
        setBarId(json.bar_id)
        const drinks = json.orders
        setIndTab(drinks)
        setIsOpen(json)
        setGetPrice(drinks)
        setDone(true)
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
    setToggleList(!toggleList)
}

console.log(toggleList)

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
    .then((r) => {
        if (r.ok) {
        r.json().then((isOpen) => {
            setIsOpen(isOpen);
        });
    }})
}

function toggleClose() {
    setToggleList(!toggleList)
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

    return (
        <div>
            <Title>Tab Display</Title>
            <div>
            {!done ? (
        <ReactLoading
          type={"ThreeDots"}
          color={"rgb(255, 140, 0)"}
          height={100}
          width={100}

        />
      ) : (
                <div>
                {isOpen.is_open === false ? <h1>Paid!</h1> :
                
                indTab.map((order) => 
                    <div>
                    <Items>{order.drink.drink_type} - {formatter.format(order.drink.price)}</Items>
                    <RemoveBtn value={order.id} onClick={handleRemoveOrder}>❌</RemoveBtn>
                    </div>
                )}
                <TabTotal indTab={indTab} getPrice={getPrice}/>
                <AddNewBtn onClick={handleCloseTabClick}>Close Tab</AddNewBtn>
                {/* <AddNewBtn onClick={handleDisplayDrinks}>Add New Item</AddNewBtn> */}
                </div>
      )}
            </div>
            <div>
            {toggleList ? (
                <div>
                    <AddNewBtn onClick={handleDisplayDrinks}>Add New Item</AddNewBtn>
                    {/* <AddDrinkDisplay onAddOrder={handleAddNewDrink} params={params} barId={barId} drinksList={drinksList}/> */}
                </div>
            ): (
                <div>
                    <AddNewBtn onClick={toggleClose}>X</AddNewBtn>
                    <AddDrinkDisplay onAddOrder={handleAddNewDrink} params={params} barId={barId} drinksList={drinksList}/>
                </div>)
            

            }
            </div>
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
        background-color: rgb(255, 140, 0);
        color: rgb(245, 204, 180);
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
const Test = styled.div`
    background-color: black;
    border: none;
    display: inline-block;
    padding-left: 10pt;
  
`


export default BarTabDisplay