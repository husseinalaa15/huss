import React,{useState} from 'react'

const Projects = () => {

    const [toggleTabs,setToggleTabs] = useState(0)

  return (

    <div className="relative overflow-hidden flex  justify-center text-center min-h-screen flex-col bg-primary"   id="projects">
      <h1 className='text-4xl font-bold tracking-widest text-text-primary mt-10'> Projects </h1>

      <div class="  mb-4 z-10">
        <ul class="flex flex-wrap -mb-px justify-center mt-9" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li class={`mr-2 `} role="presentation">
                <button  onClick={()=>{setToggleTabs(0)}} 
                class={
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
            <li class={`mr-2 `} role="presentation">
                <button  onClick={()=>{setToggleTabs(1)}} 
                    class={
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
            <li class={`mr-2 `} role="presentation">
                <button  onClick={()=>{setToggleTabs(2)}} 
                    class={
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
                    id="nodejs" data-tabs-target="#nodejs" type="button" role="tab" aria-controls="nodejs" aria-selected="nodejs">
                Node.js
                </button>
            </li>
            <li class="mr-2" role="presentation">
                <button onClick={()=>{setToggleTabs(3)}} 
                    class={
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
            <li class="mr-2" role="presentation">
                <button  onClick={()=>{setToggleTabs(4)}}
                   class={
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
            <li class="mr-2" role="presentation">
                <button  onClick={()=>{setToggleTabs(5)}}
                    class={
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
                class={
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
    <div className='mt-5' id="myTabContent">
            <div 
            class={` flex justify-center   p-4 rounded-lg  flex-wrap ${toggleTabs == 0 ? "bg-dark" : "hidden"}`}   
            id="mern" role="tabpanel" aria-labelledby="mern">
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/mern.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>E-Bookalypse</h3>
                            <a target="_blank" href="https://ebookalypse.herokuapp.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
             
          
               
            </div>

            <div 
            class={` flex justify-center flex-wrap  p-4 rounded-lg dark:bg-gray-800 ${toggleTabs == 1 ? "bg-dark" : "hidden"}`}   
            id="react" role="tabpanel" aria-labelledby="react">
                  <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/mern.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>E-Bookalypse</h3>
                            <a target="_blank" href="https://ebookalypse.herokuapp.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/moviesclub.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Movies Club</h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/MoviesClub/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/portfolio22.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Portfolio </h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/portfolio22/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full z-20">
                    <div className='card  mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/todoreact.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Todos</h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/todolist-react/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
              
            </div>
            <div 
            class={` flex justify-center flex-wrap  p-4 rounded-lg dark:bg-gray-800 ${toggleTabs == 2 ? "bg-dark" : "hidden"}`}   
            id="nodejs" role="tabpanel" aria-labelledby="nodejs">
                  <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/mern.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>E-Bookalypse</h3>
                            <a target="_blank" href="https://ebookalypse.herokuapp.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/chatapp.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Chat App</h3>
                            <a target="_blank" href="https://chatapp-iti.herokuapp.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
             
              
            </div>
            <div 
            class={` flex justify-center  p-4 rounded-lg dark:bg-gray-800 ${toggleTabs == 3 ? "bg-dark" : "hidden"}`}   
            id="angular" role="tabpanel" aria-labelledby="angular">
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-2 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/ourblog.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>E-Bookalypse</h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/ourBlog/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
             
            </div>
            <div 
            class={` flex justify-center  flex-wrap p-4 rounded-lg dark:bg-gray-800 ${toggleTabs == 4 ? "bg-dark" : "hidden"}`}   
            id="js" role="tabpanel" aria-labelledby="js">
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/hmdb.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>HMDB</h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/HMDB/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/todos.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Todos</h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/todos/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/weather.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Weather App</h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/Weather-App/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/github.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Github Users</h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/Github-users/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
               
            </div>
            <div 
            class={` flex justify-center flex-wrap p-4 rounded-lg dark:bg-gray-800 ${toggleTabs == 5 ? "bg-dark" : "hidden"}`}   
            id="htmlcss" role="tabpanel" aria-labelledby="htmlcss">
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/luxestate.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Luxestate</h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/luxestate/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/htmlcss.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Untitled</h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/Html-Css/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full z-10">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/responsivehtmlcss.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Rocker</h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/html-css-Responsive/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
              
            </div>
            <div 
            class={` flex justify-center flex-wrap  p-5 rounded-lg dark:bg-gray-800 ${toggleTabs == 6 ? "bg-dark" : "hidden"}`}   
            id="php" role="tabpanel" aria-labelledby="php">
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/medada.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Medadaa</h3>
                            <a target="_blank" href="https://medadaa.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/3lm.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>3lm Academy</h3>
                            <a target="_blank" href="https://3lm.academy/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/nitg.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>NITG</h3>
                            <a target="_blank" href="https://nitg-eg.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/academy.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Academy </h3>
                            <a target="_blank" href="https://academy.nitg-eg.com/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/B&G.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>Bride & Groom </h3>
                            <a target="_blank" href="https://husseinalaa15.github.io/Bride-Groom/" className='py-4 rounded-md px-20 bg-transparent text-text-primary border-2 border-text-primary text-white font-medium tracking-widest hover:bg-text-secondary hover:border-text-secondary transition-all m-5 text-center'>View</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 xs:w-full z-10">
                    <div className='card  mr-5 mt-5 p-0  relative group rounded-xl ' >
                            <img  className="rounded-xl" src="../Images/elnady.png"/>
                        <div className='absolute rounded-xl top-0 left-0  opacity-0 flex flex-col group-hover:opacity-100  transition-all justify-center items-center bottom-0 right-0 h-full bg-opacity-60 bg-primary'>
                            <h3 className='text-text-primary font-bold text-3xl border-b-2 border-text-primary pb-5 border-'>El-Nady </h3>
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