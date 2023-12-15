import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TestMeta from './components/TestMeta';

const root = ReactDOM.createRoot(document.getElementById('root'));
const meta = ReactDOM.createRoot(document.querySelector('head'));

meta.render(
  <React.StrictMode>
    <TestMeta title="Hello World" />
  </React.StrictMode>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
