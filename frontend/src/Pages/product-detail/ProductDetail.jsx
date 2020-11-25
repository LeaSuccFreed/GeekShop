import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Description, ProductPageContainer, ImgContainer, Title, DescriptionParagraph, QtyContainer } from './product-detail.style'
import { fetchDetailStart } from '../../Redux/features/fetchCarDetails/fetchCarDetails'
import PrimaryButton from '../../components/primary-button/PrimaryButton'


const ProductDetail = () => {
    const comicDetail = useSelector(state => state.fatchComicDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [qty, setQty] = useState(1)
    
    let {id} = useParams();
    useEffect(() => {
        dispatch(fetchDetailStart(id, qty))
    }, [])

    const handleAddToCart = () => {
        navigate(`/cart/${id}?qty=${qty}`, {replace: true})
    }
    
    const {image, name, description, price, countInStock, brand} = comicDetail.carDetails;
    return (
        <ProductPageContainer>
            <ImgContainer src={image}/>
                <Description>
                    <Title>{name}</Title>

                    <DescriptionParagraph>By: {brand}</DescriptionParagraph>

                    <DescriptionParagraph>
                        {description}
                    </DescriptionParagraph>

                    <h3>Price: ${price}</h3>
                    <QtyContainer>
                        <p>Qty: </p>
                        <select className="selectSt" value={qty}
                                onChange={e => {
                                    setQty(e.target.value)
                            }}
                            >
                                {[...Array(countInStock).keys()].map((num)=>(
                                    <option key={num + 1} value={num + 1}> {num +1} </option>
                                ))}
                        </select>
                    </QtyContainer>

                    <PrimaryButton onclick={handleAddToCart} type="submit" >Add to Cart</PrimaryButton>
                </Description>

        </ProductPageContainer>
    )
}

export default ProductDetail
