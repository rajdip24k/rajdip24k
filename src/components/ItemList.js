import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
function ItemList({ itemss }) {
  console.log("itemss", itemss);

  const dispatch = useDispatch();

  const handleAddbtn =(des)=>{
    dispatch(addItem(des)); 
    // Above one with we are using API data
    // dispatch(addItem("Tarri Poha Pohaa"))
    // We are dispaching this payload to cart : []
  }


  return (
    <div>
      {/* <h1>HHHH</h1> */}
      <div>
        {itemss.map((des) => {
          console.log("des", des);
          return (
            <div>
              <div className="border-y-2 border-slate-500 py-1">
                <div className="">
                  <span className="font-bold text-left">
                    {des.card.info.name}
                  </span>
                  <span className="font-bold">
                    - ₹
                    {des.card.info.price / 100 ||
                      des.card.info.finalPrice / 100 ||
                      des.card.info.defaultPrice / 100}
                  </span>
                  <p>{des.card.info.description}</p>
                </div>

                <div className="absolute">
                  <button className="bg-white text-black" onClick={()=>handleAddbtn(des)}>Add +</button>
                </div>
                <img
                  src={CDN_URL + des.card.info.imageId}
                  className="w-32 border rounded-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
