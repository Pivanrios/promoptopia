"use client"
import { useEffect, useState } from "react"
import Product from "@components/Product"

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
            MENU
        </h2>
        <div>
            {dishes.map((dish)=>(
              <Product 
                      key={dish.id}
                      name={dish.name}
                      price={dish.price}
                      desc={dish.desc}
                      imageUrl={dish.imageUrl}
                      id={dish.id}/>
            ))}


        </div>

    </section>
  )
}

export default menu