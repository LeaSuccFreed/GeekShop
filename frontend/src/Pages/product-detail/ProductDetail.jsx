import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import data from '../../data'
import { Description, ProductPageContainer, ImgContainer, Title, DescriptionParagraph, QtyContainer } from './product-detail.style'
// import {ReactComponent as FuelStation} from '../../assets/fuel-station.svg'
// import {ReactComponent as CarEngine} from '../../assets/engine.svg'
// import {ReactComponent as Seat} from '../../assets/seat.svg'
// import {ReactComponent as Car} from '../../assets/car.svg'
// import {ReactComponent as Hp} from '../../assets/turbo.svg'
import { fetchDetailStart } from '../../Redux/features/fetchCarDetails/fetchCarDetails'
import PrimaryButton from '../../components/primary-button/PrimaryButton'


const ProductDetail = () => {
    const carDetail = useSelector(state => state.fatchCarDetails);
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
    
    const {image, name, description, price, countInStock, brand} = carDetail.carDetails;
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
