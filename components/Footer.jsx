import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div 
        className='min-h-40 pt-10 w-full flex-row'>
        <ul
            className=' flex flex-row flex-center gap-3'>
            <li>
                <Link href={"/"}>
                    <Image
                        src={'/icons/logo.png'}
                        width={60}
                        height={60}
                        alt="Whatssap Logo"
                    />
                </Link>
            </li>
            <li>
                <Link href={"/"}>
                    <Image
                        src={'/icons/logo.png'}
                        width={60}
                        height={60}
                        alt="Instgram"
                    />
                </Link>
            </li>
            <li>
                <Link href={"/"}>
                    <Image
                        src={'/icons/logo.png'}
                        width={60}
                        height={60}
                        alt="Linkedn"
                    />
                </Link>
            </li>
            
        </ul>

    </div>
  );
}

export default Footer;