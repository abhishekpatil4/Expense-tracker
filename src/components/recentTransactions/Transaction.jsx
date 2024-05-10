import { MdOutlineCancel } from "react-icons/md";
import { LuPencil } from "react-icons/lu";

export const Transaction = ({ icon: PiPizza, name, dateTime, price }) => {
    return <>
        <div style={{ display: 'flex', alignItems: 'center', padding: '20px', justifyContent: 'space-between', borderBottom:'1px solid gray', margin:'0px 20px'}}>
            <div style={{display:'flex', alignItems:'center'}}>
                <PiPizza style={{ fontSize: '25px', backgroundColor: '#D9D9D9', borderRadius: '100%', padding: '8px' }} />
                <div style={{display:"flex", flexDirection:'column'}}>
                    <span>{name}</span>
                    <span>{dateTime}</span>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <span>${price}</span>
                <button style={{padding:'6px', borderRadius:'14px', border:'0px', backgroundColor:'red', color:'white', display:'flex', boxShadow:'0px 2px #C1C1C1' }}><MdOutlineCancel style={{fontSize:'22px'}}/></button>
                <button><LuPencil /></button>
            </div>

        </div>
    </>
}