import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Transaction } from "./Transaction";
import { useState } from "react";

export const RecentTransaction = () => {
    const [transactionData, setTransactionData] = useState();
    useState(() => {
        setTransactionData(JSON.parse(localStorage.getItem("transactions")));
    }, [])
    return <>
        <div>
            <h1 style={{ color: 'white' }}><i>Recent Transactions</i></h1>
            <div style={{ backgroundColor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {transactionData &&
                    transactionData.slice(2,5).map((transactionData, idx) => 
                        <Transaction key={idx} name={transactionData.title} dateTime={transactionData.dateTime} price={transactionData.price} />
                    )
                }
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, padding: '0.8rem' }}>
                    <button style={{ borderRadius: '15px', padding: '14px', border: '0px', boxShadow: '0px 2px #C3C3C3', display: 'flex', color: 'black' }}><FaArrowLeftLong /></button>
                    <span style={{ borderRadius: '10px', padding: '10px 15px', border: '0px', boxShadow: '0px 2px #C3C3C3', backgroundColor: '#43967B', color: 'white', display: 'flex' }}>1</span>
                    <button style={{ borderRadius: '15px', padding: '14px', border: '0px', boxShadow: '0px 2px #C3C3C3', display: 'flex', color: 'black' }}><FaArrowRightLong /></button>
                </div>
            </div>
        </div>
    </>
}