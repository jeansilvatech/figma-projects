import React, {useState} from "react";
import * as J from './styles'
import { Modal } from "../Modal/Modal";


export const Card = (props)=>{
  const [isOpen, setIsOpen]  = useState(false);
  const cardClick = event =>{
    setIsOpen(current=>! current)
  }
    return(
        <>
        <J.CardContainer className="card" onClick={cardClick}>
            <J.Image src={props.image} alt="" />
        </J.CardContainer>
        {
            isOpen && <Modal bg={props.color} image={props.image} />
        }
        </>
    )
    
}
