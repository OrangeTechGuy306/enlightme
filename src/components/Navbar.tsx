
import { Drawer } from 'antd'
import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const openDrawer = () => { setOpen(true) }

  return (
    <nav className='flex md:justify-around justify-between items-center gap-5 px-5 py-4 shadow flex-wrap bg-white fixed w-[100%] top-0 left-0 z-50'>
      <div className='flex items-center flex-wrap gap-3'>
        <img src="/assets/enlightme.png" alt="" width={50} />
        <Link to={"/"} className='text-red-500 text-2xl font-bold'>Enlight<span className='text-blue-600'>ME</span></Link>
      </div>
      <div className='md:flex items-center gap-5 flex-wrap hidden'>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
      </div>
      <div className='md:hidden block'>
        <button onClick={openDrawer} className='text-blue-500 cursor-pointer'><BiMenu size={30} /></button>
        <Drawer open={open} onClose={() => setOpen(false)} placement='left' title={"EnlightME"}>
          <div className='flex flex-col gap-5 flex-wrap'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
          </div>
        </Drawer>
      </div>
    </nav>
  )
}

export default Navbar