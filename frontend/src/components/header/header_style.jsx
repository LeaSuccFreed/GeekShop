import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {device} from '../size_style'

import {ReactComponent as LoginLogo} from '../../assets/log-in.svg'
import {ReactComponent as MenuLogo} from '../../assets/menu.svg'

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 12.5vh;/*80px;*/
    
`

export const UpperHeaderContainer = styled.div`
    display: flex;
    height: 55px;
    justify-content: space-between;
    align-items: center;

    & .loginCartContainer{
        display: flex;
        align-items: center;
        padding-right: 5%;

        @media ${device.mobileL}{
            justify-content: flex-end;
            padding-right: 2%;
        }

        & a{
            width: 100px;
            @media ${device.mobileL}{
            width: 75px;
        }
        }
    }

    & .loginIconContainer{
    display: flex;
    align-items: center;
    cursor: pointer;
    }
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
justify-content: space-between; 

& .adminL{
            padding-right: 2%;
            color: white;
        }
`
export const LoginIcon = styled(LoginLogo)`
    stroke-width: 5%;
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
  padding-left: 7%;    
`

/////////DropDown/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const DropDownContainer = styled.div`
    display: ${({open}) => open === true ? 'flex' : 'none'}; 
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    right: 0;
    top: 9vh;
    min-width: 140px;
    min-height: 100px;
    z-index: 1;
    background-color: black;
    border-radius: 0 0 5px 5px;
    
    & Link{
        color: white;
        
    }
`

export const Lnk = styled(Link)`
    color: white;
`


