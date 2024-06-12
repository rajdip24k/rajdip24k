import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';

function FlightMenu(props) {
    const [flightMenu,setFlightMenu] = useState(null);
    console.log("flightMenu11",flightMenu);

    const { flightId } = useParams();
    console.log("flightId",flightId);

    useEffect(()=>{
       fetchFlightMenu();
    },[]);

     const fetchFlightMenu = async()=>{
        const data = await fetch("https://api.spacexdata.com/v3/launches?limit=200&page=1"+flightId);
        const flight = await data.json();
        console.log("jsonnn",flight);
        setFlightMenu(flight[flightId]);
     }

    // const {flight_number} = flightMenu[0];
    // console.log("flight_number",flightMenu.flight_number)
    // console.log("flightMenu",flightMenu[0].details);
    return (
        <div>
            <p>UUU</p>
       {/* <p>{flightMenu.mission_name}</p>  */}
       {/* {/* <p>{flightMenu.flight_number}</p>     
       <p>{flightMenu.details}</p>
       <p>{flightMenu.launch_year}</p>
       <img src={flightMenu.links.mission_patch}/> */}
        </div>
    );
}
export default FlightMenu;