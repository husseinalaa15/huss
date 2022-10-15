import React from 'react'

const Skills = () => {
  return (

    <div className="relative overflow-hidden flex  justify-center text-center min-h-screen  flex-col bg-secondary "   id="skills">
      <h1 className='text-4xl font-bold tracking-widest xs:mt-20 md:mt-10 text-text-primary'> Skills </h1>
        <div className='flex  xs:flex-col md:flex-row  mt-24'>
          
          <div className='card    xs:my-5 xs:mx-5 md:w-4/12 lg:mx-12 bg-primary  '>
            <h5 className='text-2xl text-text-primary border-b-2 border-text-secondary pb-3 mb-5'>
              Front End Skills 
            </h5>
            <div className='flex flex-wrap justify-center'>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../html.png" className='w-10 pb-1' alt='html'/>
                <h3 className='text-sm font-bold text-text-primary'>HTML</h3>
              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../css.png" className='w-10 pb-1' alt='CSS'/>
                <h3 className='text-sm font-bold text-text-primary'>CSS</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../js.png" className='w-10 pb-1' alt='Javascript'/>
                <h3 className='text-sm font-bold text-text-primary'>JavaScript</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../bs.png" className='w-10 pb-1' alt='bootstrap'/>
                <h3 className='text-sm font-bold text-text-primary'>Bootstrap</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../sass.png" className='w-10 pb-1'alt='sass'/>
                <h3 className='text-sm font-bold text-text-primary'>Sass</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../react.png" className='w-10 pb-1'alt='react'/>
                <h3 className='text-sm font-bold text-text-primary'>React</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../angular.png" className='w-10 pb-1'alt='angular'/>
                <h3 className='text-sm font-bold text-text-primary'>Angular</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../react.png" className='w-10 pb-1'alt='react Native'/>
                <h3 className='text-sm font-bold text-text-primary'>React Native</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../jasmine.svg" className='w-10 pb-1' alt='jasmine'/>
                <h3 className='text-sm font-bold text-text-primary'>Jasmine</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../jest.png" className='w-10 pb-1'alt='jest'/>
                <h3 className='text-sm font-bold text-text-primary'>Jest</h3>

              </div>
              
            </div>
          </div>
          <div className='card   xs:my-5 xs:mx-5 md:w-4/12 lg:mx-12 bg-primary'>
            <h5 className='text-2xl border-b-2 border-text-secondary pb-3 mb-5 text-text-primary'>
              Back End Skills 
            </h5>
            <div className='flex flex-wrap justify-center'>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../node.png" className='w-10 pb-1'alt='node'/>
                <h3 className='text-sm font-bold text-text-primary'>Node JS</h3>
              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../express.png" className='w-10 pb-1'alt='express'/>
                <h3 className='text-sm font-bold text-text-primary'>Express</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../mongodb.png" className='w-10 pb-1'alt='mongodb'/>
                <h3 className='text-sm font-bold text-text-primary'>Mongodb</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../php.png" className='w-10 pb-1'alt='php'/>
                <h3 className='text-sm font-bold text-text-primary'>php</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../mysql.png" className='w-10 pb-1'alt='mysql'/>
                <h3 className='text-sm font-bold text-text-primary'>Mysql</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../graphql.png" className='w-10 pb-1'alt='graphql'/>
                <h3 className='text-sm font-bold text-text-primary'>Graphql</h3>

              </div>

              
            </div>
          </div>
          <div className='card xs:my-5 xs:mx-5 md:w-4/12 lg:mx-12 bg-primary'>
            <h5 className='text-2xl border-b-2 text-text-primary border-text-secondary mb-5 pb-3'>
              Besides 
            </h5>
            <div className='flex flex-wrap justify-center'>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../git.png" className='w-10 pb-1'alt='git'/>
                <h3 className='text-sm font-bold text-text-primary'>Git</h3>
              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../heroku.png" className='w-10 pb-1'alt='heroku'/>
                <h3 className='text-sm font-bold text-text-primary'>Heroku</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../moodle.png" className='w-10 pb-1'alt='moodle'/>
                <h3 className='text-sm font-bold text-text-primary'>Moodle</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../wp.png" className='w-10 pb-1'alt='wordpress'/>
                <h3 className='text-sm font-bold text-text-primary'>Wordpress</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../figma.png" className='w-10 pb-1'alt='figma'/>
                <h3 className='text-sm font-bold text-text-primary'>Figma</h3>

              </div>
              <div className='w-3/12 flex flex-col items-center justify-center mt-3'>
                <img src="../ps.png" className='w-10 pb-1'alt='Photoshop'/>
                <h3 className='text-sm font-bold text-text-primary'>Photoshop</h3>

              </div>
           
              
            </div>
          </div>
        </div>
    </div>

  )
}

export default Skills