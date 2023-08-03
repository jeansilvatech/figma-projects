import { styled } from "styled-components";

export const CardContainer = styled.div `
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 10px;
    transition: 500ms;
    cursor: pointer;
    &:hover{
        scale: 0.98;
    }
`
export const Image = styled.img `
    width: 250px;
    transition: 500ms;
    &:hover{
        scale: 1.2;
        transform: rotate(-15deg);
    }
`