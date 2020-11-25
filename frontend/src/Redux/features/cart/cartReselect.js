import {createSelector} from 'reselect'

const cartSelector = state => state.cart

 export const selectCart = createSelector(
    cartSelector,
    cart => cart
)