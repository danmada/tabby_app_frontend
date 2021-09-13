import { Link } from "react-router-dom"
import styled from "styled-components";

function TabCard({cust, custId, tabId, barId, params}) {

    const barsTab = params.id

    return (

        <div>
            <Items>
            { barId == barsTab ?
                (<Link to={`/tab/${tabId}`} className="btn" style={linkStyle } ><BtnH4>{cust}</BtnH4></Link>) :
                (console.log('it didnt work'))
            }
            </Items>
        </div>
    )

}

//styled components
const linkStyle = {
    // margin: "1rem",
    // textDecoration: "none",
    // color: 'rgb(255, 140, 0)',
    // fontFamily: "Arial",
    // padding: "0",
    // height: "60%",
    // backgroundColor: "rgb(245, 204, 180)",
  };

  const Items = styled.div`
    display: grid;
`
const BtnH4 = styled.h4`

`

export default TabCard