// import React from "react";
import React,{useState} from "react"

function Item({ name, category }) {
  const [isinCart,setIsInCart]=useState(false)
  function addCart(){
    setIsInCart((isinCart)=>!isinCart)
  }
  return (
    <li className={isinCart?"inCart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isinCart?"remove":"add"} onClick={addCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
