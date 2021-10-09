import React from 'react';
import { render } from 'react-dom';

//import logo from '../assets/img/logo.svg';
// import './Popup.css';

console.log("this is test")
const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/pages/Popup/Popup.js</code> and save to reload.11232
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
		  this is test 
		  
        </a>
      </header>
    </div>
  );
};
export default Popup;

render(<Popup />, window.document.querySelector('#root-react'));
