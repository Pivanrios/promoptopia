'use client'
import { useEffect, useState } from "react"


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
            className='head_text text-center full-w'
        >Schedule</h2>
        <section className=" flex flex-row gap-2">
          {semana.map((e)=>(
            <article key={e.dia}>
              <p>{e.dia}</p>
              <ul>
              {e.platillos.map((dish)=>{
                console.log("Inside platillos ", dish);
                const plate = catalogo.find((f)=> f.name === dish);
                console.log("plate:",plate);
                return(
                  <li key={plate.id}><span>{plate.name} ${plate.price}.00</span></li>
                )
              })}
              </ul>
            </article>
          ))}
        </section>
    </section>
  )
}

export default Schedule