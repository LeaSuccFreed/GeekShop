import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {ReactComponent as LoginLogo} from '../../assets/log-in.svg'
import {ReactComponent as MenuLogo} from '../../assets/menu.svg'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
`

export const UpperHeaderContainer = styled.div`
    display: flex;
    height: 55px;
    justify-content: space-around;
    align-items: center;
`

export const Gold = styled.span`
    color: #FFD700
`

export const LowerHeaderContainer = styled.div`
width: 100%;
height: 25px;
display: flex;
background: black;
align-items: center;
/* justify-content: space-evenly; */

& .loginIconContainer{
    display: flex;
    cursor: pointer;
    flex-grow: 1;
    justify-content: flex-end;
    color: white;
    margin-right: 2%;
}
`
export const LoginIcon = styled(LoginLogo)`
    stroke-width: 5%;
    /* margin-right: 2% */
`
export const MenuIcon = styled(MenuLogo)`
    margin-left: 2%;
    cursor: pointer;
`

export const Title = styled(Link)`
    display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;    
`

/////////DropDown/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const DropDownContainer = styled.div`
    display: ${({open}) => open === true ? 'flex' : 'none'}; 
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    right: 0;
    top: 12.5vh;
    min-width: 140px;
    min-height: 100px;
    /* height: ${({open}) => open === true ? '100px' : "0"}; */
    z-index: 1;
    background-color: black;
    border-radius: 0 0 5px 5px;
    /* transition:height 0.5s linear 0s; */
    
    & Link{
        color: white;
        
    }
`

export const Lnk = styled(Link)`
    color: white;
`


