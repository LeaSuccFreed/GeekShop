import styled from 'styled-components'
import { device } from '../size_style'

export const CheckoutStepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 560px;

    @media ${device.mobileL}{
        width: 300px;
    }
`

export const Steps = styled.div`
    color: #c0c0c0;
    flex: 1 1;
    padding-top: 7px;
    &.active{
        border-top: 2px solid black;
        color: #000000
    }

    @media ${device.mobileL}{
        font-size: 14px
    }
`