
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { FcList } from "react-icons/fc";
import { AwesomeButton } from "react-awesome-button";
import { FcElectronics } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import { FcAddressBook} from "react-icons/fc";
import { FcMultipleDevices} from "react-icons/fc";
import {FaFacebookSquare} from "react-icons/fa";
 

<FcAddressBook size="3vh" padding="2" size="10vw" />



const NavR = () => {
    const [nav1, setNav1] = useState(true);

    

    const NavItems = () => {
        return (

            <div style={{height: "100%"}} >
            <div className="NavRtop">
            
               <div className="navRtop1"></div>
               

         
            
              
            </div>
<div className="mainLogo">
<img src={"    https://www.iottechtrends.com/assets/uploads/2019/09/Nest-Headline-800x400.png"} width="30%" height="30%" />


</div>            
         

         <div className="sectionHeader">
            <p> Services </p>
         </div>
        

            <div className = "boxMain">
        
            <div id="testB" > <AwesomeButton type="primary" > <FcElectronics size="8vh" padding="2" style={{marginRight: "-380px"}} /><li style={{listStyle: "none", margin: "20px"}}>
 Mobile Apps </li>
 
    
    </AwesomeButton> </div> 

     <div id="testB3" style={{marginTop: "6px"}}  > <AwesomeButton type="primary" > <FcElectronics size="8vh" padding="2" style={{marginRight: "-380px"}} /><li style={{listStyle: "none", margin: "20px"}}>
 Mobile Apps </li>
 
    
    </AwesomeButton> </div> 
    <div id="testB4" style={{marginTop: "6px"}} > <AwesomeButton type="primary" > <FcElectronics size="8vh" padding="2" style={{marginRight: "-380px"}} /><li style={{listStyle: "none", margin: "20px"}}>
 Mobile Apps </li>
 
    
    </AwesomeButton> </div>    <div id="testB5"  style={{marginTop: "6px"}} > <AwesomeButton type="primary" > <FcElectronics size="8vh" padding="2" style={{marginRight: "-380px"}} /><li style={{listStyle: "none", margin: "20px"}}>
 Mobile Apps </li>
 
    
    </AwesomeButton> </div> 
    <div id = "testB2" style={{marginTop: "6px"}}  > <AwesomeButton type="primary" > <FcElectronics size="8vh" padding="2" style={{marginRight: "-380px"}} /><li style={{listStyle: "none", margin: "20px"}}>
 Mobile Apps </li>
 
    
    </AwesomeButton> </div> 

  
    <div className="navFooter">

  
    
      <FaFacebookSquare size="6vh"/>     <FaFacebookSquare size="6vh"/>     <FaFacebookSquare size="6vh"/>
      </div>
</div>


 </div>
   
  

        );
        }
 
 
    
    
return (
  
    
   

 <NavItems />  

);
}
 

export default NavR;
