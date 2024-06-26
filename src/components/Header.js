import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnelineStatus";
import UserContext from "../utils/userContext";
// import userContext from "../utils/UserContext";
// import UserContext from "../utils/UserContext";
// import ReactDOM from "react-dom/client";


export const Header =()=>{

const [btnNameReact,setBtnNameReact] = useState("login");
const [count, setCount] = useState(0);
const onlinestatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);

console.log("Header render");

useEffect(()=>{
    console.log("UseEffect called");
})

    return(
      <div className="header flex justify-between bg-pink-100 dark:bg-slate-800 shadow-lg mb-2 sm:bg-green-950 lg:bg-green-100">
       <div className="logo-container">
        <img className="logo w-28" src={LOGO_URL}/>
       </div>
       <div className="nav-ittms flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2"> Status : {onlinestatus ? '🟢' : '🔴'}</li>
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/groccery">Groccery</Link></li>
          <li className="px-2"><Link to="/about">About Us</Link></li>
          <li className="px-2"><Link to="/contact">Contact </Link></li>
          <li className="px-2"><Link to="/cart">Cart</Link></li>

          {
           <button className="login" onClick={()=>{btnNameReact == "login" ? setBtnNameReact("Logout") : 
          setBtnNameReact("login")}}>{btnNameReact}</button>
          }
        &nbsp;
        <p>{count}</p>
        <button className="login" onClick={()=>setCount(count+1)}>Submit</button>
        <div className="text-lg font-bold">{loggedInUser}</div>
        </ul>
       </div>
      </div>
    )
}
// export default Header;