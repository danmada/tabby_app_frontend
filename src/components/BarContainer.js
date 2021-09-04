import BarCard from "./BarCard"

function BarContainer({bars}) {

    const barList = bars.map((bar) => (
        <BarCard key={bar.id} name={bar.name}/>
    ))

    return (

        <div>
            <h1>Bars List</h1>
            {barList}
        </div>
    )

}

export default BarContainer