import styled from "styled-components";

function Title() {

    return (
        <div>
            <AppName>TABBY</AppName>
        </div>
    )
}

// Styled Components

const AppName = styled.h1`
    background-color: orange;
    margin: 0;
`

export default Title