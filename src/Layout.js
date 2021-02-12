
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from "../src/Navpage";
import Middlesection from "../src/Middlesection";
import Parag2 from "../src/Parag2";
 

 
const Layout = props => (
    <div className ="Pageinbox" >
      <ButtonAppBar />
 
 <div className ="Property">
        {props.children}
  </div>
      <Parag2 />
   <Middlesection />
   <Middlesection />
    </div>
  );
  
  export default Layout;

 
 

 