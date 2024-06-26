import React, { useEffect, useState } from "react";
import { Menu_URL } from "./constants";

const useRestMenu =(resId)=>{
   const [restMenu, setRestMenu] = useState(null);
 
   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData =async ()=>{
    const data = await fetch(Menu_URL+resId);
    const json = await data.json();
    console.log("json-Menuuuu",json)
    setRestMenu(json.data);
   }

   return restMenu;

}
export default useRestMenu;