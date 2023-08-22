import './App.css'
import Navbar from './components/navbar/Navbar'
import imgMe from './assets/me.jpg'
import { HiArrowLongDown } from "react-icons/hi2";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiSass, SiTailwindcss, SiBootstrap, SiReact, SiNextdotjs, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiSqlite, SiNpm, SiGit, SiVisualstudiocode, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { GiBearFace } from "react-icons/gi"

import { IconContext } from "react-icons";

const toolStyling = 'border-2 border-zinc-800 rounded-full flex items-center px-4 py-2 bg-slate-50'

function App() {

  return (
    <main className='relative h-full w-full border-2 overflow-auto border-zinc-800 font-syne text-zinc-800 backdrop-blur-md bg-slate-50/50 '>
      <Navbar/>
        <div className='px-8 my-8'>
        <div className='flex relative w-full items-center bg-sky-500 rounded-full border-2 border-zinc-800 p-8 shadow-cartoon'>
          <div className='w-1/4'>
            <img src={imgMe} className='h-full w-full object-cover rounded-full border-2 border-zinc-800' alt="" />
          </div>
          <div className='flex flex-col w-3/4 ps-8'>
            <h1 className='font-syne text-[80px] w-4/5 font-bold leading-[72px]'>Miguel Villanueva</h1>
            <h2 className='text-4xl p-2 bg-zinc-50 rounded-full border-2 border-zinc-800 w-fit px-4 mt-2'>CREATIVE WEB DEVELOPER 💻</h2>
          </div>
          
          <div className='absolute top-4'>
            <div className='absolute bg-zinc-800 p-2 border-2 border-zinc-800 top-2 left-2 flex w-max'>
              <p className='font-syne font-bold text-lg'>HELLO I AM...</p>
            </div>
            <div className='absolute bg-yellow-400 p-2 border-2 border-zinc-800 flex w-max'>
              <p className='font-syne font-bold text-lg'>HELLO I AM...</p>
            </div> 
          </div>
        </div>
      </div>

      <div className='px-10 mt-16'>
        <h3 className='font-syne font-bold text-[40px]'>Tools I use...</h3>
        <div className='w-full grid grid-cols-7 gap-2'>
          <section className={`${toolStyling} text-2xl`}>
            <div className='p-2 me-1'>
              <SiHtml5 className="text-4xl"/>
            </div>
            HTML
          </section>
          <section className={`${toolStyling} text-2xl`}>
            <div className='p-2 me-1'>
              <SiCss3 className="text-4xl"/>
            </div>
            CSS
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiJavascript className="text-4xl"/>
            </div>
            JavaScript
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiTypescript className="text-4xl"/>
            </div>
            TypeScript
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiSass className="text-4xl"/>
            </div>
            Sass
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiTailwindcss className="text-4xl"/>
            </div>
            Tailwind CSS
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiBootstrap className="text-4xl"/>
            </div>
            Bootstrap
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiReact className="text-4xl"/>
            </div>
            React
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiNextdotjs className="text-4xl"/>
            </div>
            Next.js
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiRedux className="text-4xl"/>
            </div>
            Redux
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <GiBearFace className="text-4xl"/>
            </div>
            Zustand
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiNodedotjs className="text-4xl"/>
            </div>
            Node.js
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiExpress className="text-4xl"/>
            </div>
            Express
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiMongodb className="text-4xl"/>
            </div>
            MongoDB
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiMysql className="text-4xl"/>
            </div>
            MySQL
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiSqlite className="text-4xl"/>
            </div>
            Sqlite
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiNpm className="text-4xl"/>
            </div>
            NPM
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiGit className="text-4xl"/>
            </div>
            Git
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiVisualstudiocode className="text-4xl"/>
            </div>
            VSCode
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiAdobephotoshop className="text-4xl"/>
            </div>
            Photoshop
          </section>
          <section className={`${toolStyling} text-xl`}>
            <div className='p-2 me-1'>
              <SiAdobeillustrator className="text-4xl"/>
            </div>
            Illustrator
          </section>
        </div>
      </div>

      <div className='px-12 my-12'>
        <h3 className='text-xl font-bold py-2 px-4 bg-slate-50 rounded-full border-2 border-zinc-800 mb-4'>My Projects</h3>
        <div className='flex flex-col gap-4'>
          <div className='flex bg-slate-50 border-2 border-zinc-800 p-4 px-8 rounded-xl'>
            <div className='w-1/2 flex flex-col justify-between'>
              <section>
                <div className='relative mb-4'>
                  <h4 className='absolute top-2 left-2  font-bold text-2xl border-2 w-max p-2 px-4 border-zinc-800 bg-zinc-800'>Project Name</h4>
                  <h4 className='relative font-bold text-2xl border-2 w-max p-2 px-4 border-zinc-800 bg-yellow-400 z-10'>Project Name</h4>
                </div>
                <p className='text-[1rem] p-2 w-3/4'>This is a lengthy sentence that would show me how the layout for the project description would look like</p>
              </section>

              <section className='flex gap-2'>
                <div className='w-12 h-12 rounded-full border-2 grid place-content-center border-zinc-800'>
                  <SiReact className="text-2xl"/>
                </div>
                <div className='w-12 h-12 rounded-full border-2 grid place-content-center border-zinc-800'>
                  <SiRedux className="text-2xl"/>
                </div>
                <div className='w-12 h-12 rounded-full border-2 grid place-content-center border-zinc-800'>
                  <SiSass className="text-2xl"/>
                </div>
              </section>
            </div>
            <div className='w-1/2 relative'>
              <div className='bg-blue-500 h-80 border-2 border-zinc-800 rounded-lg'></div>
              <section>

              </section>
            </div>
          </div>

          <div className='flex bg-slate-50 border-2 border-zinc-800 p-4 px-8 rounded-xl'>
            <div className='w-1/2 flex flex-col justify-between'>
              <section>
                <h4 className='font-bold text-lg'>Project Name</h4>
                <p>Proj description</p>
              </section>
              <section>
                Tester Login:
              </section>
            </div>
            <div className='w-1/2'>
              <div className='bg-blue-500 h-80 border-2 border-zinc-800 rounded-lg'></div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>

      <footer className='bg-zinc-800 px-8 py-4 font-syne text-slate-50 text-sm'>
        <div className='flex'>
          <p>Designed and Developed by me :)</p>
        </div>
        <p>Background art by <a href="">@mazkazov</a></p>
      </footer>
    </main>
  )
}

export default App
