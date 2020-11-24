import styled from 'styled-components'
import { device } from '../../components/size_style'

export const ProductPageContainer = styled.div`
    display: flex;
    width: 67%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    min-height: 86vh;
    margin: 0 auto;
    margin-top: 1vh;

    -webkit-box-shadow: 0px 0px 24px 8px rgba(0,0,0,0.37); 
box-shadow: 0px 0px 24px 8px rgba(0,0,0,0.37);

@media ${device.tablet}{
    width: 90%;
}

@media ${device.mobileL}{
    width: 100%;
    flex-direction: column;
    margin-top: 0;
    box-shadow: none;
    margin-top: 2vh;
}
`

export const Description = styled.div`
     display: flex;
    flex-direction: column;
    width: 512px; /*512px */
    align-items: center;
    justify-content: space-evenly;
    /* margin-right: 32%; */
    height: 500px;

    & h3{
        margin-top: 30px;
        font-size: 27px;
    } 

    @media ${device.laptop}{
        width: 300px;
        margin-right: 50px;
    }

    @media ${device.mobileL}{
        width: 100%;
        margin: 0;
        align-self: flex-start;
        margin-top: 15%;

    }
`

export const ImgContainer = styled.img`
     width: 37%;
     margin-left: 2%;

     @media ${device.mobileL}{
         margin-left: 0;
         width: 51%;
     }

     
`
export const Title = styled.h2`
    align-self: flex-start;

    @media ${device.mobileL}{
        width: 80%;
        align-self: center;
    }
    
`

export const DescriptionParagraph = styled.p`
    text-align: justify;
    margin-right: 25px;
    align-self: flex-start;

    @media ${device.mobileL}{
        margin: 0;
        width: 80%;
        align-self: center;
        
    }
`
export const QtyContainer = styled.div`
    display: flex;
    align-items: center;
    
    & .selectSt{
        height: 30px;
        margin-left: 5px;
    }
`