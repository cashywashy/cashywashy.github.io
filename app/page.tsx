"use client"
import Link from "next/link"
import { MouseEvent, useEffect, useRef } from "react";

// function playVivaldi() {
//   let vivaldiplayer = document.getElementById("vivaldiplayer") as HTMLAudioElement;
//   if (vivaldiplayer) vivaldiplayer.play();
// }

export default function Home() {
  const refer = useRef(null);

  const buttonListener = (e : any) => {
    let vivaldiFrame = document.getElementById("vivaldiAudio") as HTMLIFrameElement;
    let ctxButton = e.target as HTMLButtonElement;
    if (vivaldiFrame) {
      let playPauseElement = vivaldiFrame.contentDocument?.getElementById("media") as HTMLAudioElement;
      if (ctxButton.textContent == "Pause") {
        playPauseElement.pause();
        ctxButton.textContent = "Play";
      }
      else if (ctxButton.textContent == "Play") {
        playPauseElement.play();
        ctxButton.textContent = "Pause";
      }
      else {
        vivaldiFrame.remove();
        ctxButton.textContent = "you renamed this button >:( no more Vivaldi for you";
        ctxButton.removeEventListener("click", e);
      }
    }
  };

  useEffect(()=>{
    let vivaldiButton = document.getElementById("vivaldiButton");
    if (vivaldiButton) {
      let vivaldiElement = document.getElementById("vivaldiAudio") as HTMLAudioElement;
      if (vivaldiElement) vivaldiElement.play();
      vivaldiButton.addEventListener("click",buttonListener);
    }
  },[]);
  
  return (
    <div className="rootpage">
      <div>
        <h1 style={{margin: 0, padding:8}}>Greetings, Honoured Guests</h1>
        <p>
          Good day, dear guests; and welcome to mine <b><i>humble abode</i></b>. <br></br>
            May thine eyes bless you with that which thy mayeth doth seek:
        </p>
        <ul>
          <li><Link href="https://github.com/cashywashy">Public Projects</Link></li>
          <li><Link href="playlist">My Favourite Playlist :)</Link></li>
        </ul>
      </div>

      <div className="overlay" style={{bottom: 0}}>
        <h3>You must start the background music yourself because Google Chrome is a meanie poopoo head {'>'}:{'('}</h3>
        <button id="vivaldiButton">Pause</button>
        <audio src="/vivaldiFall.webm" autoPlay loop style={{display:"none"}} id="vivaldiAudio"/>

      </div>
    </div>
  );
}
