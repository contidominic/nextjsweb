import React, { useState , useEffect} from "react";
import Image from 'next/image'

export default function Featboxes1() {
  const [Scr, SetScr] = useState (false);
  

  const HandleClick = () => {
      var scrolled = document.scrollingElement.scrollTop;
      scrolled > 500 ? SetScr(true) : null;
      console.log("done")


  }

  useEffect(() => {
      document.addEventListener("scroll", HandleClick);
    }, []);

  return (
 
   <div className="imageC">
    <div className="confeatt">
     <div className="firstDiv">
     <div id ="test1" style={{ position: 'relative', width: "100%", height: '500px' }}>

     {Scr ?

     <Image
      alt="Mountains"
      src="/spa.jpg"
      layout="intrinsic"
      width={700}
      height={475}
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
   
      </div>

    </div> </div>
  )
}
