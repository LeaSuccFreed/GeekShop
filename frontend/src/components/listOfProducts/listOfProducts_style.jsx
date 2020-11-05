import styled from 'styled-components'

export const Content = styled.div`
 display: flex;
 width: 100%;
`

export const ProductList = styled.div`
display: flex;
justify-content: center;
width: 100%;
& table{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    & thead{
        border-bottom: 2px solid black;
    }

    & tbody, thead{
        width: 90%;
    }
}
& .tRow{
    display:flex;
    align-items: center;
    height: 50px;

    &:nth-child(even){
        background-color: #dedede;
    }

    & .id{
        width: 30%;
        align-self: center;
        text-align: left;
        
    }

    & .else{
        width: 15%;
        text-align: left;
    }
}
`

export const Button = styled.button`

`