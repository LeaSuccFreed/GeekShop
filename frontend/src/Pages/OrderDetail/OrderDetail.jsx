import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import {PayPalButton} from 'react-paypal-button-v2'
import Button from '../../components/button/Button'
import { ProductInfoContainer, Img, QtyContainer, NamePriceContainer} from '../cart-page/cart_style'
import {PlaceOrderContainer, PlaceOrderInfo, PlaceOrderAction, Container, TotalContainer} from './order-detail.style'
import { detailOrderRequest } from '../../Redux/features/order/orderDetailSlice'
import {orderPayRequest, orderPayReset} from '../../Redux/features/order/orderPaySlice'
import Axios from 'axios'
import { orderDeliverRequest, orderDeliverReset } from '../../Redux/features/order/orderDeliverSlice'
import Loading from '../../components/loading/Loading'

const OrderDetail = () => {
    // const navigate = useNavigate();
    const [sdkReady, setSdkReady] = useState(false)
    const dispatch = useDispatch();
    const {id} = useParams();
    const { order, loading, error } = useSelector(state => state.orderDetails)
    const {error: errorPay, success: successPay, loading: loadingPay} = useSelector(state => state.orderPay)
    const {loading: deliverLoading, success: deliverSuccess, error: deliverError} = useSelector(state => state.orderDeliver)
    const {userInfo} = useSelector(state => state.signin)

    const{shipping, paymentMethod, orderItems, itemsPrice, shippingPrice, taxPrice, totalPrice, isPaid, deliveredAt, isDelivered, paidAt} = order;
    

    useEffect(() => {
        const addPayPal = async () => {
          const { data } = await Axios.get('/api/config/paypal');
          const script = document.createElement('script');
          script.type="text/javascript";
          script.src=`https://www.paypal.com/sdk/js?client-id=${data}`;
          script.async = true;
          script.onload = () => {
            setSdkReady(true);
          }
          document.body.appendChild(script)
        }

        if(!order || successPay || deliverSuccess || (order && order._id !== id)){
          dispatch(orderPayReset())
          dispatch(orderDeliverReset())
          dispatch(detailOrderRequest(id))
        } else{
          if(!isPaid){
            if(!window.paypal){
              addPayPal();
            } else{
              setSdkReady(true);
            }
          }
        }
        
	}, [dispatch, order, id, sdkReady, successPay, deliverSuccess])

	const successPaymentHandler = (paymentResult) => {
    dispatch(orderPayRequest({order, paymentResult}))
  }
  
  const deliverHandler = () => {
    dispatch(orderDeliverRequest(order._id))
  }

    return (
      <Container>
        {
          loading ? <Loading /> :
          error ? <div>{error}</div> :
            <PlaceOrderContainer> 
              <h1 className="orderId forMargin">Order: {order._id}</h1>
              <PlaceOrderInfo>
                                  <div className="forMargin">
                                    <h3>Shipping</h3>
                                    <p><strong>Name:</strong> {shipping.fullName} </p>
                                    <p><strong>Address:</strong> {shipping.address}, <br/> {shipping.city}, {shipping.postalCode}, {shipping.country}</p>
                                    {isDelivered ? <p>Delivered at {deliveredAt}</p> : <p>Not Delivered</p>}
                                  </div>
                                  <div className="forMargin">
                                    <h3>Payment</h3>
                                    <div>
                                      <strong>Payment Method:</strong> {paymentMethod}
                                      {isPaid ? <p>Paid at {paidAt}</p> : <p>Not Paid</p>}
                                    </div>
                                  </div>
                </PlaceOrderInfo>
                <h3 className="forMargin">Products: </h3>
              {
              orderItems.map(item => {
                const {id, name, image, price, qty} = item
                return(
                  <ProductInfoContainer className="productInfo" key={id}>  
                  <Img src={image}/>
                  <NamePriceContainer>
                    <h3>{name}</h3> 
                    <p>Price: ${price}</p>
                  </NamePriceContainer>
                  <QtyContainer>
                      <p>Qty: {qty}</p>
                  </QtyContainer>
                  </ProductInfoContainer>
                )
                
              })
            }
        </PlaceOrderContainer>
        }
        
        
        
        <PlaceOrderAction>
          <TotalContainer>
          <ul>
              <li>
                <h3>Order Summary</h3>
              </li>
              <li>
                <div className="task"> <strong>Items:</strong> </div>
                <div className="inf">${itemsPrice}</div>
              </li>
              <li>
                <div className="task"> <strong>Shipping:</strong> </div>
                <div className="inf">${shippingPrice}</div>
              </li>
              <li>
                <div className="task"> <strong>Tax:</strong> </div>
                <div className="inf">${taxPrice}</div>
              </li>
              <li>
                <div className="task"> <strong>Order total:</strong> </div>
                <div className="inf">${totalPrice}</div>
              </li>
            </ul>

			{!isPaid && (
				<div>

          {errorPay && <p>{errorPay}</p>}
          {loadingPay && <p>...Loading</p>} 

					{!sdkReady ? <Loading /> : 
						<PayPalButton amount={ totalPrice } onSuccess={successPaymentHandler}></PayPalButton>
					}
          <p>To make your payment possible use <br/>email: <strong>sb-d9acu3660071@personal.example.com</strong>  <br/>password: <strong>rp39LG^&#62;</strong></p>
				</div>

			) }

      {
        userInfo.isAdmin && order.isPaid && !order.isDelivered && (
          <div>
            {deliverLoading && <p>...Loading</p>}
            {deliverError && <p>{deliverError}</p>}
            <Button type="button"
                    onclick={deliverHandler}>
              Deliver
            </Button>

          </div>


        )
      }

          </TotalContainer>
        </PlaceOrderAction>
      </Container>
    )
}

export default OrderDetail