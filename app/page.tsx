import Image from "next/image";
import rove from "../public/logos/rove_banner.png";
import createClient from '../lib/supabase-server'
import { Database } from "../lib/database.types";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";


export const revalidate = 0



export default async function Home() {
  const supabase = createClient()
  const { data } = await supabase.from("test").select("*")

  
  return (
    <div>
      <div>
        <div>
          <Image
            src={rove}
            fill
            alt="rove banner"
            style={{ objectPosition: "center", objectFit: "cover" }}
          />
        </div>
        <h3 >
          Rove is an open-world, zombie survaival server thing. text text
          texttext
        </h3>
        <div >
        {JSON.stringify({ data }, null, 2)}
        </div>
      </div>
      
    </div>
  );
  }
