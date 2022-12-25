import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./database.types";

const server = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

export default server;
