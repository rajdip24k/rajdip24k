import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import { Body } from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import FlightMenu from "./components/FlightMenu";
import UserContext from "./utils/userContext";
// import Groccery from "./components/Groccery"; 


const Groccery = lazy(()=>import("./components/Groccery"));

const AppLayout =()=>{
  // console.log("Header",<Header/>)
const [user,setUser] = useState("");

useEffect(()=>{
  // Make an API call for send userNAme abnd password
  const data = {
     name : "Rajdip Dukare"
  }
  // setting the user name to Rajdip Dukare
  setUser(data.name);
},[])



  return (
    <div className="app">
    {/* UserContext.Provider we are providing value to all our app wherevwer 
    want just we need to wrap accordingly 
    and we provided the value as loggedInUser : user 
    */}
    {/* We are passing SetUser and loggeInUser to all our App */}
      <UserContext.Provider value={{loggedInUser : user,setUser}}>
      <Header/>
      <Outlet/>
      </UserContext.Provider>

    </div>
  )
}


const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    children : [
  {
    path : '/',
    element : <Body/>,
  },
  {
    path : '/groccery',
    element : <Suspense fallback={<h1>Loading.....</h1>}><Groccery/></Suspense>
  },
  {
    path : '/about',
    element : <About/>
  },
  {
    path : '/contact',
    element : <Contact/>
  },
  {
    path : '/cart',
    element : <Cart/>
  },
  {
    path : '/restaurant/:resId',
    element : <RestaurantMenu/>
  },
  {
    path : '/flight/:flightId',
    element : <FlightMenu/>
  }
],
errorElement : <Error />
},
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);





// Simple way we have accessed the data for RestaurantCard

// const RestaurantCard =(props)=>{
//     const { resData } = props;
//     console.log("resData",resData);

//     return(
//         <div className="res-card" style={{backgroundColor:'#f0f0f0'}}>
//         <img alt="biryani" className="res-log" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.data.cloudinaryImageId}/>
//         <h3>{resData.data.name}</h3>
//         <h4>{resData.data.cuisines.join(", ")}</h4>
//         <h4>{resData.data.avgRating} Stars</h4>
//         <h4>{resData.data.costForTwo}</h4>
//         <h4>{resData.data.sla.deliveryTime} Minutes</h4>
//         </div>
//     )
// }


//   },

// import createRoot from 'react-dom/client';

// const parent = React.createElement(
//   "div",
//   { id: "parent" },[
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello Hinjewadi Rajdip !"),
//     React.createElement("h2", {}, "Hello Wakad !"),
//   ]),
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hell Child h1"),
//     React.createElement("h2", {}, "Child2"),
//   ])
// ]);

// console.log("parent",parent);

// JSX 


// const heading = React.createElement("h1", {id:"heading"}, "Namste React");
// console.log("heading",heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// // Below and Above code are equivalent to each Other Both are same

// const JsxHeading = <h1>Namste Rajdip</h1>;
// console.log("JsxHeading",JsxHeading)
// root.render(JsxHeading);

// root.render(heading);


// const Title =()=>(
//     <h1 className="head" tabIndex="5">Namste NodeJS</h1>
// )

// const HeadingCompo =()=>(
//     <div className="container">
//         <Title/>
//         <h1 className="heading">Namste React component</h1>
//     </div>
// )



// With return if we use {}
// const HeadingCompo=()=>{
//     return <div className="container">
//              <h1 className="heading">Namaste NODEjs</h1>
//     </div>
// }

// With return if we use {} we can use ()
// const HeadingCompo=()=>{
//     return( 
//     <div className="container">
//         <h1 className="heading">Namaste NODEjs</h1>
//     </div>
//     )
// }


// const HeadingCompo=()=>{
//         return( 
//         <div className="container">
//             <h1 className="heading">Namaste NODEjs</h1>
//         </div>
//         )
//     }

// We can write any javascript code inside the CURLY BRACES {}

// const numbers = 240498;

// const HeadingCompo =()=>(
//     <div id="container">
//         {/* <h1>{numbers}</h1> */}
//         <h2>{100+300}</h2>
//       <h1 className="heading">Namaste Python</h1>
//     </div>
// )


// Putting React Element into our component


// const elem = <span>Rajdip Coaching classes</span>;


// const title =(
//     <h1 className="head" tabIndex="5">
//         {elem}
//          I want to learn React from you, whats the Charges ?
//          {/* <HeadingCompo/> */}
//     </h1>
// )
// const HeadingCompo =()=>{
//     return(<div className="container">
//           {title}
//         <h1>1299</h1>
//       </div>
//     )
//   }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingCompo/>);
































// import React from "react";
// import ReactDOM from "react-dom/client";
// // import createRoot from 'react-dom/client';

// const parent = React.createElement(
//   "div",
//   { id: "parent" },[
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello Hinjewadi Rajdip !"),
//     React.createElement("h2", {}, "Hello Wakad !"),
//   ]),
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hell Child h1"),
//     React.createElement("h2", {}, "Child2"),
//   ])
// ]);

// console.log("parent",parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// // root.render(heading);
