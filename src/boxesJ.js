
import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import {FiActivity} from "react-icons/fi";
import {AiFillApple } from "react-icons/ai";
import {AiFillDatabase } from "react-icons/ai";
import {FaGoogle } from "react-icons/fa";
import {FaCcVisa } from "react-icons/fa";
import {FaEdge } from "react-icons/fa";
import {FaBuromobelexperte } from "react-icons/fa";
import { FaPhoenixSquadron} from "react-icons/fa";
import DemoSwipe from "./swipe/Swipe1"
 

 
 
 

const BoxesJ = () => {

 
    const jbox1R = useRef();
    const jbox2R = useRef();
    const cRef = useRef();
    const cRef1 = useRef();

 
     


    const changeBg = (ref) => {
    let cref =     cRef.current.style.width;
  if(cref == "0px") {

    ref.current.style.backgroundColor="rgb(0,0,0,0.1)";
    ref.current.style.transition="background-color 1000ms linear"

    
    cRef.current.style.transition="width 1000ms linear"
        cRef.current.style.width = "100%"
        cRef.current.style.backgroundColor="black";
      
 
     
        cRef.current.style.width = "100%";
      

        
  } else {
    cRef.current.style.width = "0px";
        cRef.current.style.transition = "width 1s ease-in";
  }
   
  }
    const HandleClick = (ref) => {
   
   changeBg(ref) 
  
    
    }

    const Testclick = () => {
   
     
      cRef.current.style.width = "0px";
       
       }
   
   
    

 
 
   
        
  
     

   

    return (  
      <>
     <div classname="Containerjbox">
<div id = "joinedBoxes"  >
<div  className = "Jb" id ="jbox1" >


<div id ="jbox1R" ref={jbox1R}  onClick={() => {HandleClick(jbox1R)} }>
<FiActivity  style={{backgroundColor: "green", height: "30%", borderRadius: "54px", width: "24%", color:"white"}} className="icoo" /> 
<span className ="spanS"  style={{fontSize: "18px", marginTop: "10px"}} > No refresh websites(SPA) </span>
 
 </div></div>





<div  className = "Jb"  id ="jbox2" > 

<div id ="jbox2R" ref={jbox2R}  >
<AiFillDatabase style={{backgroundColor: "green", height: "30%", borderRadius: "54px", width: "25%", color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px"}} > Booking systems </span>

</div></div>
 


<div  className = "Jb"  id ="jbox3"> <div id ="jbox3R">
<AiFillApple  style={{backgroundColor: "green", height: "30%", borderRadius: "50px", width: "25%", color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px"}} > Iphone apps</span>
</div></div>



<div  className = "Jb"  id ="jbox4"> ee  <div id ="jbox4R">
<FaGoogle style={{backgroundColor: "green", height: "30%", borderRadius: "54px", width: "25%", color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px"}} > Search engine optimisation(SEO) </span>
</div></div>



<div id = "jbox5"> <div id ="jbox5R"> <FaEdge style={{backgroundColor: "green", height: "30%", borderRadius: "54px", width: "25%", color:"white"}} className="icoo" /> 
<span className="spanS" style={{fontSize: "18px"}} > Website Management tutorials </span></div></div>

<div id ="jbox6"><div id ="jbox6R"><FaBuromobelexperte style={{backgroundColor: "green", height: "30%", borderRadius: "54px", width: "25%", color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px"}} > Website and app management </span> </div> </div>


<div id = "jbox7">
<div id ="jbox7R"> <FaCcVisa style={{backgroundColor: "green", height: "30%", borderRadius: "54px", width: "25%", color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px"}} > Encryption systems/e-commerce</span></div> </div>

<div id ="jbox8"><div id ="jbox8R"> <FaPhoenixSquadron style={{backgroundColor: "green", height: "30%", borderRadius: "54px", width: "25%", color:"white"}} className="icoo" /> 
<span className="spanS" style={{fontSize: "14px"}} > Image and sofrware design </span></div></div>




</div>


</div>

   <div  ref={cRef}  id="C1"  > 

   <h1 onClick={Testclick}> click </h1>
 
</div>

</>
    );

 
    
}



export default BoxesJ;