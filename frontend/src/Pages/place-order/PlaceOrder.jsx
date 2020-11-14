import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ProductInfoContainer, Img, QtyContainer, NamePriceContainer, 
         TotalContainer, Button} from '../cart-page/cart_style'
import {PlaceOrderContainer, PlaceOrderInfo, PlaceOrderAction, Container} from './place-order_style'
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps'
import { createOrderRequest, createOrderReset } from '../../Redux/features/order/orderSlice'


const PlaceOrder = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart);
    const {order, loadingOrder, errorOrder, orderSuccess} = useSelector(state => state.orderCreate);
    const {userInfo} = useSelector(state => state.signin)
    const {shipping, payment:{paymentMethod}, cartItems} = cart
    
    const toPrice = (num) => Number(num.toFixed(2));
    const itemsPrice = toPrice(cartItems.reduce((a, c) => a + c.price * c.qty, 0))
    const shippingPrice = itemsPrice >= 100 ? toPrice(0) : toPrice(5)
    const taxPrice = toPrice( 0.15 * itemsPrice )
    const totalPrice = itemsPrice + shippingPrice + taxPrice

    if(!shipping.address){
      navigate('/shipping', {replace: true})
    }
    if(!paymentMethod){
      navigate('/payment', {replace: true})
    }
    const placeOrderhandler = () => {
      dispatch(createOrderRequest( {orderItems: cartItems, shipping, paymentMethod, itemsPrice, shippingPrice, taxPrice, totalPrice}))
    }

    useEffect(() => {
      if(orderSuccess){
        navigate(`/order/${order._id}`, {replace: true})
        dispatch(createOrderReset())
      }
    }, [order,orderSuccess])

    return (
      <Container>

            <PlaceOrderContainer> 
              <CheckoutSteps step1 step2 step3 step4 />

              <PlaceOrderInfo>
                                  <div>
                                    <h3>Shipping</h3>
                                    <p><strong>Name:</strong> {shipping.fullName} </p>
                                    <p><strong>Email:</strong> {userInfo.email}</p>
                                    <p><strong>Address:</strong> {shipping.address}, {shipping.city}, {shipping.postalCode}, {shipping.country}</p>
                                    <p></p>
                                  </div>
                                  <div>
                                    <h3>Payment</h3>
                                    <div>
                                     <strong>Payment Method:</strong> {paymentMethod}
                                    </div>
                                  </div>
                </PlaceOrderInfo>
                <h3>Products: </h3>
              {
              cartItems.map(item => {
                const {id, name, image, price, qty} = item
                return(
                
                <ProductInfoContainer>  
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
          </TotalContainer>
         <Button onClick={placeOrderhandler} type="submit" disabled={cartItems.length === 0}>Place Order</Button>
        </PlaceOrderAction>

        {loadingOrder && <p>...Loading</p>  }
        {errorOrder && <div>{errorOrder}</div>}
      </Container>
    )
}

export default PlaceOrder