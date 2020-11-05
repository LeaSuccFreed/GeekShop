import React from 'react'
import { ButtonContainer } from './button_style'

const Button = ({children, onclick, width, fontsize, height}) => {
    return (
        <ButtonContainer width={width} height={height} fontsize={fontsize} onClick={onclick}>{children}</ButtonContainer>
    )
}

export default Button
