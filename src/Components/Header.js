import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const Header = () => {
    useEffect(() => {
        gsap.to("body", 0, { css: { visibility: "visible" } });
        const tl = gsap.timeline()

        tl.from('.header', 1.8, {
            y: -200,
            ease: 'power4.out',
            stagger: {
                amount: 0.3
            }
        })
        tl.from('.link', 1.4, {
            x: 280,
            ease: 'Power3.easeOut',
            stagger: {
                amount: 0.3
            },
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
