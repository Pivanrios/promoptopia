'use client'

import { useEffect } from "react"

const page = ({params}) => {

    useEffect(()=>{
        const setData = async()=>{
           try {
            const res = await fetch(`http://localhost:3000/api/menu/${params.dishId}`);
            const dish = await res.json();
            console.log("dish", dish);
           } catch (error) {
            console.error
           }
        }
        setData();
    },[])


  return (
    <div>{params.dishId}</div>
  )
}

export default page