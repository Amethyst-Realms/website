//import 'server-only'

import "./globals.css";
// import SupabaseListener from '../components/supabase-listener'
// import createServerClient from '../lib/supabase-server'
// import { SupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { Database } from '../lib/database.types';

// do not cache this layout
export const revalidate = 0

// export type TypedSupabaseClient = SupabaseClient<Database>;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const supabase = createServerClient()

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()
  
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <SupabaseListener accessToken={session?.access_token} /> */}
        <div>{children}</div>
      </body>
    </html>
  );
}

