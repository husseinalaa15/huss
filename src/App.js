import { useContext } from 'react';
import './App.css'
import { Mode, ThemeMode } from './Components/contextApi/ThemeMode';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Home from './Pages/Home';

function App() {

  return (
    <ThemeMode>
      <div className='overflow-hidden relative'>
      {/* <Navbar /> */}
      
        <div class="pattern-dots pattern-blue-500 pattern-bg-white 
        pattern-size-6 pattern-opacity-20"></div>
        
                <div className="absolute  top-0 right-4 w-72 h-72  bg-yellow-300  z-10 rounded-full mix-blend-overlay filter blur-xl opacity-40 animation-delay-2000 animate-blob ">
                </div>
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-300  z-10 rounded-full mix-blend-overlay filter blur-xl opacity-30 animation-delay-4000 animate-blob">
                </div>
                <div className={`absolute  bottom-8 right-40 w-72 h-72  bg-green-300   z-10  rounded-full mix-blend-overlay filter blur-xl opacity-40 animation-delay-2000 animate-blob`}>
                </div>
                <div className="absolute  xs:top-1/4  md:top:1/4   left-0 w-32 h-32 bg-pink-300 z-10  rounded-full  mix-blend-overlay filter blur-xl opacity-40 animation-delay-2000 animate-blob">
                </div>
                <div className="absolute  xs:bottom-2/4   md:top:1/4 right-0  w-72 h-72 bg-yellow-300 z-10  rounded-full  mix-blend-overlay filter blur-xl opacity-40 animation-delay-2000 animate-blob">
                </div>
          
            
            
          <Home />



      </div>

    </ThemeMode>
  );
}

export default App;
