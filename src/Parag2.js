
import React, {button} from 'react';
import ReactDOM from 'react-dom';
import { AwesomeButton } from "react-awesome-button";
import {FiActivity} from "react-icons/fi";
 
 

const Parag2 = () => {
    const image1 = "https://live.staticflickr.com/4091/4955893877_e5773b7397_z.jpg"
    const computer = "https://i.ibb.co/gV9CXMb/download.png"
    const tablet = "https://i.ibb.co/fSLybdK/s3-t-1.png"
    const phone ="https://i.ibb.co/zr4kfpf/drimark.png"

    return (
        <div>

<div className = "con2" >
<img src ={"https://i.pinimg.com/originals/e7/39/da/e739dab5cfe24fd902eba7046393d625.jpg"} alt ="Image" />
<div className ="con2Ab">
<img id ="pc" src ={computer}alt="addlater" />
    
</div>
<div className ="con2Bb">
<img id ="pc" src ="https://i.ibb.co/fSLybdK/s3-t-1.png" alt="addlater" />
    
</div>

 
<div className ="con2BC">
<img id ="pc" src ={phone} alt="addlater" />
    
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