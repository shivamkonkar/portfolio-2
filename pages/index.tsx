import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import img from '../public/2.jpg'

const Home: NextPage = () => {
  return (
    <div className="Parent">
      <nav className='shadow-lg sticky top-0 bg-white'>
        <h1 className="logo"> 🚀  Shivam's Portfolio</h1>
      </nav>
      <main className='p-8 container mx-auto'>
      <div className="grid grid-cols-1 gap-10 items-center sm:grid-cols-2 ">
        <img className = "justify-center w-96 rounded-full   my-7 "src="/2.jpg" alt="" />
  
        <div className='text-center m-2 '>Iam Shivam Konkar and Iam software developer :🧑‍💻</div>
      </div>

      <div className="container mx-auto bg-slate-500 pt-3 pb-6 rounded-lg  font-semibold text-white">
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
