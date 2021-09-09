function BarCard({ newTab, user, bar, handleStartTabClick}) {



    console.log(user)
    console.log(newTab)

    const id = bar.id

    return (
        <div>

            <h3>{bar.name}</h3>
            <button onClick={() => handleStartTabClick(id)}>Start A Tab</button>


        </div>
    )

}

export default BarCard