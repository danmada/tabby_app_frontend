import styled from "styled-components";

function BarCard({ newTab, user, bar, handleStartTabClick}) {



    console.log(user)
    console.log(newTab)

    const id = bar.id

    return (
        <Rows>
            <span>
            {/* <BarName>{bar.name}</BarName> */}
            <Btn onClick={() => handleStartTabClick(id)}>{bar.name}</Btn>
            </span>


        </Rows>
    )

}

//styled components

const BarName = styled.h3`
   font-family: Arial;
   color: rgb(255, 140, 0);
   padding-right: 5pt;
   display: inline-block;
`
const Btn = styled.button`
    background-color: rgb(245, 204, 180);
    border: none;
    color: rgb(255, 140, 0);
    width: 200pt;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    &:hover {
        background-color: lightblue;
`
const Rows = styled.div`
    // background-color: rgb(245, 204, 180);
    // width: 200pt;
    // margin: 30pt;
    // text-align: center;
`

export default BarCard