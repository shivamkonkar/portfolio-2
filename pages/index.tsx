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
      <main className='py-8 container mx-auto px-20'>
      <div className="grid grid-cols-1 gap-10 items-center justify-between sm:grid-cols-2 ">
        <img className = "justify-center w-96 rounded-full   my-7 "src="/3.png" alt="" />

        <div>
        <div className='text-center m-2 my-4'>I am Shivam Konkar and I am software developer :🧑‍💻</div>
        <div className="grid grid-cols-3 gap-1 w-24 mx-auto my-1">
            <a href="https://in.linkedin.com/in/shivam-konkar-96316a1b3">
              <img className='border border-black rounded-lg justify-self-center dark:border-white' src="https://img.icons8.com/color/48/null/linkedin.png" alt=''/>
            </a>

            <a href="https://github.com/shivamkonkar">
              <img className='border border-black rounded-lg justify-self-center dark:border-white' src="https://img.icons8.com/color-glass/48/null/github--v1.png" alt=''/>
            </a>
            <a href="https://leetcode.com/shivamkonkar25/">
              <img className='border border-black rounded-lg justify-self-center dark:border-white' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFC0lEQVR4nNWZbUxbVRjHD2aTcSEMynipt/fc0vbeW95aSoHyFjAEQrYZJU7FaUCzTENmTLaZzIkkzMT4QTONGmMobWmhZNpyaYF9MdkHTdQYPxg/uExeRkVeSgkJM4zIOtZjrgaDcF/quMDln/w/nuf8/s99zu3LAWCP1GBVw5JCYommDIimdLH6UvwGOCgqMx6jGUq7zjA02uwTleqrQOmy5Gca+OA5lxbhYaBkWQsy9UZKe58PnnOVGb8FlAzPiMBzZ6HRituAElVKZelE4WkDqjFnvwmUKIY8qqUN4vB1ZdmXgRKVp00jJeGt6neAEpWvS4dS8LWWnPeAEmXJE+88w1Cos013HSHwCDh4naeQ41IRWgzWoMhQZXTBb/GgLnAIKEFmSoUzFBkV7jyNPrtY+Df8ZkfY8jth1lS4r/Bl+Zk5Rloc/tMLBdvg/3WgMrrEllTsC3xhblY2YyDvicF/fH5757eHqLg/5zPVKA7+k/PczFejSKAqJhUiwlZEl/0my57AUxoVzhhExoamUHtz7i9hX379xpqZgTyKO7iRoaoHgiGGKu4t+C2mfYXn3vMtjXiP0Pqw32rjQIVD2NbmfcX5uwKv02VniY0N96p8rkHTK1WH6/Iia1sTHKkh25+LrFUtO7yRhmti8C80Ed54680NWo0RDlQgxAJb8o288JQ4/EsnNF/837rcuYiwtlX+Q106Kwu8wZCSyVDiY3P2Seh72PrzXgu5OFS+si2A3xKQgz8hj4Z/iMG3N8Mdb7Q0asYX2PLwpu7/hrqt2I7pK0zq62Lw557WjgIZteCzVEa85mJZiqlUqlSa1seE4C88m/sVULKqzY8FReCV/19OHk3e5QvQ/Dh5GxwAJVCUgecrgh65OyhcanEwGMwfDQa+HRkORkeHg0g2BwOro8FAkGXZLFEAtTrDyNf9KgtckYJHCCWMBgO3ZAUf/q9HhgN+UYiMjIx6rZZEW328Gp+TCjA4MECxfh/aTQ/6fXdFITDscHFi4qNoq0+WpyxLBfD19KicPXbksHfvmnudjjUpjsOpKYnbAhRosVg8P8j7Pe6R3YJ39tiR19sn/ZcMpUmK8j2Ftoa0QcnFAIBrXm+Lt8/t9no9/bLZ4+nx+Tx18ewPqguSf+ILQOYcQe++fOwMULqMELPyjdHGKH1wJq0VKF21ppRJvgCcGZiErrRmKDuELhtkGfCkB0IhuCdxpTW9RY69JuyEc9oNV6fdcGXCAT8CcqmyILUpW8U/ShshOl9UPbOTPSadxHdhL4k2e8xBdsgWoliPtWWmHxEOkYvFuk5nND9M7SkH/HErPOcpJxECcsqqx86KhtBiscun0p6Itx73eTLpIH7mgw//E0D+a6cyCntFKsQbp9KPS8J3gUNTLuKmEPx8P4nGuvGTYDdk1mOvZqYJhyjKxWKXTqc3icGHXHBMFN5JvA12U1YmqV3sSZj1WOzr94mLW9eNO0hLyAUXROHtsBPshWzGlHNiIXwdajTjgWshJzE95dJMTvcSd8L9/OBhzv0kmnAQe3vtVG5Mfk0ohO+tHGHYrZ33kmjcDvfn2qmCSX59awitOgmFXDBu+EkX/BDspxpLU58vY5LX01MTUZ0pBX1/FY8LftZDxsbtuDLuiW93645OOuAPc31kLB74UC/8fcyhqQVK083PcWrcofky5IJzMx4iOtsHY9zbZcYN16fdxPKEk7jxq514Su6N/wLrjQ0wbbQFOwAAAABJRU5ErkJggg==" alt=''/>
            </a>
            


           
          </div>
          <a href="https://drive.google.com/file/d/1qpGnu-zh_gHTt-vn8bLCNVZjshhIM95E/view?usp=drive_link">
              <h1 className='border border-black rounded-lg w-fit text-center mx-auto dark:border-white px-1 mb-7'>Resume 📰 </h1>
          </a>
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
