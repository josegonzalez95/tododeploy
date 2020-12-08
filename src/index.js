import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import background from '/home/jose/Documents/progProjects/newtodo/src/backgroundImg.jpg';

ReactDOM.render(
  <React.StrictMode
    style={{
      // backgroundImage: `url(${background})`,
      backgroundImage: `url({./backgoundImg})`,
    }}
  >
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
