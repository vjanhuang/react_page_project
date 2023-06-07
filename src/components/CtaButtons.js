import React from "react";
import styled from 'styled-components'

function CtaButton({ name }) {
    return (
        <CtaButtonStyled>
            {name}
        </CtaButtonStyled>
    )
}

const CtaButtonStyled = styled.a`
    background-color: rgba(57, 95, 246, 0.6);
    text-transform:uppercase;
    padding: 0;
    margin:10px;
    border-radius;10px;
    font-size:1.1rem
    font-weight:500;
    color:rgb(55,200,150);
    cursor:pointer;
    display: inline-block;
    padding: 5px 20px;
    border: 1px solid rgb(169, 117, 237);
    letter-spacing: .1rem;
    transition: .3s ease background-color;
    &:hover{
        background-color: rgba(57, 95, 246, 0.1);
    }
`;

export default CtaButton;