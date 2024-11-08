import Link from "next/link"
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import ForumIcon from '@mui/icons-material/Forum';


const ContactCard = () => {
  return (
    <>
      <div className="">
            <div className="px-24 mx-auto text-center">
            <div className="grid grid-cols-3 gap-20 my-24 mx-auto">
            <div className="px-16 py-8 text-center shadow-md bg-white">
                    <i className="text-[4.2rem] text-[#e50914]"> <EmailIcon /> </i>
                        <h2 className="text-[1.8rem] mb-4">Email</h2>
                        <p className="m-0">Monday to Friday Expected </p>
                        <p className="mb-12">response time: 72 hours </p>
                        <Link href="/">  Send Email <span className="inline-block transition-transform duration-200">-&gt;</span></Link>
            </div>
            <div className="px-16 py-8 text-center shadow-md bg-white">
                        <i className="text-[4.2rem] text-[#e50914]"> <ChatIcon /> </i>
                        <h2 className="text-[1.8rem] mb-4">Live Chat</h2>
                        <p className="m-0">Weekdays: 9 AM — 6 PM ET</p>
                        <p className="mb-12">Weekends: 9 AM — 5 PM ET </p>
                        <Link href="/" >  Chat Now <span className="inline-block transition-transform duration-200">-&gt;</span></Link>
                    </div>

                    <div className="px-16 py-8 text-center shadow-md bg-white">
                        <i className="text-[4.2rem] text-[#e50914]"> <ForumIcon/> </i>
                        <h2 className="text-[1.8rem] mb-4">Community Forum</h2>
                        <p className="m-0"> Monday to Friday Expected </p>
                         <p className="mb-12">response time: 72 hours </p>
                        <Link href="/">  Ask The Community <span className="inline-block transition-transform duration-200">-&gt;</span></Link>
                    </div>
            </div>
            </div>
      </div>

    </>
  )
}

export default ContactCard
