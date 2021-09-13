import styled from "styled-components";
import React, { useState, useEffect } from "react";

function TabTotal({getPrice}) {

    console.log('price test:', getPrice)

//    const price = if getPrice getPrice.map(cost => cost.drink.price)

    function test() {
        if (getPrice) {
            const price = getPrice.map(cost => cost.drink.price)
            const sum = price.reduce(function (a, b) {
                    return a + b;
                    }, 0);
            return sum
        }
    }

    console.log(typeof test())
    

//    const sum = price.reduce(function (a, b) {
//     return a + b;
//     }, 0);




    return (
        <Total>
           
            <h1> Total: ${test()} </h1> 
            
        </Total>
    )
}

// Styled Components

const Total = styled.div`
    font-family: Arial;
    color: rgb(255, 140, 0); 
    border-top: solid;
    border-bottom: solid;
    `



export default TabTotal