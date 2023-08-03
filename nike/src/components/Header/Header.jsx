import React from "react";
import * as J from './styles'
import {CaretDown} from '@phosphor-icons/react'

export const Header = ()=>{
    return(
        <J.HeaderContainer>
           <J.Arrow>
            <CaretDown size={90} color="#fff"/>
           </J.Arrow>
        </J.HeaderContainer>
    )
}