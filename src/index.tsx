import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Game from './Componet/Game'
ReactDOM.render(
  <React.StrictMode>
    <div className='GameLayout'>
    <Game />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
