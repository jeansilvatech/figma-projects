import styled, { keyframes } from 'styled-components'
import bg from '../../assets/bg.png'
export const colors ={
    PRIMARY: "#CEA70A"
}
const arrowAnimation = keyframes `
    0%, 100%{
        transform: translateY(0)
    }
    50%{
        transform: translateY(20px)
    }
`
export const HeaderContainer = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const Arrow = styled.div `
    position: absolute;
    bottom: 0;
    animation: ${arrowAnimation} 3s ease-in-out infinite;
`