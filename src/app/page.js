import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main>
      <Header />

    <section className="bg-gradient-to-br from-blue-400 to-cyan-300 w-[100%] h-[36rem]">
      <div className="mx-auto h-[100%] w-[90%] flex justify-start items-center">
          <div className="w-[50%] flex flex-col justify-center items-start text-white">
            <p className="tracking-[.8rem] mb-4">Welcome to </p>
            <h6 className="text-[3rem] font-bold leading-none text-white drop-shadow-md mb-4">Pakambama Business Consultancy</h6>
            <button className="bg-white hover:bg-blue-800 hover:text-white text-blue-500 px-6 py-4">Learn More</button>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <div className="w-[80%] aspect-[5/4] rounded-xl overflow-hidden bg-white border-5 border-white drop-shadow-lg">
              <img src="./img/01.jpg" className="w-[100%] h-[100%] object-cover" />
            </div>
          </div>
      </div>
    </section>
    <section className="w-[100%] bg-slate-50">
      <div className="mx-auto w-[90%] grid grid-cols-4 gap-8 py-[4rem]">     
          <div className="bg-white drop-shadow-lg px-4 py-6">
              <h5 className="text-lg font-semibold">Company Registration</h5>
          </div>
          {/*  */}
          <div className="bg-white drop-shadow-lg px-4 py-6">
              <h5 className="text-lg font-semibold">Zimra Tax Clearance</h5>
          </div>
          {/*  */}
          <div className="bg-white drop-shadow-lg px-4 py-6">
              <h5 className="text-lg font-semibold">NSSA, ZIMDEF Complaince</h5>
          </div>
          {/*  */}
          <div className="bg-white drop-shadow-lg px-4 py-6">
              <h5 className="text-lg font-semibold">PRAZ Registration</h5>
          </div>
          {/*  */}
          <div className="bg-white drop-shadow-lg px-4 py-6">
              <h5 className="text-lg font-semibold">Accounting & Tax Consultancy</h5>
          </div>
          {/*  */}
          <div className="bg-white drop-shadow-lg px-4 py-6">
              <h5 className="text-lg font-semibold">Business Advisory</h5>
          </div>
          {/*  */}
          <div className="bg-white drop-shadow-lg px-4 py-6">
              <h5 className="text-lg font-semibold">Company Profile</h5>
          </div>

      </div>
    </section>

    
    <Footer />
      
    </main>
  );
}
