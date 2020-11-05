import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import {PayPalButton} from 'react-paypal-button-v2'
import { ProductInfoContainer, Img, QtyContainer, NamePriceContainer, TotalContainer, Button} from '../cart-page/cart_style'
import {PlaceOrderContainer, PlaceOrderInfo, PlaceOrderAction, Container} from './order-detail.style'
import { detailOrderRequest } from '../../Redux/features/order/orderDetailSlice'
import Axios from 'axios'

const OrderDetail = () => {
    // const navigate = useNavigate();
    const [sdkReady, setSdkReady] = useState(false)
    const dispatch = useDispatch();
    const {id} = useParams();
    const { order, loading, error } = useSelector(state => state.orderDetails)

    const{shipping, paymentMethod, orderItems, itemsPrice, shippingPrice, taxPrice, totalPrice, isPaid, deliverAt, isDelivered, paidAt} = order;
    console.log(id)

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

        if(!order._id){
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
        
	}, [order, id, sdkReady])

	const successPaymentHandler = () => {

	}

    return (
      <Container>
        {
          loading ? <div>...Loading</div> :
          error ? <div>{error}</div> :
            <PlaceOrderContainer> 
              <h1>Order: {order._id}</h1>
              <PlaceOrderInfo>
                                  <div>
                                    <h3>Shipping</h3>
                                    <p><strong>Name:</strong> {shipping.fullName} </p>
                                    <p><strong>Address:</strong> {shipping.address}, {shipping.city}, {shipping.postalCode}, {shipping.country}</p>
                                    {isDelivered ? <p>Delivered at {deliverAt}</p> : <p>Not Delivered</p>}
                                  </div>
                                  <div>
                                    <h3>Payment</h3>
                                    <div>
                                      <strong>Payment Method:</strong> {paymentMethod}
                                      {isPaid ? <p>Paid at {paidAt}</p> : <p>Not Paid</p>}
                                    </div>
                                  </div>
                </PlaceOrderInfo>
                <h3>Products: </h3>
              {
              orderItems.map(item => {
                const {id, name, image, price, qty} = item
                return(
                  <ProductInfoContainer key={id}>  
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
                <div>Items</div>
                <div>${itemsPrice}</div>
              </li>
              <li>
                <div>Shipping</div>
                <div>${shippingPrice}</div>
              </li>
              <li>
                <div>Tax</div>
                <div>${taxPrice}</div>
              </li>
              <li>
                <div>Order total</div>
                <div>${totalPrice}</div>
              </li>
            </ul>

			{!isPaid && (
				<div>
					{!sdkReady ? <p>...Loading</p> : 
						<PayPalButton amount={ totalPrice } onSuccess={successPaymentHandler}></PayPalButton>
					}
				</div>
			) }
          </TotalContainer>
        </PlaceOrderAction>
      </Container>
    )
}

export default OrderDetail