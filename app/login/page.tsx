'use client'

import { useState } from "react";

// import supabase from '../../lib/supabase-browser'

// export default function Login() {
//   const handleLogin = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: 'github',
//     })

//     if (error) {
//       console.log({ error })
//     }
//   }

//   const handleLogout = async () => {
//     const { error } = await supabase.auth.signOut()

//     if (error) {
//       console.log({ error })
//     }
//   }

//   return (

// 			<>
// 				<button onClick={handleLogin}>Login</button>
// 				<button onClick={handleLogout}>Logout</button>
// 			</>

// 	)
// }

export default function Login() {

  const letters = "spheresnless".split("")
  const [words, setWords] = useState("")

  const handleSpheresWord = () => {
    setWords("")
    letters.forEach((letter, i) => {
      setTimeout(() => {
        setWords(v => v += letter)
      }, 100 * i);
    })
  }

  return (
    <div className="flex py-10 px-20 flex-col items-start">
      <div className="rounded-lg shadow-lg px-4 py-2" onClick={handleSpheresWord}>Click to do words :flushed:</div>
      <div className="mt-10">Output: {words}</div>
    </div>
  );
}
