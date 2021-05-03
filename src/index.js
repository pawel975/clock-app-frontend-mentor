import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {ClockProvider } from '../src/Components/ClockContext';

ReactDOM.render(
  <React.StrictMode>
    <ClockProvider>
      <App/>  
    </ClockProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
