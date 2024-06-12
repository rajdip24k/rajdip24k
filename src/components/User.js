import { useState } from "react";

const User =(props)=>{
    const [count1,setCount1] = useState(1);
    const [count2,setCount2] = useState(10);

    const handleClick=()=>{
        if(count1<count2){
            setCount1(count1+1)
        }
        else{
            setCount2(count2-1)
        }
    }

    return(
        <div className="user-card">
        <h1>count1 : {count1}</h1>
        <button onClick={handleClick}>Btn1</button>
        <h1>count2 : {count2}</h1>
        <h3>Name : {props.name}</h3>
        <h3>Contact : {props.contact}</h3>
        <h3>City : {props.city}</h3>
        </div>
    )
}
export default User;