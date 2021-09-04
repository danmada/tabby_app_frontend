import { Route, Switch, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./Login";
import CustomerMain from "./CustomerMain";
import BarMain from "./BarMain";
import NavBar from "./NavBar"
import TabDisplay from "./TabDisplay"

function MainContainer() {
    const [bars, setBars] = useState([])
    const [tabs, setTabs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/bars`)
        .then((res) => res.json())
        .then((json) => {
        setBars(json);
        });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3000/tabs`)
        .then((res) => res.json())
        .then((json) => {
        setTabs(json);
        });
    }, []);

    console.log(tabs)

    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/tab/:id" component={() => <TabDisplay />}></Route>
                <Route path="/main" component={() => <CustomerMain bars={bars}/>}></Route>
                <Route path="/barmain" component={() => <BarMain tabs={tabs}/>}></Route>
                <Route path="/" component={() => <Login />}></Route>
            </Switch>


        </div>
    )

}

export default MainContainer