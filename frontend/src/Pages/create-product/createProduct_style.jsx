import styled from 'styled-components'
import { device } from '../../components/size_style'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 87.3vh;
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    & .eaPdfc, h3{
        margin: 1%;
    }

    @media ${device.mobileL}{
        padding-top: 15px;
    }
`

export const Form = styled.form`
    display: flex;
    width: 70%/*830px*/;
    height: ${props => props.height};
    justify-content: space-evenly;
    align-items: center;
`
export const FormContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* align-items: center; */
    margin: 0;
    list-style: none;
    padding: 0;
    width: 100%;

    & li:first-child{
        position: absolute;
        top: 10rem;

        @media ${device.laptopL}{
            top: 5rem
        }

        @media ${device.laptop}{
            top: 5.5rem;
        }

        @media ${device.mobileL}{
            display: none;
        }
    }
    & h2{
        font-weight: bold;
    }

    & li{
        display: flex;
        justify-content: center;
        width: 300px;
    }

    & input{
        border: none;
        background-color: #eee;;
        padding: 12px 15px;
        margin: 8px 0;
        border-radius: 10px;
        border: 2px solid black;
        outline: 0;
        cursor: text;

        &:focus{
            border: 2px solid white
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

    & textarea{
        width: 80%;
        outline: none;
        border: 2px solid #fafafa;
        background: none;
        padding: 0.6rem 1.2rem;
        color: black;
        font-weight: 500;
        font-size: 0.95rem;
        letter-spacing: 0.5px;
        border: 1px solid black;
        border-radius: 25px;
        transition: 0.3s;
        margin-top: 3px
    }
`
