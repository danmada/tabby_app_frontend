import { Route, Switch, useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect, useCallback} from "react";
import styled from "styled-components";
import Login from "./Login";
import CustomerMain from "./CustomerMain";
import BarMain from "./BarMain";
import BarTabDisplay from "./BarTabDisplay"
import CustTabDisplay from "./CustTabDisplay";
import BarLogin from "./BarLogin";
import CustMainMenu from "./CustMainMenu";
import BarMainMenu from "./BarMainMenu";
import CustomerTabs from "./CustomerTabs";

function MainContainer({user, setUser, adminUser, setAdminUser, test}) {
    const [bars, setBars] = useState([])
    const [tabs, setTabs] = useState([])
    const [custOrders, setCustOrders] = useState([])

    const history = useHistory();

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

    function addNewOpenTab(openedTab) {
        setTabs((tabs) => [...tabs, openedTab])
    }
/////////////////

    //  const showCustOrders = useCallback((indTab) => {
    //      console.log('new order:', indTab)
    //     setCustOrders((custOrders) => [...custOrders, indTab])
    // }, [custOrders])

    // console.log('orders state:', custOrders)

    
    


    return (
        <ListDisplay>
            <Switch>
                <Route path="/tab/:id" component={() => <BarTabDisplay />}></Route>
                <Route path="/customertab/:id" component={() => <CustTabDisplay />}></Route>
                <Route path="/barlogin" component={() => <BarLogin test={test} adminUser={adminUser} setAdminUser={setAdminUser} />}></Route>
                <Route path="/main" component={() => <CustomerMain user={user} bars={bars} tabsData={tabs} addNewOpenTab={addNewOpenTab}/>}></Route>
                <Route path="/barmain/:id" component={() => <BarMain tabs={tabs} adminUser={adminUser}/>}></Route>
                <Route path="/barmainmenu" component={() => <BarMainMenu adminUser={adminUser}/>}></Route>
                <Route path="/custmainmenu" component={() => <CustMainMenu />}></Route>
                <Route path="/custalltabs" component={() => <CustomerTabs user={user} tabsData={tabs} bars={bars}/>}></Route>
                <Route exact path="/" component={() => <Login user={user} setUser={setUser} />}></Route>
            </Switch>


        </ListDisplay>
    )

}

//styled components

const ListDisplay = styled.div`
    overflow-y: scroll;
    height: 307pt;
`


export default MainContainer