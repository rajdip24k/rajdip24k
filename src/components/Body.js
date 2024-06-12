import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import useOnlineStatus from "../utils/useOnelineStatus";

export const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filterRestaurant,setFilterRestaurant] = useState([]);
  const [seachText, setSearchText] = useState("");



 

  useEffect(()=>{
     fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("Practicejson",json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    // console.log("GetJSON",json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    // console.log("json",json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // Optional chauining ->Adding the ?
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // filterRestaurant is empty initially that why we have fetch that and update below show on screen with the help of map filterRestaurant
    setFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
//   console.log("Body render");
  // Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //     return <Shimmer/>
  // }
  // Conditional Rendering
//   if(listOfRestaurants.length == 0){
    
//     fetchData();
//   }

const onlineStatus = useOnlineStatus();

if(onlineStatus === false) {
  return (
    <div>
      <h1>Please check your internet connection</h1>
    </div>
  );
}



  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          value={seachText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() =>{
           const searchFinal =listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(seachText.toLowerCase()))
           setFilterRestaurant(searchFinal) 
          }
        }
        >
          Search
        </button>

        <button
          className="filter-btn"
          //   Below code gives us filtered avgRating greather than 4
          onClick={() => {
            const listOfRest = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterRestaurant(listOfRest);
            // console.log("listOfs",listOfRestaurants.filter(res=>res.info.avgRating > 4))
            console.log("listOfRest",listOfRest.info);
            // console.log("listOfRest",listOfRest)
          }}
        >
          Top Rated Restaurants
        </button>

      <button onClick={()=>{
        const lessRatedrest = listOfRestaurants.filter((item)=>item.info.avgRating<4);
        setFilterRestaurant(lessRatedrest)
      }}>Less Rated Restaurant</button>

      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant, key) => (
         <Link to={"/restaurant/"+restaurant.info.id} key={key}>         
         <RestaurantCard
            resData={restaurant}
          />
          </Link>
        
        )
        )
        }
      </div>
      {/* <div>
      {showData.map((flight, key) => (
        console.log("flightss",flight);
         <Link to={"/flight/"+flight.flight_number} key={key}>         
         <Contact
            resData={flight}
          />
          </Link>
        
        )
        )
        }
      </div> */}
    </div>
  );
};



