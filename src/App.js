import React, {useState, useEffect} from 'react';

import './App.css';
import ShoppingInfo from './components/ShoppingInfo';
import Products from './components/Products';
import Cart from './components/Cart';

const App = () => {

  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }

          for(let i = 0 ; i <data.length; i++){
            data[i]["quantity"] = 0;
          }
          setProducts(data)
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    if(JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [])


  const sortProducts = (method) => {
    const array = products;

    if(method === "Lowest to Highest") {
        array.sort(function(a, b){
          return a.price-b.price
      })
    }
    else if(method === "Highest to Lowest") {
        array.sort(function(a, b){
          return b.price-a.price
      })
    }
    setProducts(array);
  }

  const addToCart = (item) => {
    const productList = [...cart];
    if(!productList.includes(item)) {
      productList.push(item);
    }
    const index = productList.indexOf(item);
    productList[index].quantity++;
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  }

  const changeQuantity = (item, e) => {
    const productList = [...cart];
    const index = productList.indexOf(item);
    if(e === '+') {
      productList[index].quantity++;
    }
    else {
      if(productList[index].quantity >1) {
        productList[index].quantity--;
      }
      else {
        productList[index].quantity = 0;
        productList.splice(index, 1);
      }
    } 
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  }
  
  return (
    <div className="App">
      <ShoppingInfo totalItems={totalItems} sum={sum} />
      <Products products={products} sortProducts={sortProducts} addToCart={addToCart} />
      <Cart products={cart} changeQuantity={changeQuantity} setTotalItems={setTotalItems} sum={sum} setSum={setSum}/>
    </div>
  );
}

export default App;
