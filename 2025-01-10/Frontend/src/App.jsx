import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Items from './components/Items.jsx'
import List from './components/sarasas.js'
import Image from './components/Image.jsx'
import Text from './components/Text.jsx'
import Button from './components/Button.jsx'
import Admin from './components/Admin.jsx'

function App() {
  const [items, setItems] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const [shipping_cost, set_shipping_cost] = useState();

  const show_cart = () => setCartVisible(true);
  const back_shopping = () => setCartVisible(false);

  const add_to_cart = (id) => {
    const produktas = List[id - 1];
    const name = produktas.title;
    const price = (produktas.price * ((100 - produktas.discountPercentage) / 100)).toFixed(2);
    const image = produktas.thumbnail;
    const category = produktas.category;

    const index = items.findIndex((value) => value.name === name);
    if (index !== -1) {
      const updatedItems = [...items];
      updatedItems[index].count++;
      setItems(updatedItems);
    } else {
      setItems([...items,{ name, price, image, category, count: 1 }, ]);
    }

    show_cart();
  };

  const remove_item = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const update_item_count = (index, newCount) => {
    if (newCount < 1) return; 
    const updatedItems = [...items];
    updatedItems[index].count = newCount;
    setItems(updatedItems);
  };

  const handle_shipping = (e) => {
    set_shipping_cost(parseFloat(e.target.value))
  }

  return (
    <div className="container">
      <Link to={"/admin"}>Administratoriaus skiltis</Link>
      {isCartVisible ? (
        <div className="cart">
          <button onClick={back_shopping}>Back to Shopping</button>
          <div className="left">
            <div className="top">
              <h2>Shopping Cart</h2>
              <p>{items.length} items</p>
            </div>
            <div className="cart">
              {items.map((item, index) => (
                <div className="row" key={index}>
                  <Items
                    img={item.image}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                    count={item.count}
                    onUpdateCount={(newCount) => update_item_count(index, newCount)}
                  />
                  <button
                    className="remove"
                    onClick={() => remove_item(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <h2>Summary</h2>
            <div className="shipping">
              <h4>Shipping</h4>
              <select name="" id="dropdown" onChange={handle_shipping}>
                <option value="5">Standard $5</option>
                <option value="7">Better $7</option>
                <option value="10">The Best $10</option>
              </select>
            </div>
            <div className="code">
              <h4>Give Code</h4>
              <input type="text" />
            </div>
            <div className="total">
              <h4>Total Price</h4>
              <h4>
                ${items.reduce((total, item) => total + shipping_cost + item.count * parseFloat(item.price), 0).toFixed(2)}
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <>
          <button onClick={show_cart}>Shopping Cart</button>
          {List.map((product, index) => (
            <div key={index}>
              <div className="card_ d-flex">
                <Image thumbnail={product.thumbnail} discount={product.discountPercentage} />
                <Text title={product.title} desc={product.description} rating={product.rating} />
                <Button
                  price={product.price}
                  discount={product.discountPercentage}
                  add_to_cart={add_to_cart}
                  id={product.id}
                />
              </div>
              <hr />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
