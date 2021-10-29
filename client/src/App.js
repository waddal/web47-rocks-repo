// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState(''); 

  useEffect(() => {
    fetch('/api/foo')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        { message }
      </header>
    </div>
  );
}

export default App;
