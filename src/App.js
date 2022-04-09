import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Game from './components/Game/Game';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* <Sidebar />
      <Dashboard /> */}
      <Game />
    </div>
  );
}

export default App;
