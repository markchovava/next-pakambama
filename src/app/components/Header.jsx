import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";



export default function Header() {
  return (
    <div>
    <section className="w-[100%] bg-blue-500 text-white ">
      <div className="mx-auto w-[90%] lg:flex-row flex-col items-center justify-between border-b border-slate-200">
        <div className="px-3 py-2 flex lg:flex-row flex-col items-center justify-start gap-8">
          {/*  */}
          <div className="flex items-center justify-start gap-2">
            <FaPhoneAlt />
            +263 773 835 992
          </div>
          {/*  */}
          <div className="flex items-center justify-start gap-2">
            <FaLocationDot />
            Corner Angwa & South Avenue, Daventry House Fifth Floor, Room 503
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
            <FaFacebook />
            <IoLogoWhatsapp />
            <AiFillInstagram />
        </div>
      </div>
    
    </section>
    <section className="w-[100%] bg-blue-500 text-white ">
      <div className="mx-auto w-[90%] py-8 lg:flex-row flex-col items-center justify-between">
          <div className="text-[2rem] font-extrabold">Pakambama Business Consultancy</div>
          <div className="w-[50%] flex items-center justify-end">
            <ul className="w-[100%] flex items-center justify-end gap-4">
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/about'>About Us</Link></li>
            </ul>
          </div>
      </div>
    </section>
    </div>
  )
}
