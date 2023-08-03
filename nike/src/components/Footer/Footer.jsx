import React from "react";
import * as J from './styles'
import {GithubLogo, LinkedinLogo} from '@phosphor-icons/react'
export const Footer = ()=>{
    return (
        <J.FooterContainer>
            <J.Text>developed by <J.TextSpan>Jean Silva</J.TextSpan></J.Text>
            <div className="social">
                <J.Link href="https://github.com/jeansilvatech" target="_blank"> <GithubLogo size={32} /> </J.Link>
                <J.Link href="https://www.linkedin.com/in/jeanpesil" target="_blank"><LinkedinLogo size={32}/></J.Link>
            </div>
        </J.FooterContainer>
    )
}