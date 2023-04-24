/* This example requires Tailwind CSS v2.0+ */
import { AiFillGithub, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import  './Hero.css'
import Navbar from '../Navbar'

export default function Example() {
  return (
      <>
      <Navbar />
    <div className="relative overflow-hidden height100vh main-color"  id="HeroSection">
         
        
{/* #502124
  #244144
  #6B4B24
*/}
      <div className="max-w-7xl h-full flex items-center overflow-hidden mx-auto" id="Home">
        <div className="relative   sm:pb-16  lg:max-w-2xl ">
      

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-5xl  xl:inline text-text-primary">Hello I'm <br></br></span>{' '}
                <span className="block text-text-secondary xl:inline  ">Hussein Alaa</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I am a Frontend Web Developer , I have Industry experience in building web applications and websites, I had worked on many different E-Commerce projects as well as fintech applications.
I have a great passion about web development, which reflects on my commitment and quality.
Do not hesitate to hire me.

              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center  lg:justify-start">
                <div className="rounded-md shadow z-20">
                  <a
                    href="mailto:hussein.alaa12199@gmail.com"
                    className="w-full  flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white btn-main-color hover:btn-main-color-400 transition-all   md:py-4 md:text-lg md:px-10"
                  >
                    Let's Talk
                  </a>
                 
                </div>
                <div className="flex text-text-secondary justify-center items-baseline pl-2  text-5xl">
                  <span className=' font-medium  pr-2 xs:opacity-0 md:opacity-100'> | </span>
                  <a href="https://github.com/husseinalaa15" target="_blank" className='text-text-primary text-3xl hover:text-text-secondary transition-all pr-3' ><AiFillGithub /></a>
                  <a href="https://www.linkedin.com/in/hussein-alaa-4511861b0/" target="_blank" className='text-text-primary text-3xl hover:text-text-secondary transition-all pr-3' ><AiOutlineLinkedin /></a>
                  <a href="https://wa.me/+201150370370" target="_blank" className='text-text-primary text-3xl hover:text-text-secondary transition-all pr-3' ><AiOutlineWhatsApp /></a>
                  <a href="https://www.facebook.com/hussein.alaa.1272/" target="_blank" className='text-text-primary text-3xl hover:text-text-secondary transition-all pr-3' ><AiOutlineFacebook /></a>
                  <a href="https://twitter.com/Heezy_98" target="_blank" className='text-text-primary text-3xl hover:text-text-secondary transition-all pr-3' ><AiOutlineTwitter /></a>
                  <a href="https://www.instagram.com/heezyf15/" target="_blank" className='text-text-primary text-3xl hover:text-text-secondary transition-all pr-3' ><AiOutlineInstagram /></a>

                </div>
                
              
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute  flex justify-center items-center lg:inset-y-0 lg:right-0 lg:w-1/2">
      
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 120" width="50%" className="heroSectionSvg">
          <title>Hussein Alaa</title>
          <defs>
            <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
              <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z" />
            </clipPath>
            <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
              <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
            </clipPath>
          </defs>
          <g  clip-path="url(#maskImage)" className="svgImages" transform="translate(0 -7)">
            <image  clip-path="url(#maskBackground)" width="180" height="120" x="70" y="32" href="../bg.jpg" transform="translate(-90 -31)" />
            <image x="0" style={{width:'100%', height:'100%'}} y="0" fill="none" className="husseinImgSvg" href="../hussein.png" />
            {/*  width="120" height="144" */}
          </g>
        </svg>
        
      </div>
      
        
    </div>
    </>

  )
}
