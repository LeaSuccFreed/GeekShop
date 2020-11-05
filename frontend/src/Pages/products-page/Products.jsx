import React, {useEffect} from 'react'
import Product from '../../components/product-component/Product'
import {ProductsContainer} from './products_styles'
import { fetchStart } from '../../Redux/features/fetchCarsProducts/fetchCars'
import { useDispatch, useSelector  } from 'react-redux'

const Products = () => {
    const {data, loading, error} = useSelector(state => state.fetchCars)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchStart());
    }, [])

    return (
        <ProductsContainer>
            {
                loading ? (<div>Loading...</div>) :
                    error ? (<div>Error: `${error.message}`</div>) : 
                        data && data.map(product => {
                            const {_id, image, name, price} = product
                            return(
                                <Product key={_id} id={_id} img={image} name={name} price={price}></Product>
                            )
                        })
             }
        </ProductsContainer>
        
    )
}

export default Products
