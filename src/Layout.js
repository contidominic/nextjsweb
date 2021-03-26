
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from "../src/Navpage";
import Middlesection from "../src/Middlesection";
 
import Decks from "../src/swipe/Cards";
 
 
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

 
   <Middlesection />
 
 
    </div>
  );
  
  export default Layout;

 
 

 
