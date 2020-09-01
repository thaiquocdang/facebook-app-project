import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    //BEM naming convention
    <div className="App">

      {/* HEADER Component */}
      <Header />

      {/* APP BODY */}
      <div className="app__body">
        {/* Side bar */}
        <Sidebar />
        {/* New Feeds */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
