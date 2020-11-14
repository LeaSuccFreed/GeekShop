import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userOrderListRequest } from '../../Redux/features/order/userOrderListSlice'

import {Container, Table} from './orderHistory_style'

const OrderHistory = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

     const {loading, error, orders} = useSelector(state => state.userOrderList)

     useEffect(() => {
         dispatch(userOrderListRequest())
     }, [dispatch])
    return (
        <Container>
            <h3>Order History</h3>
            {
            loading ? <div>...Loading</div> : 
            error ? <div>{error}</div> : 
            (
                <Table>
                    <thead>
                        <tr className="tr">
                            <th className="th-item id">ID</th>
                            <th className="th-item">DATE</th>
                            <th className="th-item">TOTAL</th>
                            <th className="th-item">PAID</th>
                            <th className="th-item">DELIVERED</th>
                            <th className="th-item">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => {
                            return(
                                <tr className="tr" key={order._id}>
                                    <td className="td-item id">{order._id}</td>
                                    <td className="td-item">{order.createdAt.substring(0, 10)}</td>
                                    <td className="td-item">{order.totalPrice}</td>
                                    <td className="td-item">{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                    <td className="td-item">{order.isDelivered ? order.DeliveredAt.substring(0, 10) : 'No'}</td>
                                    <td>
                                        <button type="button" onClick={() => {navigate(`/order/${order._id}`)}}>Details</button>
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

export default OrderHistory
