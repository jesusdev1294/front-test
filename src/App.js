import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  
  useEffect(() => {
    // llamada api
    const getCall = async () => {
      return await axios.get('/user?ID=12345');
    }
    try {
      getCall();
    } catch(e) {
      console.log(e);
    }
    
    
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
