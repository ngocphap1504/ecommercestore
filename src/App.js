import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Game from './components/Game';
import Gear from './components/Gear';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/game" component={Game} />
      <Route path="/gear" component={Gear} />
      
      </Switch>
      </BrowserRouter>
    </div>
  </Provider> 
  );
}

export default App;
