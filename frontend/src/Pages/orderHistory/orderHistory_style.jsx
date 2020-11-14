import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

`

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    width: 95%;

    & .tr{
        display: flex;
        align-items: center;
        height: 50px;
        width: 100%;

        

        &:nth-child(even){
        background-color: #dedede;
    }
    }
 & .td-item{
     display: flex;
     width: 200px;
     justify-content: flex-start;
 }

 & .th-item{
    display: flex;
    width: 200px;
 }

 & thead{
     border-bottom: 2px solid black;
 }
 & .id{
            width: 250px;
        }
`