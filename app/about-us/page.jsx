import Image from "next/image"

const AboutUs = () => {
  return (
    <section>
        <h3
           className='head_text text-center' >
            About us
        </h3>
        {/*-------------------------Desktop version ------------------------ */}
        <article className=" flex flex-row px-2 py-7" >
          <Image  
                src={"/images/orders.jpeg"}
                width={300}
                height={300}
                alt="orders"
                className="rounded-full"/>
          <div className="flex flex-col p-3 gap-3">
            <h5 className="head_text text-center p-4">Community</h5>
              
            <p>We believe that home made food is more tasty and healthy than frozen food sold in our workplace.
             <a href="/about-us">here!</a> </p>
          </div>
          
        </article>
        <article className=" flex flex-row px-2 py-7" >
          <Image  
                src={"/icons/peter.png"}
                width={300}
                height={300}/>
          <div className="flex flex-col p-3 gap-3">
            <h5 className="head_text text-center p-4">Whatsapp</h5>
              
            <p>Join our Whatsapp group and answer the poll to order for the food of the day. <a href="/about-us">here!</a> </p>
          </div>
          
        </article>
        {/*-----------------Mobile version------------------------------------- */}
    </section>
  )
}

export default AboutUs