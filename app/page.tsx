import 'server-only'

import Image from "next/image";
import rove from "../public/logos/rove_banner.png";
import createClient from '../lib/supabase-server'
import { Database } from "../lib/database.types";


export const revalidate = 0



export default async function Home() {
  const supabase = createClient()
  const { data } = await supabase.from("test").select("*")

  
  return (
    <div>
      <div>
testing
        <div >
        {JSON.stringify({ data }, null, 2)}
        </div>
      </div>
      
    </div>
  );
  }
