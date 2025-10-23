import 'server-only';
import type { Metadata } from "next";
import { data_store } from './actions';
import * as fs from 'fs';

export const metadata: Metadata = {
  title: "Experimental Hub",
  description: "There can be no breakthroughs without the meddling with nature. Thus is experimentation.",
};

export async function getData() {
  'use server'
  const words = fs.readFileSync('persistent_storage/goobers.txt', 'utf-8');
  return words;
}

export default async function Page() {
  const words = getData()
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