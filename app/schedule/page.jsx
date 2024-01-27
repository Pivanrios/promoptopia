'use client'
import { useEffect, useState } from "react"


const Schedule = () => {
  //save the days on a varibale
  const [days, setDays] = useState([]);


  useEffect(()=>{
    //get our data
    const setData = async ()=>{
      try {
        const res = await fetch("http://localhost:3000/api/schedule");
        const week = await res.json();
        console.log("Days:",week);
        setDays(week);
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
        {days.map((day)=>(
          <article>
            <h5>{day.dia}</h5>
            <span>{day.platillo} ${day.precio}.00</span>
          </article>
        ))}
        </section>
    </section>
  )
}

export default Schedule