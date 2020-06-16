import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

const Cart = () => {
    const { cart } = useContext(GlobalContext)
    return (
        <div>
            {cart.length === 0 ? (<div>Cart Empty</div>) : (<div>{cart}</div>)}
        </div>
    )
}

export default Cart
