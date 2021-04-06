import {FcViewDetails} from "react-icons/fc";
import Image from 'next/image'

const Feat22 = () => {
  return (
    <div className="Feat">
      <h1>
        <b>App store applications</b>
      </h1>
      <div className="featdiv">
      <div className="featboxP">
        <p>We develop mobile apps for both android and apple platforms.</p>
        <p>
          This is an area that is slightly more complex and an area where prices
          are typically considerable higher. The average cost of an App in the
          UK can vary from £10,000 and up. However, a considerable amount of the
          costs are because they are situated in prime locations and rent alone
          can cost thousands a month.Furthermore, the majority of companies are
          charging you the hourly rate for features they reuse in other apps
        </p>
        <p>
          We do not think this is right and get around these issues by working
          from a small base and strive to recycle code whenever possible. Most
          companies will charge full price for a feature that they have
          implemented over and over. We won't, we will just inject the feature
          into the app and not charge you for countless hours we put into it.{" "}
        </p>

       
          <p>
           
            Can be used for simple websites or to create actual applications in
            the browser
          </p>
          <div className ="centered">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered1">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
 Can be used for simple websites or to create actual applications in
          the browser
          </div>
        </div>
          
      </div> 
    </div>
  );
};

const Feat2 = () => {
  return (
    <div className="Feat">
      <h1>
        <b>Website vs Web App</b>
      </h1>
      <div className="featdiv">
      <div className="featboxP">
     
      <p>
        Web apps work more like the programs on your desktop or phone. There is
        no browser refresh between clicks and information is updated in real
        time.
       
        Moreover, complex web applications can be delivered via interneal
        network or through the internet and provide desktop like appllication in
        the web browser .
      
      This has dramatically improved user experience and functionality.</p>

      <div>
    
      <div className ="centered">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
   <p></p> Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered1">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
  Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered1">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
    Can be used for simple websites or to create actual applications in
          the browser
        
        </div>

        <div className ="centered1">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        <div className ="centered1">
 <FcViewDetails size="50px" 
 style={{marginRight: "20px"}} />  
Can be used for simple websites or to create actual applications in
          the browser
        
        </div>
        

        </div>
         
        
         

        
        
         
        <li></li>
        <li>
          Complex system programs can be created and used in place of desktop
          apps
        </li>
        <li>Real time communication and instant updates</li>
        <li> Overall faster, better user experience </li>
        <li></li></div>
        </div>
       
   
    </div>
  );
};
export default function FeatBoxes() {
  return (
    <>
      <div className="containerFeat">
      <div classname="confeata">
        <Image src ="/spa.jpg" alt="spa" height={640} width={676}/>
        </div>
        <div className="confeta1">
        <Feat2 /></div>
      </div>
  
      <div className="containerFeat">
      <div classname="confeata">
        <Image src ="/spa.jpg" alt="spa" height={640} width={676}/>
        </div>
        <div className="confeta1">
      <Feat22 />
     </div>
      </div>

    
       
     
    </>
  );
}
