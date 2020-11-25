import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectComicsItems } from '../../Redux/features/fetchComicsProducts/fetchComicsReselect'
import {Content, ProductHeader, ProductList, Button} from './listOfProducts_style'

const ListOfProducts = ({modal, deleteProduct}) => {
    const {data} = useSelector(selectComicsItems)
    return (
        <Content>
            <ProductList>
                <table>
                    <thead>
                        <tr className="tRow">
                            <th className="id">ID</th>
                            <th className="else name">Name</th>
                            <th className="else price">Price $</th>
                            <th className="else category">Category</th>
                            <th className="else brand">Brand</th>
                            <th className="else action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(product => (
                            <tr  className="tRow" key={product._id}>
                             <td className="id">{product._id}</td>
                             <td className="else name">{product.name}</td>
                             <td className="else price">{product.price}</td>
                             <td className="else category">{product.category}</td>
                             <td className="else brand">{product.brand}</td>
                             <td className="else button">
                                 <Button onClick={() => modal(product)}>Edit</Button>
                                 <Button onClick={() => deleteProduct(product)}>Delete</Button>
                             </td>
                         </tr>
                        ))}
                    </tbody>
                </table>
            </ProductList>
        </Content>
    )
}

export default ListOfProducts
