import "./styles.css"
import { useState, useEffect } from "react"
import ReactModal from "react-modal";

export const AmountCard = ({ type }) => {
    const [balanceModelOpen, setBalanceModelOpen] = useState(false);
    const [expenseModelOpen, setExpenseModelOpen] = useState(false);
    const [newBalance, setNewBalance] = useState();

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [dateTime, setDateTime] = useState();

    const getFormattedDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: "long", day: "numeric", year: "numeric" };
        const formattedDate = date.toLocaleDateString("en-US", options);
        return formattedDate;
    }

    const [amount, setAmount] = useState({
        currentBalance: 0,
        currentExpenses: 0
    });
    const handleAddExpense = () => {
        console.log(title);
        console.log(price);
        console.log(category);
        console.log(getFormattedDate(dateTime));

        console.log(JSON.parse(localStorage.getItem("currentAmount"))); 

        setExpenseModelOpen(false)
    }
    const handleAddBalance = () => {
        const currentAmount = JSON.parse(localStorage.getItem("currentAmount"));
        if (newBalance == "") {
            alert("Enter valid amount");
        } else {
            currentAmount.currentBalance = Number(currentAmount.currentBalance) + Number(newBalance);
            localStorage.setItem("currentAmount", JSON.stringify(currentAmount));
            setAmount(JSON.parse(localStorage.getItem("currentAmount")));
            setBalanceModelOpen(false)
        }
    }
    useEffect(() => {
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
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <input required type="text" placeholder="Income Amount" style={{
                                    borderRadius: '10px',
                                    border: '0px',
                                    boxShadow: '0px 3px #C1C1C1C1',
                                    width: '15rem',
                                    fontSize: '1.2rem',
                                    padding: '0.8rem',
                                }}
                                    value={newBalance}
                                    onChange={(e) => setNewBalance(e.target.value)}
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
                                        onClick={handleAddBalance}
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
                            </div>
                        </div>
                    </ReactModal>
                    <div>Wallet Balance: <span style={{ fontWeight: 500, color: '#9DFF5B' }}>₹{amount && amount.currentBalance}</span></div>
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
                            <div style={{
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
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <input type="text" placeholder="Price" style={{
                                        borderRadius: '10px',
                                        border: '0px',
                                        boxShadow: '0px 3px #C1C1C1C1',
                                        width: '12rem',
                                        fontSize: '1.2rem',
                                        padding: '0.8rem',
                                        margin: "0.5rem 0.5rem"
                                    }}
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                {/* (2/2) 2 flexbox for input elements */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    {/* <input type="dropdown" placeholder="Select Category" style={{
                                        borderRadius: '10px',
                                        border: '0px',
                                        boxShadow: '0px 3px #C1C1C1C1',
                                        width: '12rem',
                                        fontSize: '1.2rem',
                                        padding: '0.8rem',
                                        margin: "0.5rem 0.5rem"
                                    }}
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    /> */}
                                    <select
                                        value={category}
                                        onChange={(e) => {
                                            const option = e.target.value;
                                            setCategory(option);
                                            // onSelect(option);
                                        }}
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
                                        value={dateTime}
                                        onChange={(e) => setDateTime(e.target.value)}
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
                                        onClick={handleAddExpense}
                                    >Add Balance</button>
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
                            </div>
                        </div>
                    </ReactModal>
                    <div>Expenses: <span style={{ fontWeight: 500, color: '#F4BB4A' }}>₹{amount && amount.currentExpenses}</span></div>
                    <button id="add-expense" onClick={() => setExpenseModelOpen(true)}>+ Add Expense</button>
                </div>

        }
    </>
}