import "./styles.css"

export const AmountCard = ({ type, amountValue }) => {
    return <>
        {
            type === "balance" ?
                <div className="card-wrapper">
                    <div style={{position:'relative'}}>Wallet Balance: ₹{amountValue}</div>
                    <button id="add-income">+ Add Income</button>
                </div>
                :
                <div className="card-wrapper">
                    <div>Expenses: ₹{amountValue}</div>
                    <button id="add-income">+ Add Expense</button>
                </div>

        }
    </>
}