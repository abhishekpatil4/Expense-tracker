import "./styles.css"

export const AmountCard = ({ type, amountValue }) => {
    return <>
        {
            type === "balance" ?
                <div className="card-wrapper">
                    <div style={{ position: 'relative' }}>Wallet Balance: <span style={{ fontWeight: 500, color:'#9DFF5B' }}>₹{amountValue}</span></div>
                    <button id="add-income">+ Add Income</button>
                </div>
                :
                <div className="card-wrapper">
                    <div>Expenses: <span style={{ fontWeight: 500, color:'#F4BB4A' }}>₹{amountValue}</span></div>
                    <button id="add-expense">+ Add Expense</button>
                </div>

        }
    </>
}