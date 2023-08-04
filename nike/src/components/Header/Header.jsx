import React from "react";
import * as J from './styles'
import {CaretDown} from '@phosphor-icons/react'
import logoJordan from '../../assets/jordan-logo.png'

export const Header = ()=>{
    return(
        <J.HeaderContainer>
            <J.Logo src={logoJordan} alt="" />
           <J.Arrow>
            <CaretDown size={90} color="#fff"/>
           </J.Arrow>
        </J.HeaderContainer>
    )
}