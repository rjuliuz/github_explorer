import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RequestProvider } from './context/GlobalProfileData';


ReactDOM.render(
  <React.StrictMode>
    <RequestProvider>
      <App />
    </RequestProvider>   
  </React.StrictMode>,
  document.getElementById('root')
);


