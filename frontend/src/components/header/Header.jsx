import React, { useState } from 'react'
import Cart from '../cart-component/Cart'
import SearchBar from '../search-bar/SearchBar'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {HeaderContainer, UpperHeaderContainer, Gold, LowerHeaderContainer, LoginIcon, MenuIcon, Title, DropDownContainer, Lnk} from './header_style'
import { userSignOutInit } from '../../Redux/features/user/signinSlice'


const Header = ({openmenu}) => {
    const {userInfo} = useSelector(state => state.signin)
    const[open, setOpen] = useState(false);
    const[openAdmin, setOpenAdmin] = useState(false)
    const dispatch = useDispatch()
    
    const toogleOpen = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

    const signOutHandler = () => {
        dispatch(userSignOutInit())
    }
    return (
        <HeaderContainer>
            <UpperHeaderContainer>
                <Title to="/"> <Gold>Geek</Gold>Universe <Gold>G.</Gold>U.</Title>
                <div className="loginCartContainer">
                    <Link to='/cart/:id'>
                    <Cart></Cart>
                    </Link>
                    {
                        userInfo?._id ? 
                            ( 
                                <>
                                <p onClick={toogleOpen}  className="loginIconContainer"><strong>{userInfo.name}</strong></p>
                                    <DropDownContainer open={open} className='dropDown'>
                                        <Lnk to='/profile'>Profile</Lnk>
                                        <Lnk to='/orderhistory'>Order History</Lnk>
                                        <Lnk onClick={signOutHandler} to='#signout'>Sign Out</Lnk>
                                    </DropDownContainer>
                            </>
                            ) 
                            : 
                                <Link className="loginIconContainer" to='/signin'>
                                    <LoginIcon />
                                </Link>
                    }
                </div>
                
                
            </UpperHeaderContainer>
            <LowerHeaderContainer>
                <MenuIcon onClick={openmenu}/>
                {
                        userInfo && userInfo.isAdmin && (
                            <Link className="adminL" to="/admin"> Admin </Link>
                        )
                 } 
            </LowerHeaderContainer>
        </HeaderContainer>
    )
}

export default Header
