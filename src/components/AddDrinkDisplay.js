import styled from "styled-components";

function AddDrinkDisplay({onAddOrder, params, barId, drinksList}) {

  
    
    function handleAddDrink(e) {
        console.log('param:', params.id)
        console.log('target:', e.target.value)
        fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            tab_id: params.id,
            drink_id: e.target.value})
        })
        .then((r) => {
            if (r.ok) {
            r.json().then((newOrder) => {
                console.log('New Order:', newOrder)
                onAddOrder(newOrder)
            })}
        })
    }

    return (
        <div>
            {drinksList.map((drink) => {
            if (drink.bar_id == barId) {
                return  <div>
                            <Items>{drink.drink_type}</Items>
                            <AddBtn value={drink.id} onClick={handleAddDrink}>➕</AddBtn>
                        </div>
            } 
        })}
        </div>
    )
}

//styled components
const Items = styled.h4`
    font-family: Arial;
    color: rgb(255, 140, 0); 
    display: inline-block;
    text-align: left;
`
const AddBtn = styled.button`
    background-color: white;
    border: none;
    display: inline-block;
    padding-left: 10pt;
    &:hover {
        background-color: white;
`

export default AddDrinkDisplay