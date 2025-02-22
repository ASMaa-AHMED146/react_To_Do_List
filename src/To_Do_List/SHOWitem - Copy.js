import React from "react";
import Styles from "./Styling.module.css"
import { useNavigate,useParams } from "react-router-dom";


 let Message=()=>{
   let ret=useNavigate();
   let name=useParams();

   
   function Willdelete(){
      let array=JSON.parse(localStorage.getItem('data'))
      let NEW=array.filter((el)=>{
         return ((el.Counter)!==(name.name))
      }) 
      localStorage.setItem('data',JSON.stringify(NEW))
   }
  return(
   <>
       <div className={Styles.meassage}>
           <p className={Styles.meassageyext}>Are you sure you want to delete this task?</p>
           <div className={Styles.buttons}>
           <button className={Styles.deletebutton} onClick={()=>{ret("/"); Willdelete();} }>Ok</button>
           <button className={Styles.cancel} onClick={()=>{ret("/")}}>Cancel</button>
       </div></div>    
   </>
  )
}


function Showitem({array,id,element,showform,setitemtolocalstoratge}){

   let nav=useNavigate();
   return(
      <>
         <p className={Styles.Input}>{element.Input}</p>
          <div className={Styles.icons}>
              <span className={Styles.edit}>
                        <button onClick={()=>{ showform(id);                       
                        }}>Edit</button>
              </span>
              <span className={Styles.delete} id={element.counter} onClick={(event)=>{ nav(`/delet/${element.Counter}`);
                }  }>X</span>
          </div>
      </>
   )
}
export {Showitem,Message};