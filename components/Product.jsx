import Image from "next/image"


const Product = ({id, name, price, desc, imageUrl}) => {
  return (
    <div 
            className="w-full border-2 py-2 px-5  ">
                
        <Image
                src={imageUrl}
                width={40}
                height={40}
                alt={name}/>
        <h4>{name}</h4>
        
        <p>{desc}</p>
        <p>Price: ${price}.00</p>
        
    </div>
  )
}

export default Product