
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
import TinderCard from 'react-tinder-card';
import Advanced from './swipe/Advanced';
 







 
 

const BoxesJ = () => {

    const [clicke, setClicked] = useState(false);
    const logoRef = useRef();
  
    const HandleClick = () => {
      if (!clicke) {
        setClicked(true);
        logoRef.current.style.height = "600px";
        logoRef.current.style.transition = "height 1s ease-in";
     
      
    
       
  
        
      
       
        
      } else {
        setClicked(false);
        logoRef.current.style.height = "0";
        logoRef.current.style.transition = "height 1s ease-out";
        
      }
    };
    const onSwipe = (direction) => {
      console.log('You swiped: ' + direction)
    }
    
    const onCardLeftScreen = (myIdentifier) => {
    return (
      <p> hey </p>
    )
    }
 
    return (  
<div id = "joinedBoxes" >
<div  className = "Jb" id ="jbox1">
<div id ="jbox1R">

<FiActivity onClick={HandleClick} style={{backgroundColor: "green", height: "30%", borderRadius: "54px", width: "24%", color:"white"}} className="icoo" /> 
<span className ="spanS"  style={{fontSize: "18px", marginTop: "10px"}} > No refresh websites(SPA) </span>
 
 </div></div>
 <div id="C1" style={{height: "0", backgroundColor:"#1f1d2b", transition: "height 2s ease-in"}} ref={logoRef} > 

 <div id ="swipe>">  <Advanced /> </div> 
 
 
 </div>


<div  className = "Jb"  id ="jbox2" > ee <div id ="jbox2R">
<AiFillDatabase style={{backgroundColor: "green", height: "30%", borderRadius: "54px", width: "25%", color:"white"}} className="icoo" /> 
<span class ="spanS" style={{fontSize: "18px"}} > Booking systems </span>

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




    );
    
}

export default BoxesJ;