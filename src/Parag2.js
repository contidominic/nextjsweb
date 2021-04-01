
import React, {button} from 'react';
import ReactDOM from 'react-dom';
import { AwesomeButton } from "react-awesome-button";
import {FiActivity} from "react-icons/fi";

 
 

const Parag2 = () => {

    const computer = "https://i.ibb.co/K53fsWc/computer.png"
    const tablet = "https://i.ibb.co/7NWMJTF/tablet.png"
    const phone ="https://i.ibb.co/XF8jpwZ/phone.jpg"

    return (
        <div>

<div className = "con2" >
 
<div className ="con2Ab">
<img id ="pc" src ={computer}alt="addlater" />
    
</div>
<div className ="con2Bb">
<img id ="pc" src ={tablet} alt="addlater" />
    
</div>

 
 

<div id = "miniC1">
    <p style={{fontSize:"16px"}}>App Dev Agency</p>
    <p>We are single page and mobile app developers that focus on
     using the latest technology to produce apps to make your business 
     life easier </p>
   

   <div id ="Butt1">
   </div>
 
   </div>


        


</div>
    <div className = "con1" >
    <div className ="fullpic">
<img id ="pc" src ={computer} alt="addlater" />
<div className ="fullpic1">
<img id ="pc" src ={tablet} alt="addlater" />
    
</div>
  <div className ="fullpicmob">
<img id ="pc" src ={phone} alt="addlater" />
    
</div>  
</div>


    
    
    
    <div id = "miniC">
    <p style={{fontSize:"2.2vw"}}>App Dev Agency</p>
    <p>We are single page and mobile app developers that focus on using the latest technology to produce apps to make your business life easier</p>
   
   </div>
   <div id ="Butt">
   <button id = "but">Request callback </button></div>
    </div>

    </div>

      

    );
    
}

export default Parag2;