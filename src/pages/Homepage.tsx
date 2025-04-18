import { BiPhone } from "react-icons/bi"
// import Navbar from "../components/Navbar"
import { CgMore } from "react-icons/cg"
import ServiceCard from "../components/servicecard"
import Marquee from "react-fast-marquee";

const Homepage = () => {
  return (
    <div className=''>
        {/* <Navbar /> */}
        <section className="bg-[url(/assets/heroimg.jpg)] bg-cover bg-center min-h-[100vh] pt-[100px] flex justify-around items-center flex-wrap gap-5 p-5">
            <div className="flex flex-col gap-4">
                <h1 className="md:text-7xl text-white font-bold text-4xl text-center md:text-left"><span>Enlight</span><span className='text-red-500'>ME</span> <br /> Edu Consult Ltd.</h1>
                {/* <h1 className="md:text-5xl text-red-500 font-bold text-3xl text-center md:text-left"><span>Enlight</span><span className='text-blue-800'>ME</span> <br /> Edu Consult Ltd.</h1> */}
                <h1 className="text-blue-300 text-xl">Your gateway to studying in France</h1>
                <div className="flex items-center gap-3 flex-wrap">
                    <button className="bg-red-500 py-2 px-4 rounded-md text-white flex items-center gap-4 cursor-pointer"><BiPhone/> <span>Contact us</span></button>
                    <button className="bg-blue-500 py-2 px-4 rounded-md text-white flex items-center gap-4 cursor-pointer"><CgMore/> <span> Learn More...</span></button>
                </div>
            </div>
            <div>
                <img src="/assets/eimg1.png" alt="" className="md:w-[400px] w-[100%]"/>
            </div>
        </section>

        <section className="min-h-screen py-10 flex justify-center items-center p-5">
            <div className="flex justify-center items-center gap-10 flex-wrap-reverse">
                <img src="/assets/eimg1.jpg" alt="" className="md:w-[400px] w-[100%]"/>
                <div className="md:w-[500px] w-[100%]">
                    <h1 className="text-red-500 md:text-4xl text-2xl mb-3 font-bold">Executive <span className="text-blue-800">Summary</span>  </h1>
                    <p className="text-justify">EnlightME Edu Consults Ltd is a student advisory and consulting firm specializing in guiding Nigerian students to study in France, Usa, Canada and UK. With firsthand experience working at Campus France Nigeria, EnlightME France Education aims to bridge the gap for students in states not covered by Campus France (Lagos and Abuja). The business offers expert consultation, application assistance, visa guidance, and support for studying in France.</p>
                </div>
               
            </div>
        </section>

        <section className="py-10 min-h-screen flex flex-col gap-5 p-5">
            <h1 className="md:text-5xl text-3xl text-center font-bold text-blue-800">Services </h1>
            <div className="flex flex-col justify-center items-center gap-10 flex-wrap">
                <p className="text-center md:w-[800px] w-[100%]"> My core services include expert consultation, application assistance, visa guidance, and support are essential and form the foundation of a strong study-abroad consultancy. 
                </p>
                <h1 className="text-xl">Pre-Application Services.</h1>
                <Marquee>
                    <div className="flex">
                    <ServiceCard text="Personalized Consultation – Career counselling, university selection, and course matching." />
                    <ServiceCard text="Profile Building – CV enhancement, SOP guidance, and recommendation letter assistance" />
                    <ServiceCard text="Scholarship Advisory – Assistance with finding and applying for scholarships" />
                    </div>
                </Marquee>
                <h1 className="text-xl">Application Assistance</h1>
                    <Marquee direction="right">
                    <div className="flex">
                    <ServiceCard text="Document Preparation – Application form completion, transcript verification, and submission" />
                    <ServiceCard text="Application Follow-up – Liaising with universities for application updates" />
                    </div>
                </Marquee>
                    <h1 className="text-xl">Visa Guidance & Travel Support</h1>
                    <Marquee>
                    <div className="flex">
                    <ServiceCard text="Visa Application Assistance – Guidance on student visa requirements and documentation" />
                    <ServiceCard text="Visa Interview Preparation – Mock interviews and common question preparation" />
                    <ServiceCard text="Pre-Departure Briefing – Cultural orientation, financial planning, and travel checklists." />
                    </div>
                </Marquee>
                    <h1 className="text-xl">Post-Arrival & Additional Support</h1>
                    <Marquee direction="right">
                    <div className="flex">
                    <ServiceCard text="Accommodation Assistance – Guidance on finding housing in France." />
                    <ServiceCard text="Health Insurance & Financial Planning – Advice on securing mandatory student health insurance" />
                    <ServiceCard text="French Language Support – Resources for learning basic French." />
                    <ServiceCard text="Networking & Alumni Support – Connecting students with past applicants in France." />
                    </div>
                </Marquee>
            </div>
        </section>

        <section className="flex justify-center items-center flex-wrap gap-10 p-5">
            <img src="/assets/servimg1.png" alt="" className="md:w-[400px]"/>
            <div className="md:w-[700px] w-[100%] flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl text-blue-800 font-bold"><span className="text-red-500">Our</span> Mission</h1>
                    <p> "At EnlightME  Edu Consults Ltd, we empower students and professionals with expert guidance on higher education opportunities in France and other European Countries. Through personalized consultations, application support, and seamless travel assistance, we ensure a smooth transition from admission to arrival, making international education more accessible and stress-free."</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl text-red-500 font-bold"><span className="text-blue-800">Our</span> Vision</h1>
                    <p> To be the leading education and travel consultancy in Nigeria, recognized for making studying in France, Usa, Uk, and Canada an achievable reality. We aim to bridge the gap between students and world-class French, American, British and Canadian institutions while providing comprehensive travel support, fostering a new generation of global scholars.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Homepage