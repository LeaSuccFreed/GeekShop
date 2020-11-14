import styled from 'styled-components'

export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;

`

export const SideBar = styled.ul`
    display: flex;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, .95);
    width: 100%;
    border-right: 2px solid black;
    height: 6vh;
    align-items: center;


    & a{
        color: white;
        cursor: pointer;
    }
`