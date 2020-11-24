import styled from 'styled-components'
import { device } from '../../components/size_style'

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: flex-start;
    min-height: 87.3vh;

    & .cartTitle{
        position: absolute;
        left: 25px;
        top: 13.71875vh;
        font-size: 24px;
        z-index: 0;
    }

    & .emptyCart{
        padding-top: 6%;
        padding-right: 68%;
        font-size: 18px;

        @media ${device.laptop}{
            padding-top: 11%;
            padding-right: 43%;
        }

        @media ${device.mobileL}{
            padding-top: 24%;
            padding-right: 43%;
        }
    }

`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`

export const ProductInfoContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 790px;
    margin-top: 11vh;
    align-items: center;
    height: 200px;
    margin-bottom: 30px;

    -webkit-box-shadow: 15px 21px 36px -2px rgba(0,0,0,0.32);
    -moz-box-shadow: 15px 21px 36px -2px rgba(0,0,0,0.32);
    box-shadow: 15px 21px 36px -2px rgba(0,0,0,0.32);


    

    @media ${device.tablet}{
        width: 660px;
    }

    @media ${device.mobileL}{
        flex-direction: column;
        width: 300px;
        height: 350px;
        box-shadow: 8px 54px 89px -68px rgba(0,0,0,0.75);
-webkit-box-shadow: 8px 54px 89px -68px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 54px 89px -68px rgba(0,0,0,0.75);
    }

`



export const QtyContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 6.329113924%/*50px*/;

    & .selectSt{
        margin-left: 5px;
    }
`
export const Img = styled.img`
    width: 100px;
    margin-left: 2%;
`
export const NamePriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 3.037974684%/*24px*/;

`

export const TrashCanContainer = styled.div`
    display: flex;
    height: 199px;
    width: 100px;
    background-color: black;
    align-items: center;
    justify-content: center;
    margin-left: 29.55962%/*36px*/;
    cursor: pointer;

    @media ${device.mobileL}{
        height: 60px;
        width: 100%;
        margin-left: 0;
    }
`
export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px/*20%*/;
    min-height: 314px;
    border: 1px solid black;
    margin-top: 5vh;
`
export const TotalContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-self: flex-start;

    & .total{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
    }
`

export const Button = styled.button`
    display: flex;
    width: 200px;
    height: 50px;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    background-color: black;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        -webkit-box-shadow: inset -49px -31px 300px 200px rgba(237,237,237,0.2);
-moz-box-shadow: inset -49px -31px 300px 200px rgba(237,237,237,0.2);
box-shadow: inset -49px -31px 300px 200px rgba(237,237,237,0.2);
    }
`
