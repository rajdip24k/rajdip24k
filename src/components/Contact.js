import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact =()=>{
  const [showData, setshowData] = useState([]);
  const [searchText,setSearchText] = useState("");
  console.log("serchtext",searchText);
  // https://api.spacexdata.com/v3/launches?limit=200&page=1

  useEffect(()=>{
     fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch("https://api.spacexdata.com/v3/launches?limit=200&page=1");
    const json = await data.json();
    console.log("json",json);
    setshowData(json);
  }

  const onClickHandler =()=>{
     setSearchText(searchText.length)
  }
  return(
    <div>
    <h1>This is  us page</h1>
    <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>&nbsp;
    <p>{searchText}</p>
    <button onClick={onClickHandler}>Click Me</button>

    <div className="displayy">
      {showData.map((item,key)=>{
       return (
          <Link to={"/flight/"+item.flight_number} key={key}>
           <div className="flight-card" key={item.mission_name}>
           <p>Mission Name : {item.mission_name}</p>
           <p>Flight Number : {item.flight_number}</p>
           <p>Launch Date : {item.launch_date_local} </p>
           <p>Details : {item.details}</p>
           </div>
           </Link>
       ) 
      })}
    </div>
  </div>
  )
}
export default Contact;