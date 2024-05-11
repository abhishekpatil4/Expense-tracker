import "./styles.css"
import { useState, useEffect } from "react"
export const AmountCard = ({ type }) => {
    const [amount, setAmount] = useState({
        currentBalance: 0,
        currentExpenses: 0
    });
    useEffect(() => {
        setAmount(JSON.parse(localStorage.getItem("currentAmount")));
    }, [])
    return <>
        {
            type === "balance" ?
                <div className="card-wrapper">
                    <div>Wallet Balance: <span style={{ fontWeight: 500, color: '#9DFF5B' }}>₹{amount && amount.currentBalance}</span></div>
                    <button id="add-income">+ Add Income</button>
                </div>
                :
                <div className="card-wrapper">
                    <div>Expenses: <span style={{ fontWeight: 500, color: '#F4BB4A' }}>₹{amount && amount.currentExpenses}</span></div>
                    <button id="add-expense">+ Add Expense</button>
                </div>

        }
    </>
}