import styled from 'styled-components'
import {ReactComponent as CartLogo} from '../../assets/cart.svg'

const logoXY = {
    width: '25px',
    height: '25px'
}

export const CartContainer = styled.div`
    display: flex;
    width: 100px;
    height: 30px;
    justify-content: space-evenly;
    align-items: center;
`

export const CartIcon = styled(CartLogo)`
    width: ${logoXY.width};
    height: ${logoXY.height};
    cursor: pointer;
`

 export const PayContainer = styled.div`
    display: flex;
    width: 50px;
    height: 30px;
    justify-content: center;
    align-items: center;
    
 `


