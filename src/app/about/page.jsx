import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div>
        <Header />
        
        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] flex items-center justify-center text-center py-[2rem]'>
                <h6 className='font-extrabold text-[4rem]'>About Us</h6>
            </div>
        </section>


        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] flex items-center justify-start pt-[3rem] pb-[4rem]'>
                <div className='w-[50%]'>
                    <h6 className='font-extrabold text-[2rem]'>About Our Company</h6>
                    <p className='text-lg'>
                        Pakambama Business Consultancy is a full-service firm dedicated to helping businesses 
                        of all sizes in Zimbabwe thrive. We offer a comprehensive suite of services designed 
                        to streamline your operations, ensure compliance, and empower you to make informed 
                        decisions.
                    </p>
                </div>
                <div className='w-[50%] flex items-center justify-center'>
                    <div className="w-[80%] aspect-[5/4] rounded-xl overflow-hidden bg-white border-5 border-white drop-shadow-lg">
                        <img src="./img/01.jpg" className="w-[100%] h-[100%] object-cover" />
                    </div>
                </div>
            </div>
        </section>


        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] pt-[3rem] pb-[4rem]'>
                <h6 className='font-bold text-[2rem] mb-2'>Vision</h6>
                <p className='mb-4 text-lg'>
                    To be the leading provider of business support services in Zimbabwe, 
                    empowering entrepreneurs and businesses to achieve sustainable growth.
                </p>

                <h6 className='font-bold text-[2rem] mb-2'>Mission</h6>
                <p className='mb-4 text-lg'>
                    We are dedicated to providing our clients with a comprehensive suite of services designed 
                    to streamline operations, ensure compliance, and make informed business decisions. We 
                    strive to build long-term relationships with our clients, acting as a trusted advisor 
                    and partner on their journey to success.
                </p>

                <h6 className='font-bold text-[2rem] mb-2'>Values</h6>
                <p className='mb-4 text-lg'>
                    Integrity: We conduct our business with honesty and transparency. <br />
                    Excellence: We are committed to delivering exceptional service and exceeding client expectations. <br />
                    Client Focus: We prioritize our clients' needs and work collaboratively to achieve their goals. <br />
                    Professionalism: We maintain the highest standards of professionalism in all our interactions. <br />
                    Innovation: We continuously seek new and improved ways to serve our clients. <br />
                </p>

                
            </div>
        </section>


        <section className='w-[100%]'>
            <div className='w-[90%] mx-auto pb-[4rem]'>
                <h6 className='text-[3rem] font-extrabold mb-4'>Our Services</h6>
                <div className='mb-3'>
                    <h5 className='font-bold text-[1.5rem]'>Company Registration</h5>
                    <p className='text-lg'> We guide you through the entire company registration 
                        process, ensuring a smooth and efficient start-up.
                    </p>
                </div>

                <div className='mb-3'>
                    <h5 className='font-bold text-[1.5rem]'>Zimra Tax Clearance</h5>
                    <p className='text-lg'> We assist with obtaining your essential Zimra tax clearance certificate.
                    </p>
                </div>
               
                <div className='mb-3'>
                    <h5 className='font-bold text-[1.5rem]'>NSSA, ZIMDEF Compliance:</h5>
                    <p className='text-lg'> Stay compliant with mandatory contributions to NSSA and ZIMDEF.
                    </p>
                </div>

                <div className='mb-3'>
                    <h5 className='font-bold text-[1.5rem]'>PRAZ Registration</h5>
                    <p className='text-lg'> We handle PRAZ registration for hassle-free payroll processing.
                    </p>
                </div>


                <div className='mb-3'>
                    <h5 className='font-bold text-[1.5rem]'> Accounting & Tax Consultancy</h5>
                    <p className='text-lg'> Leverage our expertise for accurate accounting and strategic tax planning.
                    </p>
                </div>

                <div className='mb-3'>
                    <h5 className='font-bold text-[1.5rem]'> Business Advisory </h5>
                    <p className='text-lg'> 
                    Benefit from our insights and guidance to make sound business decisions.
                    </p>
                </div>

                <div className='mb-3'>
                    <h5 className='font-bold text-[1.5rem]'> Company Profile Development </h5>
                    <p className='text-lg'> 
                        Company Profile Development: We craft a compelling company profile to showcase your business effectively.
                    </p>
                </div>
        
                <div className='mb-3'>
                    <h5 className='font-bold text-[1.5rem]'> Company Profile Development </h5>
                    <p className='text-lg'> 
                        Company Profile Development: We craft a compelling company profile to showcase your business effectively.
                    </p>
                </div>
    
            </div>
        </section>




        <Footer />
    </div>
  )
}
