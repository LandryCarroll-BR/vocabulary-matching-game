import React from 'react'
import './Dashboard.css'
import Game from '../Game/Game'
import Navbar from '../Navbar/Navbar'

function Dashboard() {
  return (
    <main className="dashboard">
      <Navbar />
      <Game />
    </main>
  )
}

export default Dashboard
