"use client"
import { useEffect, useState } from "react"


const menu = () => {
  const [dishes, setDishes] = useState([])


  useEffect(()=>{
    console.log("inside useEffect function")
    //fetch data from the api
    const setData = async () => {
      console.log("setting data..")
      const res = await fetch("http://localhost:3000/api/menu");
      const menu = await res.json();
      setDishes(menu);
      console.log("Menu:", menu);
    }
    setData();//invoke function

  },[])


  return (
    <section>
        <h2 
        className="head_text text-center">
            menu
        </h2>
        <div>
            {dishes.map((dish)=>(
              <p key={dish.id}>{dish.name} precio: ${dish.price}.00</p>
            ))}


        </div>

    </section>
  )
}

export default menu