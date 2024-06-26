import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_URL } from "../utils/constants";
import useRestMenu from "../utils/useRestMenu";
import RestCategory from "./RestCategory";

const RestaurantMenu = () => {
  const [showItem, setShowItem] = useState(false);
  // const [restMenu,setRestMenu] = useState(null);
  const { resId } = useParams();
  console.log("params", resId);

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

  if (restMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log("itemCard", itemCards);

  console.log(
    "itemCard>>>>>>",
    restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const category =
    restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("category", category);

  return (
    <div className="  border rounded-2xl shadow-2xl text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <h3 className="text-orange-500 text-xl">{cuisines.join("")}</h3>
      <p className="font-bold text-xl">Cost for two : {costForTwoMessage}</p>
      {/*Below  Categories accordion */}
      <div>
        {category.map((c,index)=> (
          <RestCategory
            c={c}
            showItem={index === showItem ? true : false}
            setShowItem={() => index===showItem ? setShowItem(!index) : setShowItem(index)}
            // notsetShowItem={() => setShowItem(!index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
