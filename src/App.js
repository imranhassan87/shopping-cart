import React from 'react';
import './styles/app.scss';
import Header from './Components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Contact from './Components/Contact';


function App() {

  return (
    <div>
      <Router>
        <Header />
        <Route path='/' exact component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route path='/contact' exact component={Contact} />
      </Router>
    </div>

  );
}

export default App;
