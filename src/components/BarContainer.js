import BarCard from "./BarCard"

function BarContainer({bars, handleStartTabClick}) {

    const barList = bars.map((bar) => (
        <BarCard key={bar.id} bar={bar} handleStartTabClick={handleStartTabClick}/>
    ))

    return (

        <div>
            <h1>Bars List</h1>
            {barList}
        </div>
    )

}

export default BarContainer