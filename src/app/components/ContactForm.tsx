import { useState } from "react"


const ContactForm = () => {
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        message:""
    })

    const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const{name,value} = e.target;
        setUser((prevData)=>({
            ...prevData,
            [name]:value
        })
       
    )}

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault(); // Prevent page reload on submit
        console.log(user); // Handle form submission, like sending data to a server
    }
  return (
    <>
      <form className="max-w-[48rem] min-w-[32rem] p-8 shadow-lg border text-left" onSubmit={handleSubmit}>
            <div className="mb-8">
                <label htmlFor="username" className="text-[1.5rem] block capitalize">
                    Enter Your Name
                    <input 
                        type="text"
                        name="username"
                        id ="username"
                        placeholder="enter your name"
                        required
                        autoComplete="off"
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={user.username}
                        onChange={handleChange}

                      />
                </label>
            </div>
            <div className="mb-8">
                <label htmlFor="emai" className="text-[1.5rem] block capitalize">
                    Email
                    <input 
                        type="text"
                        name="email"
                        id ="email"
                        placeholder="enter your name"
                        required
                        autoComplete="off"
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={user.email}
                        onChange={handleChange}
    

                      />
                </label>
            </div>
            <div className="mb-8">
                <label htmlFor="phone" className="text-[1.5rem] block capitalize">
                    Phone Number
                    <input 
                        type="number"
                        name="phone"
                        id ="phone"
                        placeholder="enter your name"
                        required
                        autoComplete="off"
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={user.phone}
                        onChange={handleChange}

                      />
                </label>
            </div>
            <div className="mb-8">
                <label htmlFor="message" className="text-[1.5rem] block capitalize">
                    Message
                    <textarea 
                        
                        name="message"
                        id ="message"
                        rows={5}
                        placeholder="enter your message"
                        required
                        autoComplete="off"
                         className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                         value={user.message}
                         onChange={handleChange}

                      />
                </label>
            </div>
            <div>
                <button  type="submit">Send Message</button>
            </div>
      </form>
    </>
  )
}

export default ContactForm
