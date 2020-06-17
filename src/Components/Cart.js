import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

const Cart = () => {
    const { cart, removeFromCart } = useContext(GlobalContext)
    console.log(cart)
    return (
        <div>
            {cart.length === 0 ? (<div className="empty">Cart Empty, maybe start adding some items :)</div>) : cart.map((item, i) =>
                <div className="cart-info" key={i}>
                    <div className="container row v-center">
                        <div>
                            <h4>Item Image</h4>
                            <img src={require(`../images/${item.image}.jpg`)} style={{ width: '60px' }} alt="cartImage" />
                        </div>
                        <div>
                            <h4>Item Name</h4>
                            <span className="title">{item.name}</span>
                        </div>
                        <div>
                            <h4>Price</h4>
                            <span>Rs.{item.price}</span>
                        </div>
                        <button onClick={() => { removeFromCart(item.id) }} >delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
