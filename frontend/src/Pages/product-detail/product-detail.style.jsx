import styled from 'styled-components'

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
    
`

export const Description = styled.div`
     display: flex;
    flex-direction: column;
    width: 512px; 
    align-items: center;
    justify-content: space-evenly;
    /* margin-right: 32%; */
    height: 500px;

    & h3{
        margin-top: 30px;
        font-size: 27px;
    } 

`

export const ImgContainer = styled.img`
     width: 37%;
     margin-left: 2%;
`
export const Title = styled.h2`
    align-self: flex-start;
    
`

export const DescriptionParagraph = styled.p`
    text-align: justify;
    margin-right: 25px;
    align-self: flex-start;
`
export const QtyContainer = styled.div`
    display: flex;
    align-items: center;
    
    & .selectSt{
        height: 30px;
        margin-left: 5px;
    }
`