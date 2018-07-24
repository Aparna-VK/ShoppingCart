import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";


/* List of products */
const products = [
  { id: 1, name: "DELL laptop", price: 9500. ,count:0},
  { id: 2, name: "ASUS Laptop", price: 9360. ,count:0},
  { id: 3, name: "HP Laptop", price: 8956. ,count:0},
  { id: 4, name: "LENOVO", price: 7878. ,count:0},
  { id: 5, name: "ACER", price: 7678.,count:0 },
  { id: 6, name: "TOSHIBA", price: 9787.,count:0 }
];
 
//flag
var inCart=false;
var totalPrice=0;
var totalCount=0;

/*array carrying cart items */
const cart=[];

//pages
const pages={
  cartList:"cartList",
  productList:"productList"
};


let currentPage=pages.productList;

/*Render function */
const renderApp = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

/*Fuction to add items to the cart */
const addToCart = productId => {
  const [product] = products.filter(({ id }) => productId === id);
  product.count++;
  totalCount++;
  totalPrice+=product.price;
  if(product.count===1)
      cart.push(product);
  renderApp();
};

/*Function go to cart */
const goToCart = () => {
  currentPage = pages.cartList;
  renderApp();
};

/*Add to cart button compenents */
const AddToCartButton = ({ message, onClick }) => (
  <button className="addToCartButton" onClick={onClick}>
    {message}
  </button>
);

/*Product components */
const Product = ({ id, name, price,count, inCart=false}) => (

  <tr> 

    <td>{name}</td>
    <td>{price}/- </td>
    <td>{count} </td>
    <td>{!inCart &&(   <AddToCartButton
          message="Add"
          onClick={addToCart.bind(null, id)}/>       
          )}</td>

</tr>
);

/*Product list components */
const ProductList = () => (
  <React.Fragment>shoppingcartnoreservation
   
    <h2>SHOPPING CART</h2>
    <table>
    <tr>
          <th>PRODUCT NAME</th>
          <th>PRIZE</th>
          <th>NUMBER OF ITEMS</th>
        </tr>
    {products.map(product => <Product key={product.id} {...product} />)}
    </table>
  </React.Fragment>
);

/*CartList components */
const CartList = () =>(
  <React.Fragment>
      <h2>CART LIST</h2>
      <div id="ListProducts">
      <table>
        <tr>
        <th>PRODUCT NAME</th>
          <th>PRIZE</th>
          <th>NUMBER OF ITEMS</th>
        </tr>
      {cart.map(product => <Product key={product.id} {...product} inCart={true} />)}
      </table>
      </div>
      <span>Total={totalPrice}/-</span>
  </React.Fragment>
);

/*Root react component App */
const App = () => (
  <div >
    <img src=""></img>
    <button className="goToCart" onClick={goToCart}>
       {`Cart(${totalCount})`}
    </button>
   {currentPage===pages.productList?<ProductList/>:<CartList/>}
  </div>
);

/*Function to render components */
renderApp();
export default App;
