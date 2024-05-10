import { PiPizza } from "react-icons/pi";
import { Transaction } from "./Transaction";
const data = [
    {
        name: "samosa",
        price: 500
    },
]

export const RecentTransaction = () => {
    return <>
        <div>
            <h1 style={{ color: 'white' }}><i>Recent Transactions</i></h1>
            <div style={{ backgroundColor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Transaction icon={PiPizza} name={"Pizza"} dateTime={"March 20, 2024"} price={200} />
                <Transaction icon={PiPizza} name={"Pizza"} dateTime={"March 20, 2024"} price={200} />
                <Transaction icon={PiPizza} name={"Pizza"} dateTime={"March 20, 2024"} price={200} />
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:20, padding:'1rem'}}>
                    <button>+-</button>
                    <span>1</span>
                    <button>-+</button>
                </div>
            </div>
        </div>
    </>
}