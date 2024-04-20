import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
         <section className="bg-blue-500 text-white py-[3rem]">
        <div className="mx-auto w-[90%] flex lg:flex-row flex-col justify-between items-center">
          <div className="lg:w-[60%] w-[100%] lg:py-0 py-8">
            <h6 className="font-bold text-[2rem]">Pakambama Business Consultancy</h6>
            <p>The best service in town.</p>
          </div>
          <div className="lg:w-[30%] w-[100%] lg:py-0 py-8">
            <h6 className="text-[1.5rem] font-bold">Contact Details</h6>
            <div className="flex item-center justify-start gap-2 mb-2">
              <FaPhoneAlt />
              +263 773 835 992
            </div>
            <div className="flex item-center justify-start gap-2 ">
              <FaLocationDot />
              Corner Angwa & South Avenue, Daventry House Fifth Floor, Room 503
            </div>
          </div>
        </div>
    </section>
    </div>
  )
}
