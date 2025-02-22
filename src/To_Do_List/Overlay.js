import React from "react";
import Styles from "./Styling.module.css"
import { BrowserRouter,Route,Routes} from "react-router-dom";
import APP from "./App"
import {Message} from "./SHOWitem"


let Overlay=()=>{
    return(
        <div className={Styles.overlay}>
         
        </div>
    )
 }


export let Delete=()=>{
  
   return( 
   <>
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<APP/>}/>
            <Route path="/delet/:name" element={
            <>
            <Overlay/>
            <Message/>
            </>}/>
        </Routes>
    </BrowserRouter>
   </>

   )
}
export default Delete;