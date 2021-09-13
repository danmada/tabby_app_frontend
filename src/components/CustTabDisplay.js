import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function CustTabDisplay() {
    const params = useParams()
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(true)
    // const [paid, setPaid] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3000/tabs/${params.id}`)
        .then((res) => res.json())
        .then((json) => {
            setData(json.orders)
            setIsOpen(json)
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);


console.log(params.id)
console.log('Cust Tab Display', isOpen)


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
            <Title>Customer's Tab</Title>
            {isOpen.is_open === false ? <h1>Paid!</h1> :
            <div>
                {data.map((order) => <Items>- {order.drink.drink_type} - ${order.drink.price}</Items>)}
            </div>
            }
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