"use client"
import html2canvas from "html2canvas";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import './ownmeme.css'
const MemePage = () => {
    const [myimage,setMyimage] = useState("");
    const [meme,setMeme] = useState("");
    const [memes,setMemes] = useState([]);
    useEffect(()=>{
        const img= localStorage.getItem("image");
        setMyimage(img)       
    },[])
    const memeref = useRef(null);
    const captureAndDownload = () => {
      const element = memeref.current;
  
      if (!element || memes.length<=0) {
        alert("No meme text found!");
        return;
      }
  
      // Use html2canvas to capture the content of the div
      html2canvas(element, {
      scale: 1.5, // Adjust the scale for better image quality
      }).then((canvas) => {
        // Convert the canvas to a data URL
        const dataUrl = canvas.toDataURL();
  
        // Create a link element and set its attributes
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'uranustoken.png'; // You can change the file name and extension
  
        // Append the link to the document and trigger a click event
        document.body.appendChild(link);
        link.click();
  
        // Remove the link from the document
        document.body.removeChild(link);
      })
  };

  const handleClick = ()=>{
    if(!meme){
        alert("Enter your meme first!")
    }else{
    setMemes((prev)=>([...prev,meme]))
    setMeme("");
    }
  }
    return (
        <div className="meme-div">
        <h1>Add, drag & place your text, download and Share your own Crypto meme token!</h1>
            <div ref={memeref} className="meme-page">
                {/* Display meme data here */}
                {myimage && (<Draggable><div className="meme-image"><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='lazy' fill style={{objectPosition:"center",objectFit:"cover"}} src={myimage} alt="meme-token" /> </div></Draggable>)}
                {
                    memes&&memes.map((item,index)=>{
                        return(
                      <Draggable key={index}>
                     <h3>{item}</h3>
                      </Draggable>
                        )
                    })
                }
            </div>
            <input value={meme} onChange={(e)=>setMeme(e.target.value)} type="text" placeholder="Enter your meme"></input>
            <button id="text-btn" onClick={()=>handleClick()}>Add Text</button>
            <button onClick={()=>captureAndDownload()}>Download</button>
        </div>
    );
}

export default MemePage;
