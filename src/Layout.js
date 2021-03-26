
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from "../src/Navpage";
import Middlesection from "../src/Middlesection";
<<<<<<< HEAD
import Decks from "../src/swipe/Cards";
=======
>>>>>>> 28e88dd6f74bb1bcdc2cb93db51e9ada70ddd7e6
 
import BoxesJ from "../src/boxesJ";
import FeatBoxes from "../src/pageone/FeatBoxes";
 
 
 

import Head from "next/head";

 
const Layout = props => (
    <div className ="Pageinbox" >
      <ButtonAppBar />
 
      <Head>
      <title>WHATABYTE</title>
    </Head>
 
 <div className ="Property">
        {props.children}
  </div>
<BoxesJ />
<div className ="featureBC"> <FeatBoxes /> </div>
<div id ="root1"> <Decks/> </div>


  
    

 
   <Middlesection />
<<<<<<< HEAD


    
=======
   
>>>>>>> 28e88dd6f74bb1bcdc2cb93db51e9ada70ddd7e6
    </div>
  );
  
  export default Layout;

 
 

 
