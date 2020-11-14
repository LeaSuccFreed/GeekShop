import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

    & .titel{
        align-self: flex-start;
        padding-left: 4%;
    }
`

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    width: 95%;

    & thead{
        border-bottom: 2px solid black;
    }

    & .tr-p{
        display: flex;
        width: 100%;
        height: 40px;
        align-items: center;

        &:nth-child(even){
            background-color: #dedede;
        }

        & .tr-c{
            display: flex;
            width: 12%;
        }

        & .id{
            width: 27%;
            padding-left: 3%;
        }
    }
`
