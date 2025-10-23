import 'server-only';
import type { Metadata } from "next";
import { data_store } from './actions';
import { getData } from '../memory_storage';

export const metadata: Metadata = {
  title: "Experimental Hub",
  description: "There can be no breakthroughs without the meddling with nature. Thus is experimentation.",
};

export default async function Page() {
  let words = await getData('bro_said');
  if (words == null) words = "I'm a goofy goober";
  return (
    <div>
      <p>{words}</p>
      <form action="/experimental/data_store" method='post'>
        <input type='text' name='bro_said'></input> <br></br>
        <button type='submit' formAction={data_store}>Submit</button>
      </form>
    </div>
  );
}