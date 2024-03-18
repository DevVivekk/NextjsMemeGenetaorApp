"use client"
import React from 'react'
import {Jost,Josefin_Sans,Lexend,Archivo_Black,Rubik} from 'next/font/google'
const jost = Jost({subsets:["latin"],weight:"400",style:"normal",variable:'--font-jost'})
const josefin = Josefin_Sans({subsets:["latin"],weight:"400",style:"normal"})
const lexind = Lexend({subsets:["latin"],weight:"600",style:"normal"})
const archivo = Archivo_Black({subsets:["latin"],weight:"400",style:"normal"});
const rubik = Rubik({subsets:["latin"],weight:"500",style:"normal"});
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './home.css'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
const Home = () => {
  return (
    <div className='home-div'>
    <header>
      <div className='home-image'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  style={{"objectFit":"cover","objectPosition":"center"}} src="https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600" alt="image" /></div>
      <div className='home-image-icon'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  style={{"objectFit":"cover","objectPosition":"center"}} src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f31a.svg" alt="image" /></div>
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
    </header>
    <div className='main-heading'>
    <div className='head-div'><h1>$URANUS Web</h1></div>
    <p className={`${jost.className} para-meme`}>Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on **Saturday, January 27**, then retrogrades again on **Sunday, September 1.** This suggests ongoing evolution in your home life and personal growth. 
Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.
In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So, **we are slowly moving into a new age, from Pisces to Aquarius**.</p>
    </div>
    <h2 className={archivo.className}>The Memeifesto</h2>
    <p style={{"marginBottom":"4rem"}} className={`${rubik.className} para-meme`}>Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope.</p>
    <div className='meme-divs'>
    <div>
    <div className='meme-div-image'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  style={{"objectFit":"cover","objectPosition":"center"}} src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F4d6ff0c5-fb06-41e2-91ea-611a6b227c8f%2FUntitled.png?table=block&id=a49515d9-58bb-4c79-833d-f50cddb5d455&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2" alt="image" /></div>
    <p className={`${josefin.className} meme-div-p`}>Everyone Loves to Pump Uranus more then they like when Uranus Dumps.</p>
    </div>

    <div>
    <div className='meme-div-image'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  style={{"objectFit":"cover","objectPosition":"center"}} src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F1b1f0650-faa3-4ad8-83a8-cb8546080154%2FUntitled.png?table=block&id=5d8b0f6e-1a90-4603-99ca-5f82cd31bdc6&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2" alt="image" /></div>
    <p className={`${josefin.className} meme-div-p`}>The liquidity injections just keep coming into Uranus.</p>
    </div>

    <div>
    <div className='meme-div-image'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill style={{objectPosition:"center",objectFit:"cover"}}  style={{"objectFit":"cover","objectPosition":"center"}} src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Faa5d7905-001d-4421-a62b-20d06dc94e56%2FUntitled.png?table=block&id=8f87aebd-40c4-40da-bf39-1a6189c260e1&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2" alt="image" /></div>
    <p className={`${josefin.className} meme-div-p`}>Hold onto Uranus!</p>
    </div>
    </div>
    <h2 className={`${archivo.className} h2-podcast`}>The Podcast</h2>
    <div className='podcast'>
    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/snbTCWL6rxo?si=VCNv75Zpfjw0UEW9&amp;start=12" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
      <section><FaLinkedin onClick={()=>window.open("https://linkedin.com/in/vivekbhardwaj-developer")} size={'2rem'} /><FaFacebookF size={'2rem'} /><FaInstagram size={'2rem'} /></section>
      </div>

      <div>
      <b>Copyright 2024 All right Reserverd</b>
      <section><span>Vivek Bhardwaj</span></section>
      </div>
    </footer>
    </div>
  )
}

export default Home