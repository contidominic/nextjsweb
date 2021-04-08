import React, { useState , useEffect} from "react";
import {FcViewDetails} from "react-icons/fc";
import Image from 'next/image'

export default function Featboxes1() {
  const [Scr, SetScr] = useState (false);
  

 

  useEffect(() => {
    SetScr(true) 
    }, []);

  return (
 
   <div className="imageC">
    <div className="confeatt">
     <div className="firstDiv">
     <div id ="test1" style={{ position: 'relative', width: "100%", height: 'auto' }}>

     {Scr ?

     <Image
      alt="Mountains"
      src="/webapp.jpg"
          layout="responsive"
      width={800}
      height={447}
      quality={40}
      sizes="(max-width: 600px) 40vw, (max-width: 1023px) 48vw, 23vw"
     
    />

: null }
     
      
    </div>
    </div>


    <div className="secondDiv"> <h1 style={{textAlign: "center"}}> Website vs Web App</h1>
    <p>
        Web apps work more like the programs on your desktop or phone. There is
        no browser refresh between clicks and information is updated in real
        time.
       
        Moreover, complex web applications can be delivered via interneal
        network or through the internet and provide desktop like appllication in
        the web browser .
      
      This has dramatically improved user experience and functionality.</p>
   <p>
          We do not think this is right and get around these issues by working
          from a small base and strive to recycle code whenever possible. Most
          companies will charge full price for a feature that they have
          implemented over and over. We won't, we will just inject the feature
          into the app and not charge you for countless hours we put into it.{" "}
        </p>

       
          <p style={{paddingBottom: "15px"}}>
           
            Can be used for simple websites or to create actual applications in
            the browser
          </p>
          <div className ="centered">
 <FcViewDetails size="40px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
    
        <div className ="centered">
 <FcViewDetails size="40px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered">
 <FcViewDetails size="40px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered">
 <FcViewDetails size="40px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered">
 <FcViewDetails size="40px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
          </div>
      </div>

    </div> </div>
  )
}
