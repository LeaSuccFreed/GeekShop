import {createSelector} from 'reselect'

const orderListSelector = state => state.ordersList
const userOrderListSelector = state => state.userOrderList

export const orderListSelect = createSelector(
    orderListSelector,
    orderList => orderList
)

export const userOrderListSelect = createSelector(
    userOrderListSelector,
    userOrderList => userOrderList
)