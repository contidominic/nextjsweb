import React from "react";
import Cube from "react-cube-navigation";

const images = [
"https://i.pinimg.com/originals/a8/5d/b0/a85db0da565cb289cbaad043a63f850d.jpg",
  "https://i.pinimg.com/originals/ca/9a/a1/ca9aa16fb57427ac88c24aa691bd7867.png",
  "https://lh3.googleusercontent.com/proxy/r5Al1_SV7l7cR14J1tsYBr8yPomZmlbi9Xjvdxwz1cdlX6_YlEPlhaE-UlJFshEhaYQKBufk0GJZi8BFcMZDSN97XoGOpS2tpM1YaGPVH9f3RBmdWg-TUHu6v0-_R3n4mtHFWYFjpENuuNThfH751TFVplJNYg",
  "https://i.pinimg.com/564x/17/b4/e9/17b4e9a3fbc57796d77bcdd98554a5af.jpg",
  "https://i.pinimg.com/736x/d8/db/ba/d8dbba7556da0c93f5f6c71c762b85eb.jpg",

  "https://images.unsplash.com/photo-1565287753977-e94d0227c640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
  "https://images.unsplash.com/photo-1565340076861-7a6667b36072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1565259901762-b8d797c6f887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
];

export default function Cube1 () {
  const [index, setIndex] = React.useState(0);

  const w = 544;
  const h =  666;

function Tryit (i)  {
   setIndex(i)


  }

  return (
    <div className="try" >
    <div  
  
      style={{
       
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "710px",
        width:"100%",
         
      
        backgroundColor: "#1f1d2b"
      }}
    
    >
      <Cube
      index={index}
      onChange={Tryit}
      width={400}
      height={600}
      hasNext={i => i < images.length - 1}
      lockScrolling={false}
      renderItem={(i, active) => {
        return (
          <div
          className="boxx"
            style={{
              backgroundImage: `url(${images[i]})`,
              backgroundSize: "cover",
              backgroundSize:"100% 100%",
              backgroundRepeat: "no-repeat",
              
              flex: 2,
              borderRadius: "1rem",
              boxShadow: "3px 2px 3px 1px solid black"
            }}
          />
        );
      }}
    />

  </div>
    </div>
    );
  }