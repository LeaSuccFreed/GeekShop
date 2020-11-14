import React, {useEffect} from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {SideBar, Container} from './admin-style'
const Admin = () => {
    const {userInfo} = useSelector(state => state.signin);
    const navigate = useNavigate();

    useEffect(()=> {
        if(userInfo._id === undefined || userInfo.isAdmin === false){
            navigate('/signin', {replace: true})
        }
    }, [userInfo])
    return (
        <Container>
            <SideBar>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="users">Users</Link></li>
                <li><Link to="orderlist">Orders</Link></li>
            </SideBar>

            <Outlet/>
        </Container>
    )
}

export default Admin
