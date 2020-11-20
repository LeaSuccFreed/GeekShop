import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useLocation, useNavigate} from "react-router-dom"
import { userSigninInit } from '../../Redux/features/user/signinSlice'
import { Form, FormContainer,Container } from './signin_style'


const Signin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const { signinInit, userInfo, signinFailure } = useSelector(state => state.signin);
    const redirect = location.search ? location.search.split('=')[1] : '/'
    console.log(redirect)
    useEffect(()=> {
       if(userInfo?._id){
           navigate(`/${redirect}`, {replace: true})
       } 
    }, [userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userSigninInit({email, password}))
    }
    return (
        <Container>
            <Form height="400px" onSubmit={submitHandler}>
                <FormContainer>
                    <li><h2>Sign In</h2></li>
                    
                    <li>
                        {signinInit && <div>Loading...</div>}
                        {signinFailure && <div>{signinFailure}</div>}
                    </li>

                    <li>
                        <input type="email" name="email" placeholder="Email" id="email" onChange={e => setEmail(e.target.value)}></input>  
                    </li>
                    <li>
                        <input type="password" id="password" placeholder="Password" name="password" onChange={e => {setPassword(e.target.value)}}></input>
                    </li>
                    <li>
                        <button type="submit" className="button">Sign In</button>
                    </li>
                    <li className="newHere"><p>Hello friend new here?</p></li>
                    <li>
                        <Link className="newAcct" to={redirect === "/" ? "/register" : `/register?redirect=${redirect}`}>Create Account</Link>
                    </li>
                    
                </FormContainer>
            </Form>
        </Container>
    )
}

export default Signin
