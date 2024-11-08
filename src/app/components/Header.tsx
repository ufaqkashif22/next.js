import Image from "next/image"
import Link from "next/link"
import Nav from "./Nav"


const Header = () => {
  return (
    <header className="px-36 h-28 flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)]">
        <div className="text-left">
            <Link href="/">
                <Image src="/images/logo.png" alt="my logo image" width={150} height={40}/>
            </Link>
            
        </div>

        <Nav/>
        
    </header>
  )
}

export default Header
