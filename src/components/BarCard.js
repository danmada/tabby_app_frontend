function BarCard({bar, handleStartTabClick}) {



    

    const id = bar.id

    return (
        <div>

            <h3>{bar.name}</h3>
            <button onClick={() => handleStartTabClick(id)}>Start A Tab</button>


        </div>
    )

}

export default BarCard