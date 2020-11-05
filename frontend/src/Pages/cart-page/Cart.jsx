import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { addToCartStart, removeFromCartStart } from '../../Redux/features/cart/cart_redux'
import {ReactComponent as TrashCan} from '../../assets/trash-can.svg'
import { CartItemsContainer, CheckoutContainer, Container, ProductInfoContainer, Img, QtyContainer, NamePriceContainer, TrashCanContainer, TotalContainer, Button, Info } from './cart_style'

const Cart = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {cartItems} = useSelector(state => state.cart);
    const {id} = useParams();
    const qty = location ? Number(location.search.split('=')[1]) : 1;
    const removeFromCart = (productId) => {
      dispatch(removeFromCartStart(productId))
    }
    useEffect(() => {
         dispatch(addToCartStart({id, qty}))
    }, [])
    const checkoutHandler = () => {
      navigate("/signin?redirect=shipping")
    }
    return (
      <Container>
        <h3 className="cartTitle">Shopping Cart</h3>
        {
          cartItems === undefined ? <div>Cart is Empty</div> : 
            <Info>
          {
          cartItems.map(item => {
            const {id, name, image, price, qty} = item
            return(
              <CartItemsContainer key={id}>
                <ProductInfoContainer>
                  <Img src={image}/>
                  <NamePriceContainer>
                    <h3>{name}</h3> 
                    <p>Price: ${price}</p>
                  </NamePriceContainer>
                  <QtyContainer>
                    <p>Qty: </p>
                      <select value={qty} onChange={e =>{
                          const qty = e.target.value
                          dispatch(addToCartStart({id, qty}))
                          }  
                        } className="selectSt">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                  </QtyContainer>

                  <TrashCanContainer onClick={() => removeFromCart(id)}>
                    <TrashCan/>
                  </TrashCanContainer>
                </ProductInfoContainer>
              </CartItemsContainer>
            )
            
          })
        }
        </Info>
        }
        
        
        
        <CheckoutContainer>
          <TotalContainer>
            <div className="total">
              <h4>
                Total Items: 
              </h4>
              <p>
                {cartItems.reduce((a, c) => a + c.qty, 0) }
              </p>
            </div>

            <div className="total">
               <h4>Total: </h4>
              <p>${cartItems.reduce((a, c) => a + (Number(c.price) * c.qty), 1)}</p>
            </div>
          </TotalContainer>
         <Button onClick={checkoutHandler} type="submit" disabled={cartItems.length === 0}>CheckOut</Button>
        </CheckoutContainer>
      </Container>
    )
}

export default Cart
