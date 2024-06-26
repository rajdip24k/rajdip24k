import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";

function RestCategory({ c, showItem,setShowItem,notsetShowItem }) {
  // const [showHandler, setShowHandler] = useState(false);
  console.log("Rest Category", c);

  const clickhandler = () => {
    console.log("clicked !")
   
    // setShowHandler(!showHandler);
    // if(showItem){
     setShowItem();
    //  notsetShowItem();
    // }
    // else{
    //   return notsetShowItem();
    // }
  };

  return (
    <div>
    <div className="w-6/12 mx-auto my-4 bg-green-100 shadow-lg p-4">
      
      {/* <h1>Category of RestCategory</h1> */}
      <div className="font-bold text-lg flex justify-between" onClick={clickhandler}>
      <span  >
        {c.card.card.title}-({c.card.card.itemCards.length})
      </span>
      <span>⬇</span>
      </div>

      {/* <h1>Its description and name</h1> */}
      {/* <div>
                <p>{c.card.card.itemCards.map(des=>{
                    console.log("des",des)
                  return(
                    <div> 
                        {showHandler && 
                        <div className='border border-gray-300'>
                        <img src={CDN_URL+des.card.info.imageId} className='w-28 border rounded-md'/>
                        <span className='font-bold' >{des.card.info.name}- 
                        ₹{des.card.info.price/100 || des.card.info.finalPrice/100 ||
                         des.card.info.defaultPrice/100}</span>
                        <p>{des.card.info.description}</p>
                        </div>
                        }
                    </div>
                  )
                })}</p>
            </div> */}
      {showItem && <ItemList itemss={c.card.card.itemCards} />}
    </div>
    </div>
  );
}

export default RestCategory;
