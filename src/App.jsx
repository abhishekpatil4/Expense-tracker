import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { AmountCard } from './components/amountCard/AmountCard'
import { ExpPiechart } from './components/expPiechart/ExpPiechart'
import { RecentTransaction } from './components/recentTransactions/RecentTransaction'
import { TopExpenses } from './components/topexpenses/TopExpenses'
import { SnackbarProvider } from 'notistack'


function App() {
  return (
    <SnackbarProvider anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}>
      <div style={{ margin: '1rem' }}>
        <Navbar />
        <div className="wrapper">
          <AmountCard type={"balance"} amountValue={"5000"} />
          <AmountCard type={"expense"} amountValue={"500"} />
          <ExpPiechart />
        </div>
        <div className='transactions-expenses-wrapper-grid'>
          <div id="grid-item-1">
            <RecentTransaction />
          </div>
          <div id="grid-item-2">
            <TopExpenses />
          </div>
        </div>
      </div>
    </SnackbarProvider>
  )
}

export default App
