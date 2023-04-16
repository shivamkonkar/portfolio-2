import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import img from '../public/2.jpg'
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';


const Home: NextPage = () => {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;


  return (
    <div className="Parent">
      <nav className='j shadow-lg sticky top-0 bg-white dark:bg-black dark:text-white dark:bg-none flex justify-between items-center'>
        <h1 className="logo "> 🚀  Shivam's Portfolio</h1>

        <div className="m-2 ">


        {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black w-14 h-14 rounded-full border-purple-400 border-2 p-4"
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image  src="https://raw.githubusercontent.com/vlahou89/dark-mode-nextjs-tailwind/606e51ae09fc23022662839cfcfaba996350fff9/public/sun.svg" width={"30"} height={"30"} alt="logo" />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-14 h-14 rounded-full border-purple-400 border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <Image  src="https://raw.githubusercontent.com/vlahou89/dark-mode-nextjs-tailwind/606e51ae09fc23022662839cfcfaba996350fff9/public/moon.svg" width={"30"} height={"30"} alt="logo" />
            </button>
          )}
          </div>

      </nav>
      <main className='p-8 container mx-auto'>
      <div className="grid grid-cols-1 gap-10 items-center justify-between sm:grid-cols-2 ">
        <img className = "justify-center w-96 rounded-full   my-7 "src="/2.jpg" alt="" />

        <div>
        <div className='text-center m-2 '>I am Shivam Konkar and I am software developer :🧑‍💻</div>
        <div className="grid grid-cols-2 gap-1 w-24 mx-auto my-1">
            <a href="https://in.linkedin.com/in/shivam-konkar-96316a1b3">
              <img className='border border-black rounded-lg justify-self-center dark:border-white' src="https://img.icons8.com/color/48/null/linkedin.png" alt=''/>
            </a>

            <a href="https://github.com/shivamkonkar">
              <img className='border border-black rounded-lg justify-self-center dark:border-white' src="https://img.icons8.com/color-glass/48/null/github--v1.png" alt=''/>
            </a>

           
          </div>
          <a href="https://drive.google.com/file/d/1U-niZcRTudg6L45WY63LsYYjowzNl6hM/view?usp=share_link">
              <h1 className='border border-black rounded-lg w-fit text-center mx-auto dark:border-white px-1 mb-7'>Resume 📰 </h1>
          </a>
          </div>
      </div>

      <div className="container mx-auto bg-slate-500 pt-3 pb-6 rounded-lg text-xl font-semibold text-white dark:bg-purple-700 dark:text-black">
        <h2 className='text-center m-2 p-2 '>Technologies I can use</h2>
        <div className='technologies grid grid-cols-2 gap-10 items-center sm:grid-cols-3 '>
          <div className="javascript border border-white rounded-lg justify-self-center">
            <img src="https://img.icons8.com/color/48/null/javascript--v1.png" alt="" />
          </div>
          <div className="python border border-white rounded-lg justify-self-center">
            <img src="https://img.icons8.com/color/48/null/python--v1.png" alt=''/>
          </div>
          <div className='java border border-white rounded-lg justify-self-center'>
            <img src="https://img.icons8.com/fluency/48/null/java-coffee-cup-logo.png" alt=''/>
          </div>
          <div className="c border border-white rounded-lg justify-self-center">
            <img src="https://img.icons8.com/fluency/48/null/c-plus-plus-logo.png" alt=''/>
          </div>
          <div className="html border border-white rounded-lg justify-self-center">
            <img src="https://img.icons8.com/color/48/null/html-5--v1.png" alt=''/>
          </div>
          <div className="dbms border border-white rounded-lg justify-self-center">
           <img src="https://img.icons8.com/color/48/null/mongodb.png" alt=''/>
          </div>


      </div>
      </div>

      
        
      </main>
              <section className="text-gray-600 body-font ">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-purple-400">Contact Me</h1>
        
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <form action="https://formspree.io/f/mqkobwgv" method="post">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-purple-400">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-100 dark:bg-[#121212] dark:focus:bg-slate-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" wtx-context="78CD4E24-5D56-413E-8068-87BDC02576E5" required/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-purple-400">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-100 dark:bg-[#121212] dark:focus:bg-slate-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" wtx-context="E6B2C260-E36D-4131-8583-3334B0E4E897" required/>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-purple-400">Message</label>
              <textarea id="message" name="message" className="w-full bg-gray-100 dark:bg-[#121212] dark:focus:bg-slate-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 dark:text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button type="submit" className="flex mx-auto text-white dark:bg-purple-600 bg-[#121212] border-0 py-2 px-8 focus:outline-none hover:bg-black dark:hover:bg-purple-800 rounded text-lg">Send 📧 </button>
          </div>
         
        </div>
        </form>
      </div>
    </div>
  </section>
      <footer className=' bg-slate-800 p-3 text-white text-xs'>
        © 2023 Shivam Konkar
      </footer>
      
    </div>
  )
}

export default Home
