import styled from 'styled-components'
import {device} from '../size_style'

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

        @media ${device.tablet}{
            width: 39%;
        }

        @media ${device.mobileL}{
            width: 78%;
        }
        
    }

    & .else{
        width: 18%;
        text-align: left;
    }

    & .name{
        width: 25%;
    }

    & .price{
        padding-left: 4%;
    }


    & .name, .price, .category, .brand, .action{
        @media ${device.mobileL}{
            display: none;
        }
    }

    & .brand, .category{
        @media ${device.tablet}{
            display: none;
        }
    }
}
`

export const Button = styled.button`

`