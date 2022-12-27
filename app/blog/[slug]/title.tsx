"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function TitleComponent({ children }: { children: ReactNode }) {

	const [isSticky, setIsSticky] = useState(false)
	const ref = useRef<HTMLDivElement>()

	useEffect(()=>{
    const cachedRef = ref.current,
          observer = new IntersectionObserver(
            ([e]) => (setIsSticky(e.intersectionRatio < 1), console.log(e.intersectionRatio)),
            {
              threshold: [1],
            	rootMargin: '-70px 0px 0px 0px',  // alternativly, use this and set `top:0` in the CSS
            }
          )

    observer.observe(cachedRef!)
    
    // unmount
    return function(){
      observer.unobserve(cachedRef!)
    }
  }, [])

  return (
		<>
		<h1 className={`text-5xl tracking-wide leading-[4.5rem] font-extrabold transition`}>
		{children}
	</h1>
		{/* @ts-expect-error */}
    <div className="sticky top-[69px] z-20 flex " ref={ref}>
      <h1 className={`${!isSticky ? "opacity-0 scale-0" : "opacity-100 scale-100"} mt-1 text-center mx-auto backdrop-blur  px-3 bg-black/50 rounded-full tracking-wide font-semibold transition`}>
        {children}
      </h1>
    </div>
		</>
  );
}
