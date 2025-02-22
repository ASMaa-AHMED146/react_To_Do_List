import React from "react";
import { createPortal } from "react-dom";
import Styles from "./Styling.module.css"
import { useState,useEffect } from "react";
import {Showitem} from "./SHOWitem"
import Takeitem from "./Takeitem"
import { v4 as uuidv4 } from "uuid";



let App=()=>{


    let [input ,inputstate]=useState("");
    let [array,arrayset]=useState(()=>{
        const storedItems=localStorage.getItem("data");
        
        return storedItems ? JSON.parse(storedItems) : [];
    })
    
    useEffect(()=>{
        setitemtolocalstoratge(array);
    },[array])
    
    let  Putinputvalue=()=>{
        arrayset([...array,{Input:input,Counter:uuidv4(),State:true}]);
        inputstate("")
    }
    
    let showform=(id)=>{  
        let res=array.map((ele)=>{
         return ele.Counter===id? {...ele,State:false}:ele
        })
        arrayset(res);
        setitemtolocalstoratge(res);
      }

      let changevalue=(id,newValue)=>{
        
        let resnew=array.map((ele)=>{
            return ele.Counter===id? {...ele,Input:newValue,State:true}:ele
        })
        arrayset(resnew);
      }
    
    let setitemtolocalstoratge=(ARR)=>{
       
        
        return localStorage.setItem("data",JSON.stringify(ARR))
    }
  
    return(
        createPortal(
            <>  
        
                <div className={Styles.container}>
                <div className={Styles.values}>
                    <input type="text" placeholder="Enter a new task" value={input}  onChange={(e)=>{inputstate(e.target.value)}}/>
                    <button onClick={()=>{Putinputvalue()}} >Add Task</button>
                </div>   
                {
                   array.map((element)=>{
                   return (
                    <>
                    <div className={Styles.item} key={element.Counter}>
                        {(element.State)?
                        <Showitem array={array} id={element.Counter} element={element}  showform={showform} setitemtolocalstoratge={setitemtolocalstoratge}/>:<Takeitem element={element} id={element.Counter} changevalue={changevalue}/>
                        }
                    </div>
                    </>
                   )
                    })           
                }
               </div>
            </>
            ,document.getElementById("model"))
    )
}
export default App;