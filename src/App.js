import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import PageNotFound from './components/PageNotFound';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/ProductDetails" component={ProductDetails}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
