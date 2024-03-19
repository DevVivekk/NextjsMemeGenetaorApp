"use client"
import React, { useEffect, useState } from 'react'
import {Jost,Josefin_Sans,Archivo_Black,Rubik} from 'next/font/google'
const jost = Jost({subsets:["latin"],weight:"400",style:"normal",variable:'--font-jost'})
const josefin = Josefin_Sans({subsets:["latin"],weight:"400",style:"normal"})
const archivo = Archivo_Black({subsets:["latin"],weight:"400",style:"normal"});
const rubik = Rubik({subsets:["latin"],weight:"500",style:"normal"});
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './home.css'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import Sidebar from '@/utils/sidebar/sidebar'
import Notify from '@/utils/notification/notify'
import { motion } from 'framer-motion'
const Home = () => {
  const [hide,setHide] = useState(true);
  const [index,setIndex] = useState(0);
  const handlesidebar = ()=>{
      setHide(!hide)
  }
  const [notify,setNotify] = useState(true);
  useEffect(()=>{
    if(index>=9){
      setIndex(0);
    }
    let timeinterval;
    timeinterval = setInterval(()=>{
      setIndex((prev)=>prev+1) 
        setNotify((prev)=>!prev);
    },2500)
    return ()=>{clearInterval(timeinterval)}
  },[notify,index])
  return (
    <main>
    <div className='home-div'>
     <Sidebar hide={hide} />
    <header>
      <div className='home-image'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}} src="https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600" alt="image" /></div>
      <div className='home-image-icon'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}} src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f31a.svg" alt="image" /></div>
      <div className='typing'>
      <TypeAnimation
      sequence={[
        'In Crypto We Trust',1000,'But in Uranus we believe!',1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
    <div onClick={()=>handlesidebar()} className='sidebar'>
    <BsLayoutSidebarInsetReverse size={'3rem'} color='black' />
    </div>
    </header>
    <div className='main-heading'>
    <motion.div initial={{rotate:"0deg",scale:0}} animate={{rotate:"360deg",scale:1}} exit={{rotate:"0deg",scale:0}} transition={{duration:0.5,type:"spring"}} className='head-div'><h1>$URANUS Web</h1></motion.div>
    <p className={`${jost.className} para-meme`}>Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on **Saturday, January 27**, then retrogrades again on **Sunday, September 1.** This suggests ongoing evolution in your home life and personal growth. 
Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.
In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So, **we are slowly moving into a new age, from Pisces to Aquarius**.</p>
    </div>
    <h2 className={archivo.className}>The Memeifesto</h2>
    <p style={{"marginBottom":"4rem"}} className={`${rubik.className} para-meme`}>Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope.</p>
    <motion.div transition={{delay:0.4}} initial={{opacity:0}} whileInView={{opacity:1}}  exit={{opacity:1}} className='meme-divs'>
    <div>
    <div className='meme-div-image'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}} src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F4d6ff0c5-fb06-41e2-91ea-611a6b227c8f%2FUntitled.png?table=block&id=a49515d9-58bb-4c79-833d-f50cddb5d455&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2" alt="image" /></div>
    <p className={`${josefin.className} meme-div-p`}>Everyone Loves to Pump Uranus more then they like when Uranus Dumps.</p>
    </div>

    <div>
    <div className='meme-div-image'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}} src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F1b1f0650-faa3-4ad8-83a8-cb8546080154%2FUntitled.png?table=block&id=5d8b0f6e-1a90-4603-99ca-5f82cd31bdc6&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2" alt="image" /></div>
    <p className={`${josefin.className} meme-div-p`}>The liquidity injections just keep coming into Uranus.</p>
    </div>

    <div>
    <div className='meme-div-image'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}} src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Faa5d7905-001d-4421-a62b-20d06dc94e56%2FUntitled.png?table=block&id=8f87aebd-40c4-40da-bf39-1a6189c260e1&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2" alt="image" /></div>
    <p className={`${josefin.className} meme-div-p`}>Hold onto Uranus!</p>
    </div>
    </motion.div>
    <h2 style={{"marginTop":"10rem"}} className={`${archivo.className} h2-podcast`}>The Podcast</h2>
    <motion.div transition={{delay:0.4}}  initial={{opacity:0}} whileInView={{opacity:1}}  exit={{opacity:1}} className='podcast'>
    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/snbTCWL6rxo?si=VCNv75Zpfjw0UEW9&amp;start=12" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </motion.div>
      <h2 className={`${archivo.className} uranus-memes`}><span className={'customspan'}>$URANUS</span> Memes for You!</h2>
      <motion.div transition={{delay:0.4}}  initial={{opacity:0}} whileInView={{opacity:1}}  exit={{opacity:1}} className='memes'>
      <div className='uranus-meme-div'>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fbf2f4077-f535-4195-9efb-52756a98070f%2FUntitled.png?table=block&id=89bfc120-2c14-43d7-9470-835afc89abb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2" alt="image" /></div>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F8b5aca2f-a69d-45ae-b403-a1a7db496f98%2FUntitled.png?table=block&id=ad352b03-5c03-471b-a134-d6f2c7ffcb9b&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=660&userId=&cache=v2" alt="image" /></div>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F855fd03b-cb37-4e2c-8214-fef34086a412%2FUntitled.png?table=block&id=ac349807-48b8-4bb7-ad5b-3602ca7fa421&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=800&userId=&cache=v2" alt="image" /></div>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F7c8c6796-19f1-40a3-9ed9-9392ec086769%2FUntitled.png?table=block&id=86243842-6f26-41a3-9f93-bb80a78f3fb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2" alt="image" /></div>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F3b662448-ca27-45ef-9d17-a4b5027bc5db%2FUntitled.png?table=block&id=bccefaca-50cf-4ba6-8f40-f38c3561b0b5&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1020&userId=&cache=v2" alt="image" /></div>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F1790eb96-29b6-4fb6-9c90-e7c58c2b19c0%2FUntitled.png?table=block&id=de2220c1-8ccd-426a-9fad-7efe5266ce14&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1290&userId=&cache=v2" alt="image" /></div>
      </div>
      <div className='uranus-meme-div'>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fbf2f4077-f535-4195-9efb-52756a98070f%2FUntitled.png?table=block&id=89bfc120-2c14-43d7-9470-835afc89abb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2" alt="image" /></div>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F8b5aca2f-a69d-45ae-b403-a1a7db496f98%2FUntitled.png?table=block&id=ad352b03-5c03-471b-a134-d6f2c7ffcb9b&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=660&userId=&cache=v2" alt="image" /></div>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F855fd03b-cb37-4e2c-8214-fef34086a412%2FUntitled.png?table=block&id=ac349807-48b8-4bb7-ad5b-3602ca7fa421&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=800&userId=&cache=v2" alt="image" /></div>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F7c8c6796-19f1-40a3-9ed9-9392ec086769%2FUntitled.png?table=block&id=86243842-6f26-41a3-9f93-bb80a78f3fb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2" alt="image" /></div>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F3b662448-ca27-45ef-9d17-a4b5027bc5db%2FUntitled.png?table=block&id=bccefaca-50cf-4ba6-8f40-f38c3561b0b5&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1020&userId=&cache=v2" alt="image" /></div>
      <div className='meme-div-image-slide'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F1790eb96-29b6-4fb6-9c90-e7c58c2b19c0%2FUntitled.png?table=block&id=de2220c1-8ccd-426a-9fad-7efe5266ce14&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1290&userId=&cache=v2" alt="image" /></div>
      </div>
      </motion.div>
      <motion.div transition={{delay:0.4}}  initial={{opacity:0}} whileInView={{opacity:1}}  exit={{opacity:1}} className='more-from'>
        <div>
        <h2 className={archivo.className}>More From $Uranus 🙋‍♂️</h2>
        </div>
        <div className='more-from-divs'>
          <div>
            <h3>Create Your Own Meme with $Uranus</h3>
            <button onClick={()=>window.open("https://uranus-meme-token.vercel.app")}>Visit <MdOutlineArrowOutward size={'2rem'}  /></button>
          </div>
          <div>
            <h3>Leave a secret feedback for $Uranus</h3>
            <button onClick={()=>window.open("https://yourtruewords.com/uranusMemeToken")}>Visit <MdOutlineArrowOutward size={'2rem'}  /></button>
          </div>
        </div>
      </motion.div>
      <div className='more-info'>
        <div className='head-info'>
          <h2 className='more-info-h2'>Subscribe to $URANUS Newsletter</h2><SlEnvolopeLetter color='white' size={'3rem'} />
        </div>
        <div className='subscribe'>
        <input className='info-input' type='text' placeholder='Enter Your Email' />
        <FaArrowRightLong size={'3rem'} />
        </div>
      </div>
    <footer>
      <div>
      <b>Partners</b>
      <ul>
      <li>Decentralized Intelligence Agency</li>
      <li>World Vibe Web</li>
      <li>Purplerock</li>
      </ul>
      </div>

      <div>
      <b>Resources</b>
      <ul>
      <li>Effective Vibes</li>
      <li>Golden Meme</li>
      </ul>
      </div>

      <div>
      <b>Social</b>
      <section><FaLinkedin onClick={()=>window.open("#")} size={'2rem'} /><FaFacebookF size={'2rem'} /><FaInstagram size={'2rem'} /></section>
      </div>

      <div>
      <b>Copyright 2024 All rights Reserverd</b>
      <section><span>Vivek Bhardwaj</span></section>
      </div>
    </footer>
    </div>
    <Notify index={index} notify={notify} />
    </main>
  )
}

export default Home