"use client"
import { useEffect, useState } from 'react';
import './page.css'
import ReactTypingEffect from 'react-typing-effect';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from 'next/navigation';
async function fetchMeme() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data = await res.json();
  return data;
}
const Page = () => {
  const [data, setData] = useState([]);
  const [list,setList] = useState(8);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
      const fetchData = async () => {
          const memeData = await fetchMeme();
          setData(memeData.data.memes);
      };
      fetchData();
  }, []);

  function hoverhandle(index){
  if(typeof window !=="undefined"){
    const an = document.getElementsByClassName("meme-button")
    an[index].classList.remove("hide-me")
  }
}
function removerhover(index){
  if(typeof window !=="undefined"){
    const an = document.getElementsByClassName("meme-button")
    an[index].classList.add("hide-me")
  }
}


useEffect(() => {
  let timeoutId;
  const handleScroll = () => {
    if(list>=data.length){
      return
    }else{
    //console.log("window.innerHeight + window.scrollY", (window.innerHeight + window.scrollY));
    //console.log("document.body.offsetHeight", document.body.offsetHeight)
    //if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setLoading(true);
      timeoutId = setTimeout(() => {
        setList(prev => prev + 3);
        setLoading(false);
      }, 1000);
    //}
  };
  }
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    clearTimeout(timeoutId);
  };
}, [loading,list,data.length]);

//navigation
const router  = useRouter();
const handelNavigate = (item)=>{
  localStorage.setItem("image",item);
  router.push('/create-my-own-meme-token/uranus')
}
  return (
    <div className='meme-landing'>
    <div className='main-head'>
      <h1>Uranus | A crypto meme token web app! <span id="wave">👋</span></h1>
      <section><ReactTypingEffect eraseSpeed={1} style={{"fontSize":"2rem"}} cursor="/"
        text={["Create your own token", "Share it with the world!"]}
      /></section>
    </div>
    <div className='meme-list'>
    {
      data&&data.slice(0,list).map((item,index)=>{
        return(
      <div onMouseEnter={()=>hoverhandle(index)} onMouseLeave={()=>removerhover(index)} key={index}>
      <div key={index} className="meme-image"><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}} src={item.url} alt="meme-token" /> </div>
      <button onClick={()=>handelNavigate(item.url)} className='meme-button hide-me'>Create Token</button>
      </div>
      )
    })
    }
    {loading&&<h2 className='loading'>Loading Please take your seat..</h2>}
    </div>
    <section className='footer'>
      <p>Connect with me on </p><FaLinkedin onClick={()=>window.open("https://linkedin.com/in/vivekbhardwaj-developer")} size={'3rem'} />
    </section>
    </div>
)}

export default Page