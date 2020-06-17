import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap, { Power2, Back } from 'gsap'

const Header = () => {
    useEffect(() => {
        gsap.to("body", 0, { css: { visibility: "visible" } });
        const tl = gsap.timeline()

        tl.from('.link', 1.2, {
            x: 300,
            ease: 'Power3.easeOut',
            stagger: {
                amount: 0.3
            },
        })
        tl.from('.line', 0.9, {
            opacity: 0,
            y: 70,
            ease: Back.easeOut,
            stagger: 0.3
        })

        tl.from('.card', 0.3, {
            autoAlpha: 0,
            opacity: 0,
            ease: Power2.easeInOut,
        })
    }, [])
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
