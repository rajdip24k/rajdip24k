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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
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
      <div className="filter m-4 p-4">
        <input
          type="text"
          value={seachText}
          className="border border-solid border-black"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
        className="px-4 py-2 bg-green-100 m-4 rounded-lg  hover:bg-violet-600"
          onClick={() =>{
           const searchFinal =listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(seachText.toLowerCase()))
           setFilterRestaurant(searchFinal) 
          }
        }
        >
          Search
        </button>

        <button
          className="filter-btn px-4 bg-green-100 py-2 rounded-lg"
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

      <button className="px-4 bg-green-100 py-2 m-2 rounded-lg" onClick={()=>{
        const lessRatedrest = listOfRestaurants.filter((item)=>item.info.avgRating<4);
        setFilterRestaurant(lessRatedrest)
      }}>Less Rated Restaurant</button>

      </div>
      <div className="res-container flex flex-wrap">
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



