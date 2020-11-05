import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useLocation, useNavigate} from "react-router-dom"
import { userRegisterInit } from '../../Redux/features/user/registerSlice'
import { Form, FormContainer, Container } from '../sign-in/signin_style'


const Signin = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRepassword] = useState('');
    const dispatch = useDispatch();
    const { signinInit, userInfo, signinFailure } = useSelector(state => state.register);
    const redirect = location.search ? location.search.split('=')[1] : '/'
    useEffect(()=> {
       if(userInfo?._id){
           navigate(`/${redirect}`, {replace: true})
       } 
    }, [userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userRegisterInit({name, email, password}));
    }
    return (
        <Container>
            <Form height="500px" onSubmit={submitHandler}>
                <FormContainer>
                    <li><h2>Sign Up</h2></li>
                    
                    <li>
                        {signinInit && <div>Loading...</div>}
                        {signinFailure && <div>{signinFailure}</div>}
                    </li>

                    <li>
                        <input type="name" name="name" placeholder="Name" id="name" onChange={e => setName(e.target.value)}></input>  
                    </li>

                    <li>
                        <input type="email" name="email" placeholder="Email" id="email" onChange={e => setEmail(e.target.value)}></input>  
                    </li>
                    <li>
                        <input type="password" id="password" placeholder="Password" name="password" onChange={e => {setPassword(e.target.value)}}></input>
                    </li>
                    <li>
                        <input type="password" id="rePassword" placeholder="Password 2x" name="rePassword" onChange={e => {setRepassword(e.target.value)}}></input>
                    </li>
                    <li>
                        <button type="submit" className="button">Sign Up</button>
                    </li>
                    <li><p>Already sign up ?</p></li>
                    <li>
                        <Link className="newAcct" to={redirect === "/" ? "signin" : `register?redirect=${redirect}`}>Create Account</Link>
                    </li>
                    
                </FormContainer>
            </Form>
        </Container>
    )
}

export default Signin
