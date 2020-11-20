import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    min-height: 87.3vh;
`
export const PlaceOrderContainer = styled.div`
    margin-top: 1%;

    & .forMargin{
        margin-left: 5%;
    }

    & .checkoustepsMargin{
        margin: 0 auto;
    }

    & .productInfo{
        margin: 10% auto;
    }
`
export const PlaceOrderInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

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

export const PlaceOrderAction = styled.div`
    align-self: flex-start;
`