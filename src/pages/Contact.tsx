import { BsInstagram, BsTelegram, BsTiktok, BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom"


const ContactPage = () => {
    return (
        <div className="min-h-screen flex justify-around items-center gap-10 px-5 pt-[100px] flex-wrap mb-20">

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold text-blue-500">Mobile NO.</h1>
                    <p>+234 4839 9483 434, +234 4839 9483 434</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold text-blue-500">General Inquiries:</h1>
                    <p>info@enlightmeeduconsults.com</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold text-blue-500">Admission Support:</h1>
                    <p>admission@enlightmeeconsults.com</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold text-blue-500">Customer Service:</h1>
                    <p>support@enlightmeeduconsults.com</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold text-blue-500">Personal biz email:</h1>
                    <p>sos@enlightmeeduconsults.org</p>
                </div>
                <div className="">
                    <h1 className="text-xl font-bold text-blue-500">Reach out to us on</h1>
                    <ul className="flex items-center gap-4 mt-4">
                        <li><Link to={"/"} className="flex items-center gap-2 text-blue-500"><FaFacebook size={25} /></Link></li>
                        <li><Link to={"/"} className="flex items-center gap-2 text-blue-700"><BsTelegram size={25} /></Link></li>
                        <li><Link to={"/"} className="flex items-center gap-2 text-blue-400"><BsTwitter size={25} /></Link></li>
                        <li><Link to={"/"} className="flex items-center gap-2 text-red-600"><BsInstagram size={25} /></Link></li>
                        <li><Link to={"/"} className="flex items-center gap-2"><BsTiktok size={25} /></Link></li>
                    </ul>
                </div>
            </div>

            <form className="bg-white p-5 rounded-xl shadow">
                <div className="flex flex-col gap-2 my-4">
                    <h1 className="text-2xl text-blue-600 font-bold">Contact <span className="text-red-500">Form</span></h1>
                </div>
                <div className="flex flex-col gap-2 my-4">
                    <label htmlFor="">Full Name</label>
                    <input type="text" required placeholder="Fullname" className="w-[300px] rounded-md h-[40px] outline-none border border-slate-400 px-[10px]" />
                </div>
                <div className="flex flex-col gap-2 my-4">
                    <label htmlFor="">Email</label>
                    <input type="email" required placeholder="Email" className="w-[300px] rounded-md h-[40px] outline-none border border-slate-400 px-[10px]" />
                </div>
                <div className="flex flex-col gap-2 my-4">
                    <label htmlFor="">Message</label>
                    <textarea required className="w-[300px] rounded-md h-[150px] outline-none border border-slate-400 p-[10px]"></textarea>
                </div>
                <div className="flex flex-col gap-2 my-4">
                    <input type="submit" value={'Send Message'} className="py-2 px-4 rounded-md bg-blue-600 text-white cursor-pointer w-[max-content]" />
                </div>
            </form>
        </div>
    )
}

export default ContactPage