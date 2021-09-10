import { Link } from "react-router-dom"
import BarCard from "./BarCard"

function BarContainer({ tabsData, newTab, user, bars, handleStartTabClick}) {

    const barList = bars.map((bar) => (
        <BarCard key={bar.id} newTab={newTab} user={user} bar={bar} handleStartTabClick={handleStartTabClick}/>
    ))
        console.log(`BC: ${user}`)
    return (

        <div>
            <h1>Bars List</h1>
            {barList}
        </div>
    )

}

export default BarContainer