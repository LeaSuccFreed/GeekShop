import React, {useEffect} from 'react'
import Product from '../../components/product-component/Product'
import {ProductsContainer} from './products_styles'
import { fetchStart } from '../../Redux/features/fetchComicsProducts/fetchComics'
import { useDispatch, useSelector  } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productFilterRequest, productFilterReset } from '../../Redux/features/product/filterProductSlice'
import {selectComicsItems} from '../../Redux/features/fetchComicsProducts/fetchComicsReselect'
import Loading  from '../../components/loading/Loading'
const Products = () => {
    const products = useSelector(selectComicsItems)
    const {data: dt} = products
    const filterProduct = useSelector(state => state.filterProducts)
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
                loading ? (<Loading/>) :
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
