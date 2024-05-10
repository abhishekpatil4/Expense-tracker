import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { AmountCard } from './components/amountCard/AmountCard'

function App() {
  return (
    <div style={{margin:'1rem'}}>
      <Navbar />
      <div className="wrapper">
        <AmountCard type={"balance"} amountValue={"5000"} />
        <AmountCard type={"expense"} amountValue={"500"} />
        <AmountCard type={"expense"} amountValue={"500"} />
      </div>
    </div>
  )
}

export default App
