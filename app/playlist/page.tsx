import { createClient } from "@supabase/supabase-js";
import { LiHTMLAttributes } from "react";

type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]
interface Database {
  public: {
    Tables: {
      testtable: {
        Row: {               // the data expected from .select()
          id: number
          Text: string
          Label: string // Json | null
        }
        Insert: {            // the data to be passed to .insert()
          id?: never         // generated columns must not be supplied
          Text: string       // `not null` columns with no default must be supplied
          Label?: string // Json | null // nullable columns can be omitted
        }
        Update: {            // the data to be passed to .update()
          id?: never
          Text?: string      // `not null` columns are optional on .update()
          Label?: string // Json | null
        }
      }
    },
    favouritemusic: {
      Row: {               // the data expected from .select()
        id: number
        title: string
        music: Json | null
      }
      Insert: {            // the data to be passed to .insert()
        id?: never         // generated columns must not be supplied
        title: string       // `not null` columns with no default must be supplied
        music?: Json | null // nullable columns can be omitted
      }
      Update: {            // the data to be passed to .update()
        id?: never
        title?: string      // `not null` columns are optional on .update()
        music?: Json | null
      }
    }
  }
}

function MusicListItem(props:{musicName : String}) {
  return (
    <div>
      <p>{props.musicName}</p>
    </div>
  )
}

export default async function Home() {
  let id = process.env.DATABASE_ID;
  let key = process.env.DATABASE_KEY;
  let client = createClient<Database>(id, key);

  let {data,status} = await client.from('favourite_music').select();

  if (status == 200) console.log(data);
  else console.log("a problem occurred");

  if (data){
    return (
      <div>
        <h1>My Favourite Music! :{')'}</h1>
        <ul>
          {data.map((item)=>(<li>{item['title']} <br/> <iframe src={'https://www.youtube.com/embed/'+item['music']} >if the video doesn't show then something is wrong</iframe></li>))}
        </ul>
      </div>
    );
  }
}
