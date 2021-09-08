import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";

function CustTabDisplay() {
    const params = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/tabs/${params.id}`)
        .then((res) => res.json())
        .then((json) => {
            setData(json)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [params.id]);

console.log(data)

    return (

        <div>Customer's Tab</div>
    )
}

export default CustTabDisplay