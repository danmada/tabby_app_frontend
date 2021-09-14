import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TabTotal from "./TabTotal";

function CustTabDisplay() {
    const params = useParams()
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(true)
    const [getPrice, setGetPrice] = useState()

    useEffect(() => {
        fetch(`http://localhost:3000/tabs/${params.id}`)
        .then((res) => res.json())
        .then((json) => {
            setData(json.orders)
            setIsOpen(json)
            setGetPrice(json.orders)
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    console.log('cust tab:', data)

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

    return (

        <div>
            <Title>Ordered:</Title>
            {isOpen.is_open === false ? <h1>Paid!</h1> :
            <div>
                {data.map((order) => <Items>- {order.drink.drink_type} - ${order.drink.price}</Items>)}
            </div>
            }
            <TabTotal getPrice={getPrice}/>
            <Btn onClick={handleCloseTabClick}>Close Tab</Btn>
        </div>
    )
}

//styled components

const Title = styled.h2`
   font-family: Arial;
   color: rgb(255, 140, 0);
`

const Items = styled.h4`
    font-family: Arial;
    color: rgb(255, 140, 0);
    
`
const Btn = styled.button`
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

export default CustTabDisplay