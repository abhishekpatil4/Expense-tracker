import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Transaction } from "./Transaction";
import { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";

export const RecentTransaction = () => {
    const [pageNo, setPageNo] = useState(0);
    const [transactionData, setTransactionData] = useState();
    const handleNext = () => {
        if ((pageNo * 3) + 3 < transactionData.length) {
            setPageNo((prev) => prev + 1);
        } else {
            alert("No more transactions!");
        }
    }
    const hanlePrev = () => {
        if(pageNo !== 0){
            setPageNo((prev) => prev - 1);
        }else{
            alert("You're already in page 1!");
        }
    }
    useState(() => {
        setTransactionData(JSON.parse(localStorage.getItem("transactions")));
    }, [])
    return <>
        <div>
            <h1 style={{ color: 'white' }}><i>Recent Transactions</i></h1>
            <div style={{ backgroundColor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {transactionData ?
                    transactionData.slice(pageNo * 3, (pageNo * 3) + 3).map((transactionData, idx) =>
                        <Transaction key={idx} name={transactionData.title} dateTime={transactionData.dateTime} price={transactionData.price} />
                    )
                    :
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '150px' }}>
                        <h1>No data to render</h1>
                    </div>
                }
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, padding: '0.8rem' }}>
                    <button style={{ borderRadius: '15px', padding: '14px', border: '0px', boxShadow: '0px 2px #C3C3C3', display: 'flex', color: 'black' }} onClick={hanlePrev}><FaArrowLeftLong /></button>
                    <span style={{ borderRadius: '10px', padding: '10px 15px', border: '0px', boxShadow: '0px 2px #C3C3C3', backgroundColor: '#43967B', color: 'white', display: 'flex' }}>{pageNo + 1}</span>
                    <button style={{ borderRadius: '15px', padding: '14px', border: '0px', boxShadow: '0px 2px #C3C3C3', display: 'flex', color: 'black' }} onClick={handleNext}><FaArrowRightLong /></button>
                </div>
            </div>
        </div>
    </>
}