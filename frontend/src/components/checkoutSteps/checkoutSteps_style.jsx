import styled from 'styled-components'

export const CheckoutStepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35rem;
`

export const Steps = styled.div`
    color: #c0c0c0;
    flex: 1 1;
    padding-top: 7px;
    &.active{
        border-top: 2px solid black;
        color: #000000
    }
`