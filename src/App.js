import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import logo from '../src/logo-animation.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
          <Spritesheet
            className='sprite'
            image={logo}
            widthFrame={74}
            heightFrame={98}
            steps={6}
            fps={6}
            autoplay={true}
            loop={true}
            isResponsive={true}
          />
        <h1>
          Welcome to Good Egg Studios
      </h1>
      </div>
    </div>
  );
}

export default App;
