import { FaFacebookF, FaGithub } from "react-icons/fa6";
import logoFull from '../../assets/logo-full.png'

function Navbar() {
  return (
    <nav className='flex px-4 overflow-hidden border-b-2 border-zinc-800 items-center h-[7%] justify-between relative sticky top-0 z-[999] bg-yellow-200 mx-4 border-l-2 border-r-2 rounded-b-lg'>
        <a href="">
            <img src={logoFull} className="h-6" alt="" />
        </a>

        <div className="font-syne font-bold w-full text-center absolute">
            Miguel Villanueva
        </div>

        <div className="w-48 h-8 rounded-full flex justify-end gap-2">
            <a className="border-2 border-slate-800 w-8 h-8 rounded-full flex justify-center items-center">
                <FaFacebookF/>
            </a>
            <a className="border-2 border-slate-800 w-8 h-8 rounded-full flex justify-center items-center">
                <FaGithub/>
            </a>
            <a className="border-2 border-slate-800 w-8 h-8 rounded-full flex justify-center items-center">
                <FaGithub/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar