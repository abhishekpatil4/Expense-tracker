import "./styles.css"
import { useState, useEffect } from "react"
import ReactModal from "react-modal";

export const AmountCard = ({ type }) => {
    const [balanceModelOpen, setBalanceModelOpen] = useState(false);
    const [expenseModelOpen, setExpenseModelOpen] = useState(false);
    const [newBalance, setNewBalance] = useState();
    const [amount, setAmount] = useState({
        currentBalance: 0,
        currentExpenses: 0
    });

    const handleAddExpense = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payLoad = Object.fromEntries(formData);
        const currentAmount = JSON.parse(localStorage.getItem("currentAmount"));
        currentAmount.currentBalance = Number(currentAmount.currentBalance) - Number(payLoad.price);
        currentAmount.currentExpenses = Number(currentAmount.currentExpenses) + Number(payLoad.price);
        localStorage.setItem("currentAmount", JSON.stringify(currentAmount));
        setAmount(JSON.parse(localStorage.getItem("currentAmount")));
        if (localStorage.getItem("transactions") === null) {
            const arr = [];
            arr.push(payLoad);
            localStorage.setItem("transactions", JSON.stringify(arr));
        } else {
            const tempArr = JSON.parse(localStorage.getItem("transactions"));
            tempArr.push(payLoad);
            localStorage.setItem("transactions", JSON.stringify(tempArr));
        }
        window.location.reload();
        setExpenseModelOpen(false);
    }
    const handleAddBalance = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payLoad = Object.fromEntries(formData);
        const currentAmount = JSON.parse(localStorage.getItem("currentAmount"));
        if (payLoad == null) {
            alert("Enter valid amount");
        } else {
            currentAmount.currentBalance = Number(currentAmount.currentBalance) + Number(payLoad.balance);
            localStorage.setItem("currentAmount", JSON.stringify(currentAmount));
            setAmount(JSON.parse(localStorage.getItem("currentAmount")));
            setBalanceModelOpen(false)
        }
    }
    useEffect(() => {
        if (localStorage.getItem("currentAmount") === null) {
            const obj = {
                "currentBalance": 5000,
                "currentExpenses": 0
            }
            localStorage.setItem("currentAmount", JSON.stringify(obj));
        }
        setAmount(JSON.parse(localStorage.getItem("currentAmount")));
    }, [])
    return <>
        {
            type === "balance" ?
                <div className="card-wrapper">
                    <ReactModal ariaHideApp={false} isOpen={balanceModelOpen} style={{
                        content: {
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            margin: 'auto',
                            maxWidth: '520px',
                            maxHeight: '150px',
                            backgroundColor: '#EEEEEE',
                            borderRadius: '12px',
                            border: '0px',
                            padding: '1.8rem 2rem'
                        }
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <h1>Add Balance</h1>
                            <form onSubmit={handleAddBalance} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <input required type="number" placeholder="Income Amount" style={{
                                    borderRadius: '10px',
                                    border: '0px',
                                    boxShadow: '0px 3px #C1C1C1C1',
                                    width: '15rem',
                                    fontSize: '1.2rem',
                                    padding: '0.8rem',
                                }}
                                    name="balance"
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-around', minWidth: '240px' }}>
                                    <button style={{
                                        backgroundColor: '#F4BB4A',
                                        border: '0px',
                                        borderRadius: '10px',
                                        color: 'white',
                                        boxShadow: '0px 3px #C1C1C1C1',
                                        fontSize: '1.2rem',
                                        padding: '0.8rem'
                                    }}
                                        type="submit"
                                    // onClick={handleAddBalance}
                                    >Add Balance</button>
                                    <button style={{
                                        backgroundColor: '#E2E2E2',
                                        border: '0px',
                                        borderRadius: '10px',
                                        color: 'black',
                                        boxShadow: '0px 3px #C1C1C1C1',
                                        fontSize: '1.2rem',
                                        padding: '0.8rem'
                                    }} onClick={() => setBalanceModelOpen(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </ReactModal>
                    <div>Wallet Balance: <span style={{ fontWeight: 500, color: '#9DFF5B' }}>₹{amount ? amount.currentBalance : 0}</span></div>
                    <button id="add-income" onClick={() => setBalanceModelOpen(true)}>+ Add Income</button>
                </div>
                :
                <div className="card-wrapper">
                    <ReactModal ariaHideApp={false} isOpen={expenseModelOpen} style={{
                        content: {
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            margin: 'auto',
                            maxWidth: '500px',
                            maxHeight: '300px',
                            backgroundColor: '#EEEEEE',
                            borderRadius: '12px',
                            border: '0px',
                            padding: '1.8rem 2rem'
                        }
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <h1>Add Balance</h1>
                            <form onSubmit={handleAddExpense} style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                {/* (1/2) 2 flexbox for input elements */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <input type="text" placeholder="Title" style={{
                                        borderRadius: '10px',
                                        border: '0px',
                                        boxShadow: '0px 3px #C1C1C1C1',
                                        width: '12rem',
                                        fontSize: '1.2rem',
                                        padding: '0.8rem',
                                        margin: "0.5rem 0.5rem"
                                    }}
                                        name="title"
                                        required
                                    />
                                    <input type="number" placeholder="Price" style={{
                                        borderRadius: '10px',
                                        border: '0px',
                                        boxShadow: '0px 3px #C1C1C1C1',
                                        width: '12rem',
                                        fontSize: '1.2rem',
                                        padding: '0.8rem',
                                        margin: "0.5rem 0.5rem"
                                    }}
                                        name="price"
                                        required
                                    />
                                </div>
                                {/* (2/2) 2 flexbox for input elements */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <select
                                        name="category"
                                        required
                                        style={{
                                            borderRadius: '10px',
                                            border: '0px',
                                            boxShadow: '0px 3px #C1C1C1C1',
                                            width: '14rem',
                                            fontSize: '1.2rem',
                                            padding: '0.8rem 0.8rem 0.8rem 0.8rem',
                                            margin: "0.5rem 0.5rem",
                                            color: 'gray'
                                        }}
                                    >
                                        <option value="">Select a category</option>
                                        <option value="food">Food</option>
                                        <option value="entertainment">Entertainment</option>
                                        <option value="travel">Travel</option>
                                        <option value="education">Education</option>
                                        <option value="fitness">Fitness</option>
                                    </select>
                                    <input type="date" placeholder="dd/mm/yyyy" style={{
                                        borderRadius: '10px',
                                        border: '0px',
                                        boxShadow: '0px 3px #C1C1C1C1',
                                        width: '12rem',
                                        fontSize: '1.2rem',
                                        padding: '0.8rem',
                                        margin: "0.5rem 0.5rem",
                                        color: 'gray'
                                    }}
                                        required
                                        name="dateTime"
                                    />
                                </div>

                                {/* flex box for buttons */}
                                <div style={{ display: 'flex', justifyContent: 'space-around', minWidth: '240px' }}>
                                    <button style={{
                                        backgroundColor: '#F4BB4A',
                                        border: '0px',
                                        borderRadius: '10px',
                                        color: 'white',
                                        boxShadow: '0px 3px #C1C1C1C1',
                                        fontSize: '1.2rem',
                                        padding: '0.8rem',
                                        margin: "0.5rem 0.5rem"
                                    }}
                                        type="submit"
                                    >Add Expense</button>
                                    <button style={{
                                        backgroundColor: '#E2E2E2',
                                        border: '0px',
                                        borderRadius: '10px',
                                        color: 'black',
                                        boxShadow: '0px 3px #C1C1C1C1',
                                        fontSize: '1.2rem',
                                        padding: '0.8rem',
                                        margin: "0.5rem 0.5rem"
                                    }} onClick={() => setExpenseModelOpen(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </ReactModal>
                    <div>Expenses: <span style={{ fontWeight: 500, color: '#F4BB4A' }}>₹{amount && amount.currentExpenses}</span></div>
                    <button id="add-expense" onClick={() => setExpenseModelOpen(true)}>+ Add Expense</button>
                </div>

        }
    </>
}