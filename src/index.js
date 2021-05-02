import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {ClockProvider,TimeProvider } from '../src/Components/ClockContext';

ReactDOM.render(
  <React.StrictMode>
    <ClockProvider>
      <TimeProvider>
        <App/>  
      </TimeProvider>
    </ClockProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
