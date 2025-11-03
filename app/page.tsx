"use client"
import Link from "next/link"
import { useEffect } from "react";

function playVivaldi() {
  let vivaldiplayer = document.getElementById("vivaldiplayer") as HTMLAudioElement;
  if (vivaldiplayer) vivaldiplayer.play();
}
export default function Home() {
  useEffect(playVivaldi)
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
        <h3>Can't handle the music?</h3>
        <audio id="vivaldiplayer" src={"/vivaldiFall.webm"} loop controls>could not load audio :(</audio>
      </div>
      
    </div>
  );
}
