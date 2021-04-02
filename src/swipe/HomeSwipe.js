import { render } from "react-dom";
import React, { useState , useEffect} from "react";
import dynamic from "next/dynamic";
import Decks from "./Cards";



const HomeSwipe = () => {
    const [Scr, SetScr] = useState (false);
  

    const HandleClick = () => {
        var scrolled = document.scrollingElement.scrollTop;
        scrolled > 200 ? SetScr(true) : null;
        console.log("done")
 

    }

    useEffect(() => {
        document.addEventListener("scroll", HandleClick);
      }, []);

    return (

      Scr ? <Decks /> : null 
    )

}

export default HomeSwipe;
 