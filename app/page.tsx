import Link from 'next/link'

export default function Home() {
  return (
    <div className="rootpage">
      <h1>Greetings, Honoured Guests</h1>
      <p>
        Good day, dear guests; and welcome to mine <b><i>humble abode</i></b>. <br></br>
          May thine eyes bless you with that which thy desires doth seek:
      </p>
      <ul>
        <li><Link href="/experimental">Experimental Project</Link></li>
      </ul>
    </div>
  );
}
