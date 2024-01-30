'use client'
import Image from "next/image";
import { useEffect, useState } from "react"



const Dish = ({params}) => {

  const [dish, setDish] = useState({});
  const [ingredients, setIngredients] = useState([]);

    useEffect(()=>{
        //Set data
        const setData = async()=>{
           try {
            //fetch from our route
            const res = await fetch(`http://localhost:3000/api/menu/${params.dishId}`);
            const  result = await res.json(); //convert response to json
            console.log("result:",result);
            setDish(result);
            setIngredients(result.ingredientes);
            

           } catch (error) {
            console.error
           }
        }
        setData();
    },[])


  return (
    <section>
      <article className="border-2 p-3 flex flex-row gap-2">
        <Image
            src={dish.imageUrl}
            width={50}
            height={50}
            alt={dish.name}/>
        <div>
          <h6 className="font-bold ">{dish.name}</h6>
          <p className="font-thin">{dish.category}</p>
          <p className="">{dish.desc}</p>
          {ingredients.map((e)=>(<p>{e}</p>))}
          <p className="">price: ${dish.price}.00</p>
        </div>
      </article>

    </section>

  )
}

export default Dish