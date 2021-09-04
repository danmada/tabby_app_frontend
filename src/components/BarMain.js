import React, {useState, useEffect} from "react";
import TabContainer from "./TabContainer"
import { useParams } from "react-router-dom"


function BarMain({tabs}) {


    

    return (
        <div>
            <h3>Bar Main</h3>
            <TabContainer tabs={tabs}/>
            
        </div>
    )
}

export default BarMain