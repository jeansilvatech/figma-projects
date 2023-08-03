import React from "react";
import * as J from './styles'
import { Card } from "../Card/Card";
import jordan1 from '../../assets/jordan-1.png'
import jordan2 from '../../assets/jordan-2.png'
import jordan3 from '../../assets/jordan-3.png'
import jordan4 from '../../assets/jordan-4.png'
import jordan5 from '../../assets/jordan-5.png'
import jordan6 from '../../assets/jordan-6.png'
import jordan7 from '../../assets/jordan-7.png'
import jordan8 from '../../assets/jordan-8.png'


export const Products = ()=>{
    return(
        <J.ProductsContainer>
            <Card image={jordan1}  color={"#86A08A"}/>
            <Card image={jordan2} color={"#5C5767"} />
            <Card image={jordan3} color={"#3B0C5A"}/>
            <Card image={jordan4} color={"#A4A4A5"}/>
            <Card image={jordan5} color={"#6E0733"}/>
            <Card image={jordan6} color={"#FB3300"}/>
            <Card image={jordan7} color={"#365ABA"}/>
            <Card image={jordan8} color={"#030303"}/>
        </J.ProductsContainer>
    )
}