import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './nini.jsx'
import App, {Airbnb1,Ebay1,Ebay,PayPal,PayPal1} from './App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Airbnb1/>
    <Ebay1/>
    <Ebay/>
    <PayPal/>
    <PayPal1/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
