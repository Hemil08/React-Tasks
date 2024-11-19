
import './App.css';
import {useState} from 'react'

function App() {

  const [cartItems,setCartItems] = useState([])

  const availableItems = ['Apple','Orange','Banana','Graps','Pineapple'];

  const addItem = (item) => {
    setCartItems([...cartItems,item]);
  } 

  const removeItem = (itemToRemove) => {
    const indexToRemove = cartItems.indexOf(itemToRemove);
    if(indexToRemove !== -1){
      setCartItems(cartItems.filter((_,index) => index !== indexToRemove));
    }
  };

  return (

    <div class="main">
      
      <h1>Shopping Cart</h1>

      <div className="headerSection">

        <h3>Available Items:</h3>

        { availableItems.map((item,index) => (
            <button
              class="availableItemButton"
              key={index}
              onClick = { () => addItem(item)}
            >
              Add{item}
            </button>
          ))
        }
      </div>
      
      <div class="cartSection">

        <h3>Cart Items:</h3>

        {cartItems.length === 0 ?(<p>Your cart is empty.</p>):
        (
          <ul>
            {cartItems.map((item,index) =>
              <li 
                key={index}>
                  {item} {' '}
                  <button onClick={()=> removeItem(item)}>
                    Remove
                  </button>
                </li>
            )}
          </ul>
        )
        } 
      </div>

    </div>
  );
}

export default App;
