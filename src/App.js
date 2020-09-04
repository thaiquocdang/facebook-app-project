import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login'
import { useStateValue } from './API/StateProvider';

function App() {
  // let user='Jack Dang';
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  return (
    //BEM naming convention
    <div className="App">
      {!user ? <Login /> : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
