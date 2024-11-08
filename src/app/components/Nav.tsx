import Link from "next/link"


const Nav = () => {
  return (
    <nav className="flex ml-auto">
        <div className="">
            <ul className="flex items-center gap-8">
                <li className="h-full grid place-items-center ">
                    <Link href="/" className="font-bold text-[1.8rem] text-[#161617] p-[1.3rem_1rem] m-0 relative overflow-hidden  hover:text-[#e50914]">
                        Home
                    </Link>
                </li>
                <li className="h-full grid place-items-center">
                    <Link href="/about" className="font-bold text-[1.8rem] text-[#161617] p-[1.3rem_1rem] m-0 relative overflow-hidden hover:text-[#e50914]">
                        About
                    </Link>
                </li>
                <li className="h-full grid place-items-center">
                    <Link href="/movie" className="font-bold text-[1.8rem] text-[#161617] p-[1.3rem_1rem] m-0 relative overflow-hidden hover:text-[#e50914]">
                    Movie
                    </Link>
                </li>
                <li className="h-full grid place-items-center">
                    <Link href="/contact" className="font-bold text-[1.8rem] text-[#161617] p-[1.3rem_1rem] m-0 relative overflow-hidden hover:text-[#e50914]">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
      
    </nav>
  )
}

export default Nav
