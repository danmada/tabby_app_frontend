import React, {useState, useEffect} from "react";
import TabContainer from "./TabContainer"
import { useParams } from "react-router-dom"


function BarMain({tabs}) {


    const params = useParams()  

    

    return (
        <div>
            <TabContainer tabs={tabs} params={params}/>
        </div>
    )
}

export default BarMain