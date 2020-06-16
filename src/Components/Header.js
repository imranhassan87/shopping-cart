import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="header">
            <div className="container row space-between v-center">
                <div className="logo row">
                    <img src={require('../images/download.png')} alt="cart" />
                    <h2>Shopping Cart</h2>
                </div>
                <div className="nav-routes">
                    <ul className="row v-center">
                        <Link to='/'>Home</Link>
                        <Link to='/cart'>Cart</Link>
                        <Link to='/contact'>Contact</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
