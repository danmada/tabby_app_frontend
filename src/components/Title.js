import styled from "styled-components";

function Title() {

    return (
        <div>
            <AppName>TAB</AppName>
        </div>
    )
}

// Styled Components

const AppName = styled.h1`
    background-color: rgb(255, 140, 0);
    margin: 0;
    border-radius: 30px 30px 0 0;
`

export default Title