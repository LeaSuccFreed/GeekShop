import React from 'react'
import {Button} from './primary-button_style'
const PrimaryButton = ({children, onclick}) => {
    return (
    <Button onClick={onclick}>
        <span>{children}</span>
    </Button>
    )
}

export default PrimaryButton
