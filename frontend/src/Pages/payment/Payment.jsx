import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps'
import { cartSavePaymentInit } from '../../Redux/features/cart/cart_redux'
import { Form, FormContainer, Container } from '../sign-in/signin_style'


const Payment = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        dispatch(cartSavePaymentInit({paymentMethod}));
        navigate('/placeorder', {replace: true})
    }
    return (
        <Container>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <Form height="388px" onSubmit={submitHandler}>
                <FormContainer>
                    <li><h2>Payment</h2></li>

                    <li>
                        <input type="radio" name="paymentMethod" placeholder="Payment Method" id="paypal" value='PayPal' onChange={e => setPaymentMethod(e.target.value)}></input> 
                        <label htmlFor="paypal">Paypal</label>
                    </li>

                    <button type="submit">Continue</button>

                    
                </FormContainer>
            </Form>
        </Container>
    )
}

export default Payment
