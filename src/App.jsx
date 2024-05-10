import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { AmountCard } from './components/amountCard/AmountCard'
import { ExpPiechart } from './components/expPiechart/ExpPiechart'

function App() {
  return (
    <div style={{ margin: '1rem' }}>
      <Navbar />
      <div className="wrapper">
        <AmountCard type={"balance"} amountValue={"5000"} />
        <AmountCard type={"expense"} amountValue={"500"} />
        <ExpPiechart />
      </div>
    </div>
  )
}

export default App
