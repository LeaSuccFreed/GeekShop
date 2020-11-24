import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import { orderDeleteRequest, orderDeleteReset } from '../../Redux/features/order/orderDeleteSlice'
import { orderListRequest } from '../../Redux/features/order/orderListSlice'
import { Container, Table } from './oder-list_style'

const OrderList = () => {
    const dispatch = useDispatch()
    const {orders, loading, error} = useSelector(state => state.ordersList)
    const {error: errorDelete, success: successDelete, loading: loadingDelete} = useSelector(state => state.orderDelete)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(orderDeleteReset())
        dispatch(orderListRequest())
    },[dispatch, successDelete])

    const deleteHandler = (order) => {
        if(window.confirm('Are you sure you want to delete?')){
            dispatch(orderDeleteRequest(order._id))
        }
    }

    return (
        <Container>
            <h2 className="title">Orders</h2>
            {loadingDelete && <Loading/>}
            {errorDelete && <p>{errorDelete}</p>}
            {
            loading ? <Loading/> : 
            error ? <div>{error}</div> : 
            (
                <Table>
                    <thead>
                        <tr className="tr-p">
                            <th className="th-item tr-c id">ID</th>
                            <th className="th-item tr-c name">USER</th>
                            <th className="th-item tr-c date">DATE</th>
                            <th className="th-item tr-c total">TOTAL</th>
                            <th className="th-item tr-c paid">PAID</th>
                            <th className="th-item tr-c delivered">DELIVERED</th>
                            <th className="th-item tr-c actions">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => {
                            return(
                                <tr className="tr-p" key={order._id}>
                                    <td className="td-item tr-c id">{order._id}</td>
                                    <td className="td-item tr-c name">{order.user.name}</td>
                                    <td className="td-item tr-c date">{order.createdAt.substring(0, 10)}</td>
                                    <td className="td-item tr-c total">{order.totalPrice}</td>
                                    <td className="td-item tr-c paid">{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                    <td className="td-item tr-c delivered">{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}</td>
                                    <td>
                                        <button type="button" onClick={() => {navigate(`/order/${order._id}`, {replace: true})}}>Details</button>
                                        <button type="button" onClick={() => deleteHandler(order)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            )
        }
    </Container>
    )
}

export default OrderList
