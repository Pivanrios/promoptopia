import Image from "next/image"
import Link from "next/link"

const Product = ({id, name, price, desc, imageUrl}) => {
  return (
    <Link href={`/menu/${name}`}>
    <div 
            className="w-full border-2 py-2 px-5 flex flex-row gap-2 "
            >
                
        <Image
                src={imageUrl}
                width={40}
                height={70}
                alt={name}/>
        <div>
          <h4>{name}</h4>
          
          <p>{desc}</p>
          <p>Price: ${price}.00</p>
        </div>
        
    </div>
    </Link>
  )
}

export default Product