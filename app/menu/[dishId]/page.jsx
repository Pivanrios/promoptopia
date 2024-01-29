'use client'
import Image from "next/image";
import { useEffect, useState } from "react"



const Dish = ({params}) => {

  const [dish, setDish] = useState({});

    useEffect(()=>{
        //Set data
        const setData = async()=>{
           try {
            //fetch from our route
            const res = await fetch(`http://localhost:3000/api/menu/${params.dishId}`);
            const  result = await res.json(); //convert response to json
            console.log("result:",result);
            setDish(result);
            

           } catch (error) {
            console.error
           }
        }
        setData();
    },[])


  return (
    <section>
      <article className="border-2 p-3">
        <Image
            src={dish.imageUrl}
            width={50}
            height={50}
            alt={dish.name}/>
        <h6>{dish.name}</h6>
        <p>{dish.category}</p>
        <p>{dish.desc}</p>
        <p>{}</p>
        <p>price: ${dish.price}.00</p>
      </article>

    </section>

  )
}

export default Dish