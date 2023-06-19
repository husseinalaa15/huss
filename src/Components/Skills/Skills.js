import React, { useContext } from 'react'
import { Mode } from '../contextApi/ThemeMode';

const Skills = () => {
  const {lightMode} = useContext(Mode);

  return (

    <div className={`relative overflow-hidden flex  justify-center text-center min-h-screen  flex-col ${lightMode ? 'bg-secondaryLight' : 'bg-secondary'}  `} id="skills">
      <h1 className='text-4xl font-bold tracking-widest xs:mt-20 md:mt-10 text-text-primary'> Skills </h1>
        <div className='flex  xs:flex-col md:flex-row  flex-wrap  mt-24 pb-24'>
          <div className= 'sm:w-12/12 md:w-1/2 lg:w-6/12 xl:w-4/12 mt-5'>
            <div className={`card    xs:my-5 xs:mx-5 h-full  lg:mx-12 ${lightMode ? ' bg-white' : ' bg-primary'}  `}>
              <p className={`text-2xl ${lightMode ? ' text-text-secondary ' : ' text-text-primary '} border-b-2 border-text-secondary pb-3 mb-5`}>
                Front End Skills 
              </p>
              <div className='flex flex-wrap justify-center'>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../html.png" className='w-10 pb-1' alt='html'/>
                  <p className='text-sm font-bold text-text-primary'>HTML</p>
                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../css.png" className='w-10 pb-1' alt='CSS'/>
                  <p className='text-sm font-bold text-text-primary'>CSS</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../js.png" className='w-10 pb-1' alt='Javascript'/>
                  <p className='text-sm font-bold text-text-primary'>JavaScript</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../bs.png" className='w-10 pb-1' alt='bootstrap'/>
                  <p className='text-sm font-bold text-text-primary'>Bootstrap</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../sass.png" className='w-10 pb-1'alt='sass'/>
                  <p className='text-sm font-bold text-text-primary'>Sass</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../react.png" className='w-10 pb-1'alt='react'/>
                  <p className='text-sm font-bold text-text-primary'>React</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../angular.png" className='w-10 pb-1'alt='angular'/>
                  <p className='text-sm font-bold text-text-primary'>Angular</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../react.png" className='w-10 pb-1'alt='react Native'/>
                  <p className='text-sm font-bold text-text-primary'>React Native</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../jasmine.svg" className='w-10 pb-1' alt='jasmine'/>
                  <p className='text-sm font-bold text-text-primary'>Jasmine</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../jest.png" className='w-10 pb-1'alt='jest'/>
                  <p className='text-sm font-bold text-text-primary'>Jest</p>

                </div>
                
              </div>
            </div>

          </div>
          <div className= 'sm:w-12/12 md:w-1/2 lg:w-6/12 xl:w-4/12 mt-5'>
            <div className={`card    xs:my-5 xs:mx-5 h-full  lg:mx-12 ${lightMode ? ' bg-white' : ' bg-primary'}  `}>
            <p className={`text-2xl ${lightMode ? ' text-text-secondary ' : ' text-text-primary '} border-b-2 border-text-secondary pb-3 mb-5`}>
                Back End Skills 
              </p>
              <div className='flex flex-wrap justify-center'>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../node.png" className='w-10 pb-1'alt='node'/>
                  <p className='text-sm font-bold text-text-primary'>Node JS</p>
                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../express.png" className='w-10 pb-1'alt='express'/>
                  <p className='text-sm font-bold text-text-primary'>Express</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../mongodb.png" className='w-10 pb-1'alt='mongodb'/>
                  <p className='text-sm font-bold text-text-primary'>Mongodb</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../php.png" className='w-10 pb-1'alt='php'/>
                  <p className='text-sm font-bold text-text-primary'>php</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../mysql.png" className='w-10 pb-1'alt='mysql'/>
                  <p className='text-sm font-bold text-text-primary'>Mysql</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../graphql.png" className='w-10 pb-1'alt='graphql'/>
                  <p className='text-sm font-bold text-text-primary'>Graphql</p>

                </div>

                
              </div>
            </div>
          </div>
          <div className= 'sm:w-12/12 md:w-1/2 lg:w-6/12 xl:w-4/12 mt-5'>
            <div className={`card    xs:my-5 xs:mx-5 h-full lg:mx-12 ${lightMode ? ' bg-white' : ' bg-primary'}  `}>
            <p className={`text-2xl ${lightMode ? ' text-text-secondary ' : ' text-text-primary '} border-b-2 border-text-secondary pb-3 mb-5`}>
                Besides 
              </p>
              <div className='flex flex-wrap justify-center'>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../git.png" className='w-10 pb-1'alt='git'/>
                  <p className='text-sm font-bold text-text-primary'>Git</p>
                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../heroku.png" className='w-10 pb-1'alt='heroku'/>
                  <p className='text-sm font-bold text-text-primary'>Heroku</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../moodle.png" className='w-10 pb-1'alt='moodle'/>
                  <p className='text-sm font-bold text-text-primary'>Moodle</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../wp.png" className='w-10 pb-1'alt='wordpress'/>
                  <p className='text-sm font-bold text-text-primary'>Wordpress</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../figma.png" className='w-10 pb-1'alt='figma'/>
                  <p className='text-sm font-bold text-text-primary'>Figma</p>

                </div>
                <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                  <img src="../ps.png" className='w-10 pb-1'alt='Photoshop'/>
                  <p className='text-sm font-bold text-text-primary'>Photoshop</p>

                </div>
            
                
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Skills