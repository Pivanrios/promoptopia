'use client'
import { useEffect, useState } from "react"
import checkForDishes from "@utils/functions";

const Schedule = () => {
  //save the days on a varibale
  const [days, setDays] = useState([]);


  useEffect(()=>{
    //get our data
    const setData = async ()=>{
      try {
        console.log("setting data...")
        let res = await fetch("http://localhost:3000/api/menu");
        const menu = await res.json();
        console.log("menu:", menu);
        res = await fetch("http://localhost:3000/api/schedule");
        const week = await res.json();
        console.log("Days:",week);

        const interseccion = checkForDishes(menu, week);
        console.log("interseccion:", interseccion);

        setDays(interseccion);
      } catch (error) {
        console.error
      }
    }
    setData();
  },[]);
  console.log("days:", days);

  return (
    <section>
        <h2
            className='head_text text-center full-w'
        >Schedule</h2>
        <section className=" flex flex-row gap-2">
          {days.map((e)=>(
            <article className="flex flex-row gap-1">
              <h1>{e.name}</h1>
              <p>{e.price}</p>
            </article>
          ))}
        </section>
    </section>
  )
}

export default Schedule