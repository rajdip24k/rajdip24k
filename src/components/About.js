import React from "react";
import User from "./User";
import UserClass from "./UserClass";



class About extends React.Component{
constructor(props){
    super(props)
    console.log("Parent constructor")

}

componentDidMount(){
    console.log("Parent componentDidMount")
}

render(){
        console.log("Parent Render")
        return(
                    <div>
                        <h1>About us Page</h1>
                        {/* Passing props in fun. component */}
                        {/* <User name="Raj" contact="9834" city="Wa"/> */}
                        <UserClass name="SRK" contact="4444" city="Mumbai"/>
                    </div>
                )
    }

}
export default About;


// const About =()=>{

//     return(
//         <d
// iv>
//             <h1>About us Page</h1>
//             {/* Passing props in fun. component */}
//             {/* <User name="Raj" contact="9834" city="Wa"/> */}
//             <UserClass name="SRK" contact="4444" city="Mumbai"/>
//         </div>
//     )
// }
// export default About;