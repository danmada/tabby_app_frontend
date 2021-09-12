

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
                            <h4>{drink.drink_type}</h4>
                            <button value={drink.id} onClick={handleAddDrink}>Add</button>
                        </div>
            } 
        })}
        </div>
    )
}

export default AddDrinkDisplay