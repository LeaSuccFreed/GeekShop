import React, {useEffect} from 'react'
import Product from '../../components/product-component/Product'
import {ProductsContainer} from './products_styles'
import { fetchStart } from '../../Redux/features/fetchCarsProducts/fetchCars'
import { useDispatch, useSelector  } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { productFilterRequest, productFilterReset } from '../../Redux/features/product/filterProductSlice'
const Products = () => {
    const products = useSelector(state => state.fetchCars)
    const {data: dt} = products
    const filterProduct = useSelector(state => state.filterProducts)
    const {success} = filterProduct
    const dispatch = useDispatch()
    const {data, loading, error} = filterProduct.success ? filterProduct : products
    let {brand} = useParams()
    useEffect(() => {
            dispatch(productFilterReset())
            if(dt.length > 0 && brand){
                dispatch(productFilterRequest({products, brand}))
            } else {
                dispatch(fetchStart()) 
            }
            
    }, [brand, dispatch])

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
