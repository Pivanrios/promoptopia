'use client'
import { useEffect, useState } from "react"
import Calendar from "@components/Calendar";

const Schedule = () => {
  //save the days on a varibale
  const [days, setDays] = useState([]);
  const [semana, setSemana] = useState([]);
  const [catalogo, setCatalogo] = useState([]);


  useEffect(()=>{
    //get our data
    const setData = async ()=>{
      try {
        console.log("setting data...")
        let res = await fetch("http://localhost:3000/api/menu");
        const menu = await res.json();
        console.log("menu:", menu);
        setCatalogo(menu);
        res = await fetch("http://localhost:3000/api/schedule");
        const week = await res.json();
        setSemana(week);
        console.log("Days:",week);

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
            className='head_text text-center full-w pb-6'
        >Schedule</h2>
        <Calendar/>
    </section>
  )
}

export default Schedule