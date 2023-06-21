import React,{useContext, useState} from 'react'
import { Mode } from '../contextApi/ThemeMode';

const Projects = () => {

    const [toggleTabs,setToggleTabs] = useState(0)
    const {lightMode} = useContext(Mode);

  return (

    <div className={`relative overflow-hidden flex  justify-center text-center min-h-screen flex-col  ${lightMode ? 'light-color' : ' bg-primary'}`}   id="projects">
      <h2 className='text-4xl font-bold tracking-widest text-text-primary mt-10'> Projects </h2>

      <div className="  mb-4 z-10">
        <ul className="flex flex-wrap -mb-px justify-center mt-9   " id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li className={`mr-2 `} role="presentation">
                <button  onClick={()=>{setToggleTabs(0)}} 
                className={
                    `
                    inline-block 
                    text-gray-500 hover:text-text-secondary hover:border-text-secondary 
                    rounded-t-lg 
                    py-4 px-4 
                    text-sm font-medium text-center border-transparent border-b-2 
                    dark:text-gray-400 dark:hover:text-gray-300 
                    tracking-tight
                    
                    ${toggleTabs == 0 ? "  text-text-secondary tracking-widest font-bold border-text-secondary hover:text-blue-600" : ""}
                    `
                    } 
                    id="mern" data-tabs-target="#mern" type="button" role="tab" aria-controls="mern" aria-selected="false">
                        Mern
                    </button>
            </li>
            <li className={`mr-2 `} role="presentation">
                <button  onClick={()=>{setToggleTabs(1)}} 
                    className={
                        `
                        inline-block 
                        text-gray-500 hover:text-text-secondary hover:border-text-secondary 
                        rounded-t-lg 
                        py-4 px-4 
                        text-sm font-medium text-center border-transparent border-b-2 
                        dark:text-gray-400 dark:hover:text-gray-300 
                        tracking-tight
                        
                        ${toggleTabs == 1 ? "  text-text-secondary tracking-widest font-bold border-text-secondary hover:text-blue-600" : ""}
                        `
                        } 
                    id="react" data-tabs-target="#react" type="button" role="tab" aria-controls="react" aria-selected="false">
                React
                </button>
            </li>
            <li className={`mr-2 `} role="presentation">
                <button  onClick={()=>{setToggleTabs(2)}} 
                    className={
                        `
                        inline-block 
                        text-gray-500 hover:text-text-secondary hover:border-text-secondary 
                        rounded-t-lg 
                        py-4 px-4 
                        text-sm font-medium text-center border-transparent border-b-2 
                        dark:text-gray-400 dark:hover:text-gray-300 
                        tracking-tight
                        
                        ${toggleTabs == 2 ? "  text-text-secondary tracking-widest font-bold border-text-secondary hover:text-blue-600" : ""}
                        `
                        } 
                    id="nodejs" data-tabs-target="#nodejs" type="button" role="tab" aria-controls="nodejs" aria-selected="false">
                Node.js
                </button>
            </li>
            <li className="mr-2" role="presentation">
                <button onClick={()=>{setToggleTabs(3)}} 
                    className={
                        `
                        inline-block 
                        text-gray-500 hover:text-text-secondary hover:border-text-secondary 
                        rounded-t-lg 
                        py-4 px-4 
                        text-sm font-medium text-center border-transparent border-b-2 
                        dark:text-gray-400 dark:hover:text-gray-300 
                        tracking-tight
                        
                        ${toggleTabs == 3 ? "  text-text-secondary tracking-widest font-bold border-text-secondary hover:text-blue-600" : ""}
                        `
                        } 
                    id="angular" data-tabs-target="#angular" type="button" role="tab" aria-controls="angular" aria-selected="false">
                    Angular
                </button>
            </li>
            <li className="mr-2" role="presentation">
                <button  onClick={()=>{setToggleTabs(4)}}
                   className={
                    `
                    inline-block 
                    text-gray-500 hover:text-text-secondary hover:border-text-secondary 
                    rounded-t-lg 
                    py-4 px-4 
                    text-sm font-medium text-center border-transparent border-b-2 
                    dark:text-gray-400 dark:hover:text-gray-300 
                    tracking-tight
                    
                    ${toggleTabs == 4 ? "  text-text-secondary tracking-widest font-bold border-text-secondary hover:text-blue-600" : ""}
                    `
                    } 
                    id="js" data-tabs-target="#js" type="button" role="tab" aria-controls="js" aria-selected="false">
                    JavaScript
                </button>
            </li>
            <li className="mr-2" role="presentation">
                <button  onClick={()=>{setToggleTabs(5)}}
                    className={
                        `
                        inline-block 
                        text-gray-500 hover:text-text-secondary hover:border-text-secondary 
                        rounded-t-lg 
                        py-4 px-4 
                        text-sm font-medium text-center border-transparent border-b-2 
                        dark:text-gray-400 dark:hover:text-gray-300 
                        tracking-tight
                        
                        ${toggleTabs == 5 ? "  text-text-secondary tracking-widest font-bold border-text-secondary hover:text-blue-600" : ""}
                        `
                        } 
                    id="htmlcss" data-tabs-target="#htmlcss" type="button" role="tab" aria-controls="htmlcss" aria-selected="false">
                    Html/Css
                </button>
            </li>
            <li role="presentation">
                <button  onClick={()=>{setToggleTabs(6)}}
                className={
                    `
                    inline-block 
                    text-gray-500 hover:text-text-secondary hover:border-text-secondary 
                    rounded-t-lg 
                    py-4 px-4 
                    text-sm font-medium text-center border-transparent border-b-2 
                    dark:text-gray-400 dark:hover:text-gray-300 
                    tracking-tight
                    
                    ${toggleTabs == 6 ? "  text-text-secondary tracking-widest font-bold border-text-secondary hover:text-blue-600" : ""}
                    `
                    } 
                    id="php" data-tabs-target="#mern" type="button" role="tab" aria-controls="php" aria-selected="false">
                    PHP
                </button>
            </li>
        </ul>
    </div>
    <div className='mt-5 lg:p-[50px]' id="myTabContent">
            <div 
            className={` flex justify-center   p-4 rounded-lg  flex-wrap ${toggleTabs == 0 ? "bg-dark" : "hidden"}`}   
            id="merntab" role="tabpanel" aria-labelledby="mern">
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/mern.jpg" alt="mern"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>E-Bookalypse</p>
                            <a target="_blank" href="https://ebookalypse.herokuapp.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
             
          
               
            </div>

            <div 
            className={` flex justify-center flex-wrap  p-4 rounded-lg dark:bg-gray-800 ${toggleTabs == 1 ? "bg-dark" : "hidden"}`}   
            id="reacttab" role="tabpanel" aria-labelledby="react">
                  <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/mern.jpg" alt="mern"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>E-Bookalypse</p>
                            <a target="_blank" href="https://ebookalypse.herokuapp.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/moviesclub.jpg" alt="moviesclub"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Movies Club</p>
                            <a target="_blank" href="https://husseinalaa15.github.io/MoviesClub/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/portfolio22.png" alt="portfolio22"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Portfolio </p>
                            <a target="_blank" href="https://husseinalaa15.github.io/portfolio22/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full z-20">
                    <div className='card  lg:mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/todoreact.jpg" alt="todoreact"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Todos</p>
                            <a target="_blank" href="https://husseinalaa15.github.io/todolist-react/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
              
            </div>
            <div 
            className={` flex justify-center flex-wrap  p-4 rounded-lg dark:bg-gray-800 ${toggleTabs == 2 ? "bg-dark" : "hidden"}`}   
            id="nodejstab" role="tabpanel" aria-labelledby="nodejs">
                  <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/mern.jpg" alt="mern"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>E-Bookalypse</p>
                            <a target="_blank" href="https://ebookalypse.herokuapp.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/chatapp.jpg" alt="chatapp"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Chat App</p>
                            <a target="_blank" href="https://chatapp-iti.herokuapp.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
             
              
            </div>
            <div 
            className={` flex justify-center  p-4 rounded-lg dark:bg-gray-800 ${toggleTabs == 3 ? "bg-dark" : "hidden"}`}   
            id="angulartab" role="tabpanel" aria-labelledby="angular">
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/ourblog.jpg" alt="ourblog"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>E-Bookalypse</p>
                            <a target="_blank" href="https://husseinalaa15.github.io/ourBlog/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
             
            </div>
            <div 
            className={` flex justify-center  flex-wrap p-4 rounded-lg dark:bg-gray-800 ${toggleTabs == 4 ? "bg-dark" : "hidden"}`}   
            id="jstab" role="tabpanel" aria-labelledby="js">
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/hmdb.jpg" alt="hmdb"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>HMDB</p>
                            <a target="_blank" href="https://husseinalaa15.github.io/HMDB/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/todos.jpg" lat="todos"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Todos</p>
                            <a target="_blank" href="https://husseinalaa15.github.io/todos/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/weather.jpg" alt='weather'/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Weather App</p>
                            <a target="_blank" href="https://husseinalaa15.github.io/Weather-App/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/github.jpg" alt='github'/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Github Users</p>
                            <a target="_blank" href="https://husseinalaa15.github.io/Github-users/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
               
            </div>
            <div 
            className={` flex justify-center flex-wrap p-4 rounded-lg dark:bg-gray-800 ${toggleTabs == 5 ? "bg-dark" : "hidden"}`}   
            id="htmlcsstab" role="tabpanel" aria-labelledby="htmlcss">
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/luxestate.jpg" alt='luxestate'/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Luxestate</p>
                            <a target="_blank" href="https://husseinalaa15.github.io/luxestate/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/htmlcss.jpg" alt="htmlcss"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Untitled</p>
                            <a target="_blank" href="https://husseinalaa15.github.io/Html-Css/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full z-10">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/responsivehtmlcss.jpg" alt='responsivehtmlcss'/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Rocker</p>
                            <a target="_blank" href="https://husseinalaa15.github.io/html-css-Responsive/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
              
            </div>
            <div 
            className={` flex justify-center flex-wrap  p-5 rounded-lg dark:bg-gray-800 ${toggleTabs == 6 ? "bg-dark" : "hidden"}`}   
            id="phptab" role="tabpanel" aria-labelledby="php">
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/manpower.jpg" alt="manpower"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Manpower</p>
                            <a target="_blank" href="https://manpoweracademy.nitg-eg.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/medada.jpg" alt="medada"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Medadaa</p>
                            <a target="_blank" href="https://medadaa.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/3lm.jpg" alt="3lm"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>3lm Academy</p>
                            <a target="_blank" href="https://3lm.academy/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/nitg.jpg" alt="nitg"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>NITG</p>
                            <a target="_blank" href="https://nitg-eg.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/academy.jpg" alt='academy'/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Academy </p>
                            <a target="_blank" href="https://academy.nitg-eg.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/B&G.jpg" alt='bg'/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Bride & Groom </p>
                            <a target="_blank" href="https://husseinalaa15.github.io/Bride-Groom/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full z-10">
                    <div className='card  lg:mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/elnady.jpg" alt='elnady'/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <p className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>El-Nady </p>
                            <a target="_blank" href="https://husseinalaa15.github.io/el-nady/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>

              
            </div>
           
    </div>
  
    </div>

  )
}

export default Projects