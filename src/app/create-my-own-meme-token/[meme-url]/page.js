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
    const [color,setColor] = useState("");
    const [cond,setCond] = useState("")
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
      scale: 2, // Adjust the scale for better image quality
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
        <h2>Choose any of the template. 👇</h2>
        <select onChange={(e)=>setCond(e.target.value)}>
          <option value={"left"}>Left align Image</option>
          <option value={"right"}>Right align Image</option>
          <option value={"center"}>Centered align Image</option>
        </select>
        {cond==="left"?
        <section>
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
          </section>
          :cond==="right"?
          <section>
            <div ref={memeref} style={{"justifyContent":"flex-end"}} className="meme-page">
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
          </section>
          :
          <section>
            <div style={{"width":"35rem","height":"auto","minWidth":"auto","fontSize":"1rem"}} ref={memeref} className="meme-page">
                {/* Display meme data here */}
                {myimage && (<div className="meme-image" style={{"width":"35rem","height":"36rem"}}><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}} src={myimage} alt="meme-token" /> </div>)}
                {
                    memes&&memes.map((item,index)=>{
                        return(
                      <Draggable key={index}>
                     <h3 style={color?{color:color,"width":"34rem"}:{color:"black","width":"34rem"}}>{item}</h3>
                      </Draggable>
                        )
                    })
                }
            </div>
            <input value={meme} onChange={(e)=>setMeme(e.target.value)} type="text" placeholder="Enter your meme"></input><br />
            <label htmlFor="colorid">Choose Your color</label>
            <input type="color" id="colorid" onChange={(e)=>setColor(e.target.value)} placeholder="choose text color"/>
            <button id="text-btn" onClick={()=>handleClick()}>Add Text</button>
            <button onClick={()=>captureAndDownload()}>Download</button>
          </section>
        }
        </div>
    );
}

export default MemePage;
