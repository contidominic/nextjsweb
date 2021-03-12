
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from "../src/Navpage";
import Middlesection from "../src/Middlesection";
import Cube1 from "../src/Cube1";
import BoxesJ from "../src/boxesJ";
 
 
 

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

   <Middlesection />
    

 
   <Middlesection />
     <Cube1 />
    </div>
  );
  
  export default Layout;

 
 

 