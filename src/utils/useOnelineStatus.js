import React from "react";
import { useState,useEffect } from "react"

export default function useOnlineStatus(){
    const [useOnlineStatus, setOnlineStatus]= useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false)
        });
    
        window.addEventListener("online",()=>{
            setOnlineStatus(true)
        })
    

    },[]);
    
    return useOnlineStatus;
    
}