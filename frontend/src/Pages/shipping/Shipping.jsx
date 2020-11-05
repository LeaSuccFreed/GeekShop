import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link, useLocation, useNavigate} from "react-router-dom"
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps'
import { cartSaveShippingInit } from '../../Redux/features/cart/cart_redux'
import { Form, FormContainer, Container } from '../sign-in/signin_style'


const Shipping = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        dispatch(cartSaveShippingInit({fullName, address, city, postalCode, country}));
        navigate('/payment', {replace: true})
    }
    return (
        <Container>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <Form height="388px" onSubmit={submitHandler}>
                <FormContainer>
                    <li><h2>Shipping</h2></li>

                    <li>
                       <input type="text" name="name" placeholder="Name" id="name" onChange={e => setFullName(e.target.value)}/>
                    </li>

                    <li>
                        <input type="text" name="address" placeholder="Address" id="address" onChange={e => setAddress(e.target.value)}></input>  
                    </li>

                    <li>
                        <input type="text" name="city" placeholder="City" id="city" onChange={e => setCity(e.target.value)}></input>  
                    </li>

                    <li>
                        <input type="text" name="postalcode" placeholder="Postal Code" id="postalCode" onChange={e => setPostalCode(e.target.value)}></input>  
                    </li>

                    <li>
                        <input type="text" name="country" placeholder="Country" id="country" onChange={e => setCountry(e.target.value)}></input>  
                    </li>

                    <li>
                            <button type="submit">Continue</button>
                        
                    </li>
                    
                </FormContainer>
            </Form>
        </Container>
    )
}

export default Shipping
