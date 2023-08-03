import React, {useState} from "react";
import * as J from './styles'
import { X } from '@phosphor-icons/react'
export const Modal = (props)=>{
    const bgColor ={
        backgroundColor: props.bg,
        color:props.bg
    }
    const [isOpen, setIsOpen] = useState(true);
        if(!isOpen){
            return null
        }
    return(
        <>
        <J.ModalContainer style={bgColor}>
            <J.Close onClick={() => setIsOpen(false)} title="Close">
                <X size={54} color="#fff"/>
            </J.Close>
            <J.CircleExtern>
                <J.Text>AIR</J.Text>
                <J.CircleIntern style={bgColor}>
                    <J.ImageProduct src={props.image} alt="" />
                </J.CircleIntern>
                <J.Text>JORDAN</J.Text>
            </J.CircleExtern>

        </J.ModalContainer>
        </>
    )
}