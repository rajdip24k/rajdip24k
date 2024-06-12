import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const { resData } = props;
    // console.log("listOfRestaurants",listOfRestaurants.info);
    // Below we have destructure the code resData.data=cloudinaryImageId,name,cuisines......
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla} = resData.info;

    // console.log("name",name)
    return(
        <div className="res-card" style={{backgroundColor:'#f0f0f0'}}>
        <img alt="biryani" className="res-log" src={CDN_URL + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        </div>
    )
}
export default RestaurantCard;