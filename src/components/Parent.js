
import React,{useState} from "react";
import Child from "./Child";

const Parent = () => {
    const [cartItem, setCartItem] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    let handleSubmit = () => {
        console.log("clicked", name, price)
        setCartItem([...cartItem, {
            itemName : name,
            itemPrice : price
        }])
        console.log(cartItem)
    }

    return (
    <div className="parent">
        <h1>Parent Component</h1>
        <label htmlFor="itemName">Item Name:</label>
        <input type="text" id="itemName" onChange={(e) => setName(e.target.value)} value={name} />

        <label htmlFor="itemPrice">Item Price:</label>
        <input type="number" id="itemPrice" onChange={(e) => setPrice(e.target.value)} value={price} />
        
        <button onClick={() => handleSubmit()}>Add Item</button>

        <Child itemList={cartItem} setItemList={setCartItem} />
    </div>
  )
}

export default Parent
