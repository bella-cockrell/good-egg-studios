import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import logo from '../src/logo-animation.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='sprite'>
          <Spritesheet
            image={logo}
            widthFrame={74}
            heightFrame={98}
            steps={6}
            fps={6}
            autoplay={true}
            loop={true}
            isResponsive={true}
          />
        </div>
        <h1>
          Good Egg Studios coming soon
      </h1>
      </div>
    </div>
  );
}

export default App;
