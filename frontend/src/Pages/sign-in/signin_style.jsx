import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 87.3vh;
`
export const Form = styled.form`
    display: flex;
    width: 300px;
    height: ${props => props.height};
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;
    border-radius: 20px;
`
export const FormContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    list-style: none;
    padding: 0;

    & h2{
        font-weight: bold;
    }

    & input{
        border: none;
        background-color: #eee;;
        padding: 12px 15px;
        margin: 8px 0;
        border-radius: 10px;
        outline: 0;
        cursor: text;

        &:focus{
            border: 2px solid black
        }
    }

    & button{
        border-radius: 20px;
        border: 2px solid black;
        background-color: white;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        margin-top: 8px;
        cursor: pionter;

        &:hover{
        color: #ffffff !important;
        background: black;
        border-color: black !important;
        transition: all 0.4s ease 0s;
        }

    }

    & li .newAcct{
        border: 2px solid black;
        border-radius: 20px;
        padding: 10px 15px;
        font-size: 12px;

        &:hover{
            color: #ffffff !important;
             background: black;
            border-color: black !important;
             transition: all 0.4s ease 0s;
        }

        
    }
    
    & li:last-child{
            margin-top: 14%;
        }
`
