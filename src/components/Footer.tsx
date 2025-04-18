import { BsInstagram, BsTelegram, BsTiktok, BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="p-5 bg-blue-800 text-white flex justify-around flex-wrap gap-5">
        <div className="md:w-[500px] w-[100%]">
        {/* <Link to={"/"} className='text-red-500 text-2xl font-bold'>Enlight<span className='text-blue-600'>ME</span></Link> */}
        <h1 className='text-red-500 text-2xl font-bold'><span className='text-blue-500'>EnlightME</span> Consults Limited</h1>
            <p>The industry is located at Lagos Nigeria (with virtual and in-person services), founded by <span className="text-blue-200 font-bold">SALAMI SARAFADEEN OLALEKAN.</span> </p>
            <p>The industry aimed to target the Nigerian students, Non-students and professionals seeing higher education opportunities in France beyond Lagos & Abuja</p>
        </div>
        
        <div>
            <h1 className="font-bold">Quick Links</h1>
            <ul className="flex flex-col gap-2 mt-4">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/"}>About</Link></li>
                <li><Link to={"/"}>Services</Link></li>
                <li><Link to={"/"}>Contact</Link></li>
                <li><Link to={"/"}>Portfolio</Link></li>
            </ul>
        </div>
        <div>
            <h1 className="font-bold">Follow us on:</h1>
            <ul className="flex flex-col gap-2 mt-4">
                <li><Link to={"/"} className="flex items-center gap-2"><FaFacebook size={25}/> <span>Facebook</span></Link></li>
                <li><Link to={"/"} className="flex items-center gap-2"><BsTelegram size={25}/><span>Telegram</span></Link></li>
                <li><Link to={"/"} className="flex items-center gap-2"><BsTwitter size={25}/> <span>Twitter</span></Link></li>
                <li><Link to={"/"} className="flex items-center gap-2"><BsInstagram size={25}/><span>Instagram</span></Link></li>
                <li><Link to={"/"} className="flex items-center gap-2"><BsTiktok size={25}/><span>TikTok</span></Link></li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer