import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

const Cart = () => {
    const { cart, removeFromCart } = useContext(GlobalContext)
    const amount = cart.map(p => p.price)
    const totalAmount = amount.reduce((amt, item) => (amt += item), 0).toFixed(2)
    return (
        <div>
            <div className="amt">
                <span className="total-amt"> <span className="total">Total Amount</span> Rs.{totalAmount}</span>
            </div>
            {cart.length === 0 ? (<div className="empty">Cart Empty, maybe start adding some items :)</div>) : cart.map(item =>
                <div className="cart-info" key={item.id}>
                    <div className="container row v-center">
                        <div>
                            <h4>Item Image</h4>
                            <img src={require(`../images/${item.image}.jpg`)} style={{ width: '60px' }} alt="cartImage" />
                        </div>
                        <div>
                            <h4>Item Name</h4>
                            <span className="title">{item.name}</span>
                        </div>
                        <div className="quantity">
                            <h4>Quantity</h4>
                            <span></span>
                        </div>
                        <div>
                            <h4>Price</h4>
                            <span>Rs.{item.price}</span>
                        </div>
                        <button className="btn-del" onClick={() => { removeFromCart(item.id) }} >Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
