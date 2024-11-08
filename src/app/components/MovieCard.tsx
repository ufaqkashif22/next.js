"use client";

import Image from "next/image"
import Link from "next/link";
import { MoviesInter } from "../../interface";
import { useEffect } from "react"; // Import useEffect
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles


 
const MovieCard = ({  imdbID, Title, Poster, Year,Type }: MoviesInter) => {
      // Initialize AOS in useEffect
  useEffect(() => {
    AOS.init({
      // duration: 800,  // Animation duration in ms
      once: false,    // Allows animation to trigger on scroll up as well
    });
  }, []);

  return (
    <>
      <div className="max-w-[26rem] shadow-[0px_1px_3px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] rounded-[0.8rem] bg-white">
        <div className="max-w-full h-auto">
            <Image
             src ={Poster}
             alt="poter"
            width={260}
            height={200}
            className="max-h-96 rounded-tr-[1rem] rounded-tl-[1rem]"
            data-aos="fade-up" 
            data-aos-delay="100" 
            data-aos-duration="2000"
            />
        </div>
        <div className="p-5 text-center">
                    <h2 className="text-[2rem] line-clamp-1  leading-7 font-bold">{Title}</h2>
                    <p className="overflow-hidden text-ellipsis mt-[1.3rem]  text-[2rem] font-semibold">{Type}</p>
                    <p className="my-4 text-2xl">{Year}</p>
                    <div className="flex justify-center mt-4"> 
                   <Link href={`/movie/${imdbID}`}>
                        <button className="px-10 align-middle">
                            Read More
                        </button>
                        </Link>
                        </div>
                   
                </div>

      </div>

    </>
  )
}

export default MovieCard
