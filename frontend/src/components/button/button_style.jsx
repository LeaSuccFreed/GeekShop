import styled from 'styled-components'

export const ButtonContainer = styled.button`
        border-radius: 5px;
        border: 2px solid black;
        background-color: white;
        font-size: ${props => props.fontsize};
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        margin-top: 8px;
        cursor: pionter;
        width: ${props => props.width};
        height: ${props => props.height};

        &:hover{
        color: #ffffff !important;
        background: black;
        border-color: black !important;
        transition: all 0.4s ease 0s;
        }
`