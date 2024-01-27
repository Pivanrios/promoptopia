'use client'
import Image from "next/image";
import { useState } from "react";



const Slider = () => {
    //images
    const images = [ "/icons/rifa.jpeg", "/icons/premios.jpeg"];
    const [image, setImage] = useState(0);
    const i = 0;
    //on click change url



  return (
    <section className="full-w"
        >
            <Image
                src={images[0]}
                width={300}
                height={300}
                alt="Rifa"
                
                />
    </section>
  )
}

export default Slider