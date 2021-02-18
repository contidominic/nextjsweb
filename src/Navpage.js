import React, { useState }  from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {FiActivity} from "react-icons/fi";
import NavR from "../src/navbMenu";
import { FcList } from "react-icons/fc";
 

import {FcViewDetails} from "react-icons/fc";
import Link from 'next/link'


export default function ButtonAppBar() {
    const [active, setActive] = useState(true);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [nav, setNav] = useState(false);

    const HandleNav =  () => {
      if (nav) {
      setNav(false)
      } else 
      setNav(true)
   
  
    
   
     
       } 

    
    const ButtonClickHandler0 =  () => {
      setActive1(false)
      setActive2(false)
      setActive3(false)
      setActive(true)
  
    
   
     
       } 
       const buttonClickHandler1 =  () => {
        setActive1(true)
        setActive(false)
        setActive2(false)
        setActive3(false)
         
           } 
           const buttonClickHandler2 =  () => {
            setActive2(true)
            setActive(false)
            setActive1(false)
            setActive3(false)
             
               } 
               const buttonClickHandler3 =  () => {
                setActive3(true)
                setActive(false)
                setActive2(false)
                setActive1(false)
                 
                   } 

  const display = {
  display: "none" 
  }


  

  return (
    <div id = "AppB" >
     {nav ? 

<div className ="insideNav">  <NavR />  </div>
  : 

<div> </div>
  
}



    <div id =" mobile1"  >
    
    <img src={" https://i.ibb.co/rkL8My8/logoo.png"} width="100%" height="100%" />
    <div className = "MenuIconbox">   <li className= "menuicon"> <FcList onClick={HandleNav} size="6vh"   /></li></div>
 
    </div>
    <div id = "flexy">
    <ul>
  
 
  {active ? 

  <li>  <AwesomeButton type="primary"> Leo  <FiActivity size="3vh" padding="2" style={{marginLeft: "20px"}}  /> 
    
    </AwesomeButton></li>
    : 

    <li><Link href="/Parag3"><a  onClick={ ButtonClickHandler0}>About</a></Link></li>
    
  }
  


  {active1 ? 

<li><AwesomeButton type="primary"> Leo  <FiActivity size="3vh" padding="2" style={{marginLeft: "20px"}}  /> 
  
  </AwesomeButton></li>
  : 

  <li><a  href="#contact" onClick={buttonClickHandler1}>About</a></li>
  
}

{active2 ? 

<li><AwesomeButton type="primary"> Leo  <FiActivity size="3vh" padding="2" style={{marginLeft: "20px"}}  /> 
  
  </AwesomeButton></li>
  : 

  <li><a  href="#contact" onClick={buttonClickHandler2}>About</a></li>
  
}

{active3 ? 

<li><AwesomeButton type="primary"> Leo  <FiActivity size="3vh" padding="2" style={{marginLeft: "20px"}}  /> 
  
  </AwesomeButton></li>
  : 

  <li><a  href="#contact" onClick={buttonClickHandler3}>About</a></li>
  
}

 
</ul>
    </div><div>
      
    </div></div>
  );
}
