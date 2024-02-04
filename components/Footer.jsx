import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div 
        className='min-h-40 pt-10 w-full flex-row'>
        <ul
            className=' flex flex-row flex-center gap-3'>
            <li>
                <Link href={"https://chat.whatsapp.com/I5vg82rHUSj3EUFToM6gtq"}>
                    <div className=" bg-green-500 rounded-full h-10 w-10 ">
                    
                    </div>
                </Link>
            </li>
            <li>
                <Link href={"https://www.instagram.com/"}>
                    <div
                        className="bg-pink-400 rounded-md w-10 h-10">

                    </div>
                </Link>
            </li>
            <li>
                <Link href={"https://www.linkedin.com/in/pivanrios"}>
                    <div className="bg-blue-500 rounded-md w-10 h-10">

                    </div>
                </Link>
            </li>
            
        </ul>

    </div>
  );
}

export default Footer;