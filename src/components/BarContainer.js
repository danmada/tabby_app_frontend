import { Link } from "react-router-dom"
import BarCard from "./BarCard"

function BarContainer({ tabsData, newTab, user, bars, handleStartTabClick}) {

    const barList = bars.map((bar) => (
        <BarCard key={bar.id} newTab={newTab} user={user} bar={bar} handleStartTabClick={handleStartTabClick}/>
    ))
        console.log(user)
    return (

        <div>
            <h1>Open Tabs</h1>
            {tabsData.map(tabs => 
                tabs.customer_id == user.id ? <Link to={`/customertab/${tabs.id}`}>{tabs.id}</Link> : console.log('it didnt work'))}
            <h1>Bars List</h1>
            {barList}
        </div>
    )

}

export default BarContainer