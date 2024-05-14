import { MdOutlineCancel } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { PiPizza } from "react-icons/pi";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
export const Transaction = ({ id, name, dateTime, price }) => {
    const [expenseModelOpen, setExpenseModelOpen] = useState(false);
    const [preFilledData, setPreFilledData] = useState({
        "title": "",
        "price": "",
        "category": "",
        "dateTime": ""
    });
    const handleDelete = () => {
        const arrayOfObjects = Object.values(JSON.parse(localStorage.getItem("transactions")));
        const indexToDelete = id;
        arrayOfObjects.splice(indexToDelete, 1);
        localStorage.setItem("transactions", JSON.stringify(arrayOfObjects));
        window.location.reload();
    }
    //to update state variables (form prefill)
    const [Ftitle, setTitle] = useState();
    const [Fcategory, setCategory] = useState();
    const [Fprice, setPrice] = useState();
    const [FdateTime, setDateTime] = useState();
    const editExpense = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payLoad = Object.fromEntries(formData);
        console.log("payLoad: ", payLoad);
        const objs = JSON.parse(localStorage.getItem("transactions"));
        objs[id].title = payLoad.title;
        objs[id].price = payLoad.price;
        objs[id].category = payLoad.category;
        objs[id].dateTime = payLoad.dateTime;
        localStorage.setItem("transactions", JSON.stringify(objs));
        window.location.reload();
    }
    useEffect(() => {
        const objs = JSON.parse(localStorage.getItem("transactions"));
        const data = objs[id];
        setTitle(data.title);
        setPrice(data.price);
        setCategory(data.category);
        setDateTime(data.dateTime);
    }, [])
    return <>
        <div style={{ display: 'flex', alignItems: 'center', padding: '15px', justifyContent: 'space-between', borderBottom: '1px solid #9B9B9B', margin: '5px 20px' }}>
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
                    <h1>Edit Balance</h1>
                    <form onSubmit={editExpense} style={{
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
                                value={Ftitle}
                                onChange={(e) => setTitle(e.target.value)}
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
                                value={Fprice}
                                onChange={(e) => setPrice(e.target.price)}
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
                                value={Fcategory}
                                onSelect={(e) => setCategory(e.target.value)}
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
                                value={FdateTime}
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
            <div style={{ display: 'flex', justifyContent: 'space-between', minWidth: '10.5rem' }}>
                <PiPizza style={{ fontSize: '25px', backgroundColor: '#D9D9D9', borderRadius: '100%', padding: '8px' }} />
                <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
                    <span>{name}</span>
                    <span style={{ fontWeight: 300, color: '#9B9B9B' }}>{dateTime}</span>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', minWidth: '9rem' }}>
                <span style={{ color: '#F4BB4A' }}>₹{price}</span>
                <button style={{ padding: '6px', borderRadius: '14px', border: '0px', backgroundColor: '#FE3F3E', color: 'white', display: 'flex', boxShadow: '0px 2px #C1C1C1' }} onClick={handleDelete}><MdOutlineCancel style={{ fontSize: '22px' }} /></button>
                <button style={{ padding: '6px', borderRadius: '14px', border: '0px', backgroundColor: '#F4BB4A', color: 'white', display: 'flex', boxShadow: '0px 2px #C1C1C1' }} onClick={() => setExpenseModelOpen(true)}><LuPencil style={{ fontSize: '22px' }} /></button>
            </div>
        </div>
    </>
}