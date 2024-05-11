import "./styles.css"
import { useState, useEffect } from "react"
import ReactModal from "react-modal";

export const AmountCard = ({ type }) => {
    const [modelOpen, setModelOpen] = useState(true);
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
                    <ReactModal isOpen={modelOpen} style={{
                        content: {
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            margin: 'auto',
                            maxWidth: '520px',
                            maxHeight: '150px',
                            backgroundColor:'#EEEEEE',
                            borderRadius:'12px',
                            border:'0px',
                            padding:'1.5rem 2rem'
                        }
                    }}>
                        <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                            <h1>Add Balance</h1>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <input type="text" placeholder="Income Amount" style={{
                                    borderRadius:'10px',
                                    border:'0px',
                                    boxShadow:'0px 3px #C1C1C1C1',
                                    width:'15rem',
                                    fontSize:'1.2rem',
                                    padding:'0.8rem',
                                }}/>
                                <button style={{
                                    backgroundColor: '#F4BB4A',
                                    border:'0px',
                                    borderRadius:'10px',
                                    color:'white',
                                    boxShadow:'0px 3px #C1C1C1C1',
                                    fontSize:'1.2rem',
                                    padding:'0.8rem'
                                }}>Add Balance</button>
                                <button style={{
                                    backgroundColor: '#E2E2E2',
                                    border:'0px',
                                    borderRadius:'10px',
                                    color:'black',
                                    boxShadow:'0px 3px #C1C1C1C1',
                                    fontSize:'1.2rem',
                                    padding:'0.8rem'
                                }} onClick={() => setModelOpen(false)}>Cancel</button>
                            </div>
                        </div>
                    </ReactModal>
                    <div>Wallet Balance: <span style={{ fontWeight: 500, color: '#9DFF5B' }}>₹{amount && amount.currentBalance}</span></div>
                    <button id="add-income" onClick={() => setModelOpen(true)}>+ Add Income</button>
                </div>
                :
                <div className="card-wrapper">
                    <div>Expenses: <span style={{ fontWeight: 500, color: '#F4BB4A' }}>₹{amount && amount.currentExpenses}</span></div>
                    <button id="add-expense">+ Add Expense</button>
                </div>

        }
    </>
}