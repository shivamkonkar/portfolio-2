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
        <div className='text-center m-2 '>Iam Shivam Konkar and Iam software developer :🧑‍💻</div>
        <div className="grid grid-cols-2 gap-1 w-24 mx-auto my-7">
            <a href="https://in.linkedin.com/in/shivam-konkar-96316a1b3">
              <img className='border border-black rounded-lg justify-self-center dark:border-white' src="https://img.icons8.com/color/48/null/linkedin.png" alt=''/>
            </a>

            <a href="https://github.com/shivamkonkar">
              <img className='border border-black rounded-lg justify-self-center dark:border-white' src="https://img.icons8.com/color-glass/48/null/github--v1.png" alt=''/>
            </a>

            <a href="https://www.instagram.com/bored_asf2023/?next=%2F">
              <img className='border border-black rounded-lg justify-self-center dark:border-white' src="https://img.icons8.com/fluency/48/null/instagram-new.png" alt=''/>
            </a>

            <a href="https://twitter.com/ShivamKonkar">
              <img className='border border-black rounded-lg justify-self-center dark:border-white' src="https://img.icons8.com/color/48/null/twitter--v1.png" alt=''/>
            </a>

          </div>
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
      <footer className=' bg-slate-800 p-3 text-white text-xs'>
        © 2023 Shivam Konkar
      </footer>
      
    </div>
  )
}

export default Home
