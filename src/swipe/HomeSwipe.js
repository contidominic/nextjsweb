 
import React, { useState , useEffect} from "react";
import dynamic from "next/dynamic";
import Decks from "./Cards";



const HomeSwipe = () => {
    const [Scr, SetScr] = useState (false);
  

    const HandleClick = () => {
        var scrolled = document.scrollingElement.scrollTop;
        console.log(scrolled)
        scrolled > 600 ? SetScr(true) : null;
      
 

    }

    useEffect(() => {
        window.addEventListener("scroll", HandleClick);
        return () => {
            window.removeEventListener('scroll',HandleClick);
          };
      
      }, []);

    return (

<>
     {Scr ? <Decks /> : null }

    </>
    )

}

export default HomeSwipe;
 