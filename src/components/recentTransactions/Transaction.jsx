import { MdOutlineCancel } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { PiPizza } from "react-icons/pi";

export const Transaction = ({ name, dateTime, price }) => {
    return <>
        <div style={{ display: 'flex', alignItems: 'center', padding: '15px', justifyContent: 'space-between', borderBottom:'1px solid #9B9B9B', margin:'5px 20px'}}>
            <div style={{display:'flex', justifyContent:'space-between', minWidth:'10.5rem'}}>
                <PiPizza style={{ fontSize: '25px', backgroundColor: '#D9D9D9', borderRadius: '100%', padding: '8px' }} />
                <div style={{display:"flex", flexDirection:'column', justifyContent:'space-between'}}>
                    <span>{name}</span>
                    <span style={{fontWeight:300, color:'#9B9B9B'}}>{dateTime}</span>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', minWidth:'9rem'}}>
                <span style={{color:'#F4BB4A'}}>₹{price}</span>
                <button style={{padding:'6px', borderRadius:'14px', border:'0px', backgroundColor:'#FE3F3E', color:'white', display:'flex', boxShadow:'0px 2px #C1C1C1' }}><MdOutlineCancel style={{fontSize:'22px'}}/></button>
                <button style={{padding:'6px', borderRadius:'14px', border:'0px', backgroundColor:'#F4BB4A', color:'white', display:'flex', boxShadow:'0px 2px #C1C1C1' }}><LuPencil style={{fontSize:'22px'}}/></button>
            </div>
        </div>
    </>
}