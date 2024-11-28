import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Btn from './Components/Btn';
import Sessao from './Components/Section'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Sessao tipo="center" />
    <Btn tipo="red" />
    <Btn tipo="blue" />
    <Btn tipo="black" />
    <Btn tipo="white" />
  </React.StrictMode>
);
