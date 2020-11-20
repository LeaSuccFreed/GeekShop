import styled from 'styled-components'
import { device } from '../../components/size_style'

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    min-height: 87.3vh;
`
export const PlaceOrderContainer = styled.div`
    margin-top: 1%;

    & .orderId{

        @media ${device.mobileL}{
            font-size: 18px;
        }
    }

    & .forMargin{
            margin-left: 5%;
        }

        & .productInfo{
            margin: 10% auto;
        }
`
export const PlaceOrderInfo = styled.div`
    width: 100%;
`

export const PlaceOrderAction = styled.div`
    align-self: flex-start;
`

export const TotalContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-self: flex-start;

    & li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        & div{
            display: flex;
        }

        & .task{
            width: 62%;
        }

        & .inf{
            width: 24px;
            align-self: flex-end;
            margin-left: 30%;
        }
    }
`