import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnelineStatus";
// import ReactDOM from "react-dom/client";


export const Header =()=>{

const [btnNameReact,setBtnNameReact] = useState("login");
const [count, setCount] = useState(0);
const onlinestatus = useOnlineStatus();

console.log("Header render");

useEffect(()=>{
    console.log("UseEffect called");
})

    return(
      <div className="header">
       <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
       </div>
       <div className="nav-ittms">
        <ul>
          <li> Status : {onlinestatus ? '🟢' : '🔴'}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/groccery">Groccery</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>

          {
           <button className="login" onClick={()=>{btnNameReact == "login" ? setBtnNameReact("Logout") : 
          setBtnNameReact("login")}}>{btnNameReact}</button>
          }
        &nbsp;
        <p>{count}</p>
        <button className="login" onClick={()=>setCount(count+1)}>Submit</button>
        </ul>
       </div>
      </div>
    )
}
// export default Header;