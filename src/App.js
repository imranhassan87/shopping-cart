import React, { useEffect } from 'react';
import './styles/app.scss';
import gsap from 'gsap'
import Header from './Components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Contact from './Components/Contact';
import IntroOverlay from './Components/IntroOverlay';


function App() {
  useEffect(() => {
    let vw = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vw}px`);
  }, []);

  useEffect(() => {
    //prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });

    //timeline
    const tl = gsap.timeline();

    tl.from(".line span", 1.3, {
      y: 100,
      ease: "power4out",
      delay: 1,
      skewY: 7, //for tilt
      stagger: {
        amount: 0.3, //allows same animation with oher components after this amount of time
      },
    })
      .to(".intro-overlay", 0.9, {
        height: 0,
        ease: "expo.inOut",
      })
      .from("body", 0.1, {
        scale: 1.02,
        ease: "expo.inOut",
      })
  }, []);

  return (
    <div>
      <Router>
        <IntroOverlay />
        <Header />
        <Route path='/' exact component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route path='/contact' exact component={Contact} />
      </Router>
    </div>

  );
}

export default App;
