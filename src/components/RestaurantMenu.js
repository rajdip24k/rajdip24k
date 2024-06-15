import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_URL } from "../utils/constants";
import useRestMenu from "../utils/useRestMenu";


const RestaurantMenu = () =>{
// const [restMenu,setRestMenu] = useState(null);

const {resId} = useParams();
console.log("params",resId);

const restMenu = useRestMenu(resId);

    // useEffect(()=>{
    //   fetchMenu();
    // },[]);

    // const fetchMenu = async () => {
    //   const data =
    // await fetch(Menu_URL+resId);
    //             //  https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId
    //   const json = await data.json();
    //   console.log("json2",json)
    //   setRestMenu(json.data)
    // } 

    if(restMenu === null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} = restMenu?.cards[2]?.card?.card?.info;

    const {itemCards} = restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("itemCard",itemCards);

    return(
        <div className="m-4 p-14 w-[500px] bg-green-100 border rounded-2xl shadow-2xl">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h3 className="text-orange-500">{cuisines.join(",")}</h3>
            <h3 className="font-bold">{costForTwoMessage}</h3>
            <ul>
                {
                   itemCards && itemCards.map((item)=><li key={item.card.info.id} className="font-semibold">{item.card.info.name},</li>)
                }
            </ul>
        </div>
    )
}
export default RestaurantMenu;