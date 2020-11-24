import React from 'react'
import { CarTitle, ProductContainer, ProductImg, ProductImgContainer, Price, ButtonBuy, FooterProductContainer, BuyIcon } from './product_style'

const Product = ({id, img, name, price, }) => {
    return (
        <ProductContainer>
            <ProductImgContainer to={`/product/:${id}`}>
                <ProductImg src={img}/>
            </ProductImgContainer>
            <FooterProductContainer>
                <CarTitle>{name}</CarTitle>
                <Price> Price: ${price}</Price>
            </FooterProductContainer>
            
        </ProductContainer>
    )
}

export default Product
