import React, { useState } from "react";
import Styles from "./Styling.module.css"
let Takeitem=({element,id,changevalue})=>{
    let [newtext,newtextstate]=useState(element.Input)
    return(
        <>
        
            <div className={Styles.form}>
                <input className={Styles.input} value={newtext} 
                onChange={(ele)=>{newtextstate(ele.target.value)}}
                />
                <button className={Styles.button} onClick={()=>{ changevalue(id,newtext);               
                }}>Add</button>
            </div>
        </>
    )
}
export default Takeitem;