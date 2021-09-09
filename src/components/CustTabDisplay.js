import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";

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
    }, [params.id]);


console.log(params.id)


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
            <h2>Customer's Tab</h2>
            {isOpen.is_open === false ? <h1>Paid!</h1> :
            <div>
                {data.map((order) => <h4>{order.drink.drink_type} - ${order.drink.price}</h4>)}
            </div>
            }
            <button onClick={handleCloseTabClick}>Close Tab</button>
        </div>
    )
}

export default CustTabDisplay