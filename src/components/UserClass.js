import React from "react"

class UserClass extends React.Component{
    // to access the props we have to use super & constructor
    constructor(props){
        super(props);
        this.state = {
          userInfo:{
          name : "Rajdip",
          location : "Chinchala"
          }
        }
       
        // console.log("Child constructor")
    }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log("json",json)

    this.setState({
      userInfo : json,
    })
    console.log("Child componentDidMount")
  }
//   componentDidMount(){
//   this.timer = setInterval(()=>{
//         console.log("Rajdip is tu chal push pudh")
//   },1000)
// }
  componentDidUpdate(){
    console.log("compoenet Did Update")
  }

  componentWillUnmount(){
    console.log("Component wii unmount")
    // clearInterval(this.timer)
  }




    render(){
        // console.log("child render");
        // const {company} =this.props.json;
        // const {name,contact,city} = this.props;

       const {name,location} = this.state.userInfo;

      //  console.log("bio",bio)
        return(
            <div className="user-card">
                {/* To acccess the props in JSx we have to user this keyword */}
            <h1>{name}</h1>
            <h3>{location}</h3>
            <h3>Bio : {this.state.userInfo.bio}</h3>
            {/* <p>{company}</p> */}
            {/* <h3>Contact : {contact}</h3>
            <h3>City : {city}</h3> */}
            </div>
        )
    }
}
export default UserClass;









// cmponentWillUnmount