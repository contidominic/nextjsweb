
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
    const jbox3R = useRef();
    const cRef = useRef();
    const cRef1 = useRef();
 
    const cRef2 = useRef();
    const jbox4R = useRef();
    const cRef3 = useRef();
    const jbox5R = useRef();
    const cRef4 = useRef();
    const jbox6R = useRef();
    const cRef5 = useRef();

 
     


    const changeBg = (ref) => {
    let cref =     cRef.current.style.width;
  if(cref == "0px" || !cref ) {

    ref.current.style.backgroundColor="rgb(0,0,0,0.1)";
    ref.current.style.transition="background-color 1000ms linear"

    
    cRef.current.style.transition="width 1000ms linear"
        cRef.current.style.width = "100%"
        cRef.current.style.backgroundColor="black";
      
 
   

        
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



       const changeBg1 = (ref) => {
        let cref =     cRef.current.style.width;
      if(cref == "0px" || !cref ) {
    
        ref.current.style.backgroundColor="rgb(0,0,0,0.1)";
        ref.current.style.transition="background-color 1000ms linear"
    
        
        cRef1.current.style.transition="width 1000ms linear"
            cRef1.current.style.width = "100%"
            cRef1.current.style.backgroundColor="black";
          
     
       
    
            
      } else {
        cRef1.current.style.width = "0px";
            cRef1.current.style.transition = "width 1s ease-in";
      }
       
      }
        const HandleClick1= (ref) => {
       
       changeBg1(ref) 
      
        
        }
    
        const Testclick1 = () => {
       
         
          cRef1.current.style.width = "0px";
           
           }
     
 
           const changeBg2 = (ref) => {
            let cref =     cRef.current.style.width;
          if(cref == "0px" || !cref ) {
        
            ref.current.style.backgroundColor="rgb(0,0,0,0.1)";
            ref.current.style.transition="background-color 1000ms linear"
        
            
            cRef2.current.style.transition="width 1000ms linear"
                cRef2.current.style.width = "100%"
                cRef2.current.style.backgroundColor="black";
              
         
           
        
                
          } else {
            cRef2.current.style.width = "0px";
                cRef2.current.style.transition = "width 1s ease-in";
          }
           
          }
            const HandleClick2= (ref) => {
           
           changeBg2(ref) 
          
            
            }
        
            const Testclick2 = () => {
           
             
              cRef2.current.style.width = "0px";
               
               }
         
    

    return (  
      <>
     <div classname="Containerjbox">
<div id = "joinedBoxes"  >


<div  className = "Jb" id ="jbox1" >
<div id ="jbox1R" ref={jbox1R}  onClick={() => HandleClick(jbox1R) }>
<FiActivity   style={{backgroundColor: "green",height: "80px", borderRadius: "14px", width: "80px", color:"white"}} className="icoo" /> 
<span className ="spanS"  style={{fontSize: "18px", marginTop: "10px", backgroundColor: "black"}} > No refresh websites(SPA) </span>
 
 </div></div>




<div  className = "Jb"  id ="jbox2" > 

<div id ="jbox2R" ref={jbox2R} onClick={() => HandleClick1(jbox2R) } >
<AiFillDatabase  style={{backgroundColor: "green",height: "80px", borderRadius: "14px", width: "80px", color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px", marginTop: "10px", backgroundColor: "black"}} > Booking systems </span>

</div></div>
 

 <div  className = "Jb"  id ="jbox3" > 

<div id ="jbox3R" ref={jbox3R} onClick={() => HandleClick1(jbox3R) } >
<AiFillDatabase  style={{backgroundColor: "green",height: "80px", borderRadius: "14px", width: "80px", color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px", borderRadius: "10px", marginTop: "10px", backgroundColor: "black"}} > Apps</span>

</div></div>



<div  className = "Jb"  id ="jbox4"> ee  <div id ="jbox4R"  ref={jbox4R} onClick={() => HandleClick1(jbox4R) }>
<FaGoogle style={{backgroundColor: "green",height: "80px", borderRadius: "14px", width: "80px", color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px", marginTop: "10px",  backgroundColor: "black"}} > Search engine optimisation(SEO) </span>
</div></div>


 

<div id ="jbox5"><div id ="jbox5R" ref={jbox5R} onClick={() => HandleClick1(jbox5R) }  ><FaBuromobelexperte style={{backgroundColor: "green",height: "80px", borderRadius: "14px", width: "80px", color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px", marginTop: "10px", backgroundColor: "black"}} > Website and app management </span> </div> </div>


<div id = "jbox6">
<div id ="jbox6R"  ref={jbox6R} onClick={() => HandleClick1(jbox6R) }> <FaCcVisa style={{backgroundColor: "green",height: "80px", borderRadius: "14px", width: "80px",color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px", marginTop: "10px", backgroundColor: "black"}} > Encryption systems/e-commerce</span></div> </div>

 
<div id = "jbox7">
<div id ="jbox7R"  ref={jbox6R} onClick={() => HandleClick1(jbox6R) }> <FaCcVisa style={{backgroundColor: "green",height: "80px", borderRadius: "14px", width: "80px",color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px", marginTop: "10px", backgroundColor: "black"}} > Web and App design training</span></div> </div>


<div id = "jbox8">
<div id ="jbox8R"  ref={jbox6R} onClick={() => HandleClick1(jbox6R) }> <FaCcVisa style={{backgroundColor: "green",height: "80px", borderRadius: "14px", width: "80px",color:"white"}} className="icoo" /> 
<span className ="spanS" style={{fontSize: "18px", marginTop: "10px", backgroundColor: "black"}} > Artificial intelligence</span></div> </div>



</div>


</div>

   <div  ref={cRef}  className="C1"  > 

   <h1 onClick={Testclick}> click </h1>
 
</div>

   <div  ref={cRef1}  className="C1"  > 

   <h1 onClick={Testclick1}> click 2</h1>
 
</div>

 
<div  ref={cRef2}  className="C1"  > 

<h1 onClick={Testclick2}> click 2</h1>

</div>

<div  ref={cRef3}  className="C1"  > 

<h1 onClick={Testclick2}> click 2</h1>

</div>

<div  ref={cRef4}  className="C1"  > 

<h1 onClick={Testclick2}> click 2</h1>

</div>

<div  ref={cRef5}  className="C1"  > 

<h1 onClick={Testclick2}> click 2</h1>

</div>


</>
    );

 
    
}



export default BoxesJ;