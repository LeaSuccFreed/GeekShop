import styled from 'styled-components'

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
`

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 11vh;
    width: 790px
`

export const ProductInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 200px;
    margin-bottom: 30px;

    -webkit-box-shadow: 15px 21px 36px -2px rgba(0,0,0,0.32);
    -moz-box-shadow: 15px 21px 36px -2px rgba(0,0,0,0.32);
    box-shadow: 15px 21px 36px -2px rgba(0,0,0,0.32);
`


export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

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
    margin-left: 2vh;
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
    margin-left: 5.55962%/*36px*/;
    cursor: pointer;
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
