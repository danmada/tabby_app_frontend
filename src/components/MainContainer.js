import { Route, Switch, useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect} from "react";
import Login from "./Login";
import CustomerMain from "./CustomerMain";
import BarMain from "./BarMain";
import TabDisplay from "./TabDisplay"
import CustTabDisplay from "./CustTabDisplay";
import BarLogin from "./BarLogin";
import CustMainMenu from "./CustMainMenu";
import BarMainMenu from "./BarMainMenu";
import CustomerTabs from "./CustomerTabs";

function MainContainer({user, setUser, adminUser, setAdminUser}) {
    const [bars, setBars] = useState([])
    const [tabs, setTabs] = useState([])
   
    

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
 
    console.log(user)

    return (
        <div>
            <Switch>
                <Route path="/tab/:id" component={() => <TabDisplay />}></Route>
                <Route path="/customertab/:id" component={() => <CustTabDisplay />}></Route>
                <Route path="/barlogin" component={() => <BarLogin adminUser={adminUser} setAdminUser={setAdminUser} />}></Route>
                <Route path="/main" component={() => <CustomerMain user={user} bars={bars} tabsData={tabs}/>}></Route>
                <Route path="/barmain/:id" component={() => <BarMain tabs={tabs} adminUser={adminUser}/>}></Route>
                <Route path="/barmainmenu" component={() => <BarMainMenu adminUser={adminUser}/>}></Route>
                <Route path="/custmainmenu" component={() => <CustMainMenu />}></Route>
                <Route path="/custalltabs" component={() => <CustomerTabs user={user} tabsData={tabs} />}></Route>
                <Route path="/" component={() => <Login user={user} setUser={setUser} />}></Route>
            </Switch>


        </div>
    )

}

export default MainContainer