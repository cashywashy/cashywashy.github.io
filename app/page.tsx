import Link from 'next/link'

export default function Home() {
  return (
    <div className="rootpage">
      <div>
        <h1 style={{margin: 0, padding:8}}>Greetings, Honoured Guests</h1>
        <p>
          Good day, dear guests; and welcome to mine <b><i>humble abode</i></b>. <br></br>
            May thine eyes bless you with that which thy desires doth seek:
        </p>
        <ul>
          <li><Link href="/experimental">Experimental Project</Link></li>
        </ul>
      </div>
      <div className='overlay' style={{bottom: 0}}>
        <h3>Can't handle the music?</h3>
        <audio src={'/vivaldiFall.webm'} autoPlay loop controls>
          could not load audio
        </audio>
      </div>
      
    </div>
  );
}
