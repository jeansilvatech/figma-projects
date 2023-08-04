import styled, { keyframes } from 'styled-components'

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
    background-color: #CEA70A;
`
export const Arrow = styled.div `
    position: absolute;
    bottom: 0;
    animation: ${arrowAnimation} 3s ease-in-out infinite;
`
export const Logo = styled.img`
         @media (max-width:600px) {
                width:280px;    
        }
`