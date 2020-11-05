import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {ReactComponent as BuyIconSVG} from '../../assets/buy.svg'

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 370px;
    height: 69.070735vh;
    margin-top: 6vh;
    margin-bottom: 2vh;
    box-shadow: -3px 26px 25px -29px rgba(0,0,0,0.3);
-webkit-box-shadow: -3px 26px 25px -29px rgba(0,0,0,0.3);
-moz-box-shadow: -3px 26px 25px -29px rgba(0,0,0,0.3);
`
export const ProductImgContainer = styled(Link)`
    display: flex;
    width: 100%;
    height: 53.25520833vh;/*209px */
    /* border-bottom: 1px solid #b5b5b5; */
    justify-content: center;
    align-items: center;
`
export const ProductImg = styled.img`
    width: 58%;
`

export const FooterProductContainer = styled.div`
    width: 100%;
    height: 16.802083vh/*106px*/;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const CarTitle = styled.h4`
    margin: 0;
    color: black;
    font-size: 20px;
    /* margin-top: 2.384230707vh;15px */
`

export const Price = styled.h4`
    font-weight: normal;
    margin: 0;
    font-size: 15px;
    color: black;
`

export const ButtonBuy = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 6vh;
    border: none;
    align-self: center;
    background: none;
    border: 2px solid black;
    border-radius: 10px;
    color: white;
    margin-top: 1.30208333vh;
    cursor: pointer;

    &:hover{
        background: black;
    }
`
export const BuyIcon = styled(BuyIconSVG)`
width: 32px;
height: 32px;
`