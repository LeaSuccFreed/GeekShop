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
                <Title to="/"> <Gold>Shop</Gold>ForEveryOne</Title>
                <SearchBar></SearchBar>
                <Link to='/cart/:id'>
                    <Cart></Cart>
                </Link>
                
            </UpperHeaderContainer>
            <LowerHeaderContainer>
                <MenuIcon onClick={openmenu}/>
                {
                    userInfo?._id ? 
                           ( 
                            <>
                            <p onMouseEnter={toogleOpen}  className="loginIconContainer">{userInfo.name}</p>
                                <DropDownContainer open={open}  onMouseLeave={toogleOpen} className='dropDown'>
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
            </LowerHeaderContainer>
        </HeaderContainer>
    )
}

export default Header
