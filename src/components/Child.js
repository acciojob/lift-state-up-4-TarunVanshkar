
import React from "react";

const Child = ({itemList, setItemList}) => {
    const handleRemove = (id) => {
        let i = 0;
        let tempItemList = [];
        itemList.map((item, index) => {
            if(index !== id){
                tempItemList.push(item)
            }
            i++;
        })
        setItemList(tempItemList)
    }
  return (
    <div className="child">
        <h2>Child Component</h2>
        
        <ul>
            {
                itemList.map((item, index) => {
                    return <li key={index}>
                        {item.itemName} - ${item.itemPrice} <button onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Child