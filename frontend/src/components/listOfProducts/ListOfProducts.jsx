import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Content, ProductHeader, ProductList, Button} from './listOfProducts_style'

const ListOfProducts = ({modal, deleteProduct}) => {
    const {data} = useSelector(state => state.fetchCars)
    return (
        <Content>
            <ProductList>
                <table>
                    <thead>
                        <tr className="tRow">
                            <th className="id">ID</th>
                            <th className="else">Name</th>
                            <th className="else">Price $</th>
                            <th className="else">Category</th>
                            <th className="else">Brand</th>
                            <th className="else">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(product => (
                            <tr  className="tRow" key={product._id}>
                             <td className="id">{product._id}</td>
                             <td className="else">{product.name}</td>
                             <td className="else">{product.price}</td>
                             <td className="else">{product.category}</td>
                             <td className="else">{product.brand}</td>
                             <td className="else">
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
