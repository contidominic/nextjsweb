
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { FcList } from "react-icons/fc";
import { FcElectronics } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import { FcAddressBook} from "react-icons/fc";
import { FcMultipleDevices} from "react-icons/fc";





const NavR = () => {
    const [nav1, setNav1] = useState(true);


    const NavItems = () => {
        return (

            <div >
            <div className="NavRtop">
            
               <div className="navRtop1"> </div>
         
            
              
            </div>
            <div className="navR2"> <h1> </h1> </div>
     <div className="BoxMenu1">

            <div className="navMenu1"> 
            <div className="boxsmall"> <div> Menu </div> </div>
            <div class="navMenu2">  
            <div className="color1"><FcList /> Leo</div>
  <div classname="color3"> <FcList /> Leo </div>
  </div>
         
         <div class="navMenu3">  
            <div className= "color3" > <FcElectronics /> Lisa </div>
  <div><FcMultipleDevices /> goldie</div>
  </div>

  <div class="navMenu4">  
            <div><FcGallery /> Leo</div>
  <div><FcAddressBook /> boss</div>
  </div>
 
         

         
       


         
                </div>
                
                </div>
        </div>


        );
        }
 

    
return (
  
    
   

 <NavItems />  

)
}

export default NavR;