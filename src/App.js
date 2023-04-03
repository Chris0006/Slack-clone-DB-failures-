import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>

      <Header/>
      <div className='app__body'>
          <Sidebar>
             
          </Sidebar>
        {/* Sidebar */}
        {/* Chat section */}
      </div>
      
      
    </div>
  );
}

export default App;
