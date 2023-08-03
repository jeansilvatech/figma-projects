import { keyframes, styled } from "styled-components";

const animationCircle = keyframes`
        0%{
                scale: 0;
        }
`

const animationModal = keyframes`
        0%{
                opacity: 0;
        }
`
const animationImage = keyframes`
        0%,100%{
                transform: translateY(0);
        }
        50%{
                transform: translateY(20px);    
        }
`

export const ModalContainer = styled.div `
        width: 100%;
        height: 100%;
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: ${animationModal} .5s ease-in-out;
`
export const CircleExtern = styled.div `
        width:780px;
        height: 780px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 50%;
        background-color: #D9D9D9;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        animation: ${animationCircle} 1s ease-in-out;
        @media (max-width:768px) {
                width:500px;
                height: 500px;    
        }
        @media (max-width:600px) {
                width:400px;
                height: 400px;    
        }
        @media (max-width:425px) {
                width:300px;
                height: 300px;    
        }
`
export const CircleIntern = styled.div `
        width: 416px;
        height: 416px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width:768px) {
                width:300px;
                height: 300px;    
        }
        @media (max-width:600px) {
                width:200px;
                height: 200px;    
        }
        @media (max-width:425px) {
                width:170px;
                height: 170px;    
        }
       
`
export const Text = styled.h2 `
        font-size: 80px;
        font-weight: 300;
        letter-spacing: 28px;
        text-align: center;
        @media (max-width:768px) {
                font-size: 40px;
        }
        @media (max-width:600px) {
                font-size:30px;
        }
        @media (max-width:425px) {
                font-size:20px;
                letter-spacing: 4px;
                margin: 5px;
        }
`
export const ImageProduct = styled.img`
       width: 693px;
       animation: ${animationImage} 4s ease-in-out infinite;
       @media (max-width:768px) {
                width:400px;   
        }
        @media (max-width:425px) {
                width:300px;    
        }
`
export const Close = styled.div`
        position: fixed;
        top: 10px;
        right: 10px;
        transition: 500ms;
        cursor: pointer;
        &:hover{
                transform: rotate(90deg);
                opacity: 0.5;
        }
`