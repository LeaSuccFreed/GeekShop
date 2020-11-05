import React from 'react'
import {CheckoutStepsContainer, Steps} from './checkoutSteps_style'

const CheckoutSteps = ({step1, step2, step3, step4}) => {
    return (
        <CheckoutStepsContainer>
            <Steps className={step1 ? `active` : ''}>Signin</Steps>
            <Steps className={step2 ? `active` : ''}>Shipping</Steps>
            <Steps className={step3 ? `active` : ''}>Payment</Steps>
            <Steps className={step4 ? `active` : ''}>Place Order</Steps>
        </CheckoutStepsContainer>
    )
}

export default CheckoutSteps
