import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
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
            loading ? <Loading/> : 
            error ? <div>{error}</div> : 
            (
                <Table>
                    <thead>
                        <tr className="tr">
                            <th className="th-item id">ID</th>
                            <th className="th-item date">DATE</th>
                            <th className="th-item total">TOTAL</th>
                            <th className="th-item paid">PAID</th>
                            <th className="th-item delivered">DELIVERED</th>
                            <th className="th-item actions">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => {
                            return(
                                <tr className="tr" key={order._id}>
                                    <td className="td-item id">{order._id}</td>
                                    <td className="td-item date">{order.createdAt.substring(0, 10)}</td>
                                    <td className="td-item total">{order.totalPrice}</td>
                                    <td className="td-item paid">{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                    <td className="td-item delivered">{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}</td>
                                    <td className="actions">
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
