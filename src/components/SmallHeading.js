import React from "react";
import styled from 'styled-components'

function SmallHeading({ title, identifier }) {
    return (
        <SmallHeadingStyled
            className={identifier}>
            {title}
        </SmallHeadingStyled>
    )
}
const SmallHeadingStyled = styled.h3`
    background: linear-gradient(120deg,rgb(132,111,244),rgb(241,118,116));
    background-clip: text;
    -webkit-text-fill-color:transparent;
    -webkit-background-clip:text;
    display:inline-block;
`

export default SmallHeading;