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
                        <Link className="link" to='/'>Home</Link>
                        <Link className="link" to='/cart'>Cart</Link>
                        <Link className="link" to='/contact'>Contact</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
