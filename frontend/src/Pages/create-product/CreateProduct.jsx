import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from "react-router-dom"
import ListOfProducts from '../../components/listOfProducts/ListOfProducts'
import { productSaveRequest } from '../../Redux/features/product/createProductslice'
import { fetchStart } from '../../Redux/features/fetchCarsProducts/fetchCars'
import { Form, FormContainer, Container, Header } from './createProduct_style'
import { productDeleteRequest } from '../../Redux/features/product/deleteProductSlice'
import PrimaryButton from '../../components/primary-button/PrimaryButton'
import Button from '../../components/button/Button'


const CreateProduct = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch()
    const {data} = useSelector(state => state.fetchCars)
    const { loading, successSave, error } = useSelector(state => state.productSave);
    const {loadingToDelete, successDelete, errorFromDeletion} = useSelector(state => state.productDelete)

    useEffect(()=> {
        if(successSave){
            setModalVisible(false)
        }
       dispatch(fetchStart())
    }, [successSave, successDelete])

    const openModal = product => {
        setModalVisible(!modalVisible)
        setId(product._id)
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(productSaveRequest({name, price, image, brand, category, countInStock, description, _id: id}));
    }
    const deleteHandler = (product) => {
        dispatch(productDeleteRequest(product));
    }
    return (
        <Container>
            <Header>
                <h3>Products</h3>
                <PrimaryButton type="button" onclick={() => openModal({})} className="mg"> {modalVisible === false ? 'Create Product' : 'Close'}</PrimaryButton>
            </Header>
            

            {
            modalVisible && 
                
            <Form height="500px" onSubmit={submitHandler}>
                <FormContainer>
                    <li>
                        <h2>Create Product</h2>
                        {loading && <p>Loading...</p>}
                        {error && <p>{error}</p>}
                    </li>

                    <li>
                        <input type="text" value={name} name="name" placeholder="Name of product" id="name" onChange={e => setName(e.target.value)}></input>  
                    </li>
                    <li>
                        <input type="text" value={price} id="price" placeholder="Price of product" name="price" onChange={e => {setPrice(e.target.value)}}></input>
                    </li>
                    <li>
                        <input type="text" value={image} id="image" placeholder="image" name="image" onChange={e => {setImage(e.target.value)}}></input>
                    </li>
                    <li>
                        <input type="text" value={brand} id="brand" placeholder="Brand" name="brand" onChange={e => {setBrand(e.target.value)}}></input>
                    </li>
                    <li>
                        <input type="text" value={category} id="category" placeholder="Category" name="category" onChange={e => {setCategory(e.target.value)}}></input>
                    </li>
                    <li>
                        <input type="text" value={countInStock} id="countInStock" placeholder="Count in stock" name="countInStock" onChange={e => {setCountInStock(e.target.value)}}></input>
                    </li>
                    <li>
                        <textarea id="description" value={description} placeholder="Description" name="description" onChange={e => {setDescription(e.target.value)}}></textarea>
                    </li>

                    <li>
                        <Button fontsize='12px' type="submit">{ id ? 'Update' : 'Create' }</Button>
                    </li>
                </FormContainer>
            </Form>
            }
            <ListOfProducts modal={openModal} deleteProduct={deleteHandler}></ListOfProducts>
        </Container>
    )
}

export default CreateProduct