import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const { resData } = props;
    console.log("resData<<<<<<<<>>>>>>>>>>",resData);
    // console.log("listOfRestaurants",listOfRestaurants.info);
    // Below we have destructure the code resData.data=cloudinaryImageId,name,cuisines......
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla} = resData.info;

    // console.log("name",name)
    return(
        <div className="res-card m-4 p-4 w-[235px] rounded-lg bg-gray-100 hover:bg-green-100" data-testid="restCard">
        <img alt="biryani" className="res-log rounded-lg" src={CDN_URL + cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        </div>
    )
}
export default RestaurantCard;

// Above 1 is a Actual/original compo below we are only enhancing 
// Below compo returns a new compo with promoted/enhancing label on it
export const withpromotedLabel =(RestaurantCard)=>{
// Below return(props)=>{ this is nothing but a returning a new component with promoted/enhancing lable on it
// and returning under the body compo using ternary operator
// We rec eive a data with the prop and we are accssing under the new compo
// and same data into our  <RestaurantCard {...props}/> 
// by desturcturing we are passing our all the data as prop
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white border rounded-lg m-2 p-2">₹350 for two</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
