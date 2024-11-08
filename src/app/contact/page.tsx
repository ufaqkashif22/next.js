"use client";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
      <>
        <div className="px-24 mx-auto text-center">
          <ContactCard/>
          <section className="my-24 mx-auto flex flex-col justify-center items-center">
                    <h2 className="text-5xl font-bold mb-10">We love to hear <span className="text-[#e50914]"> from you </span></h2>

                    <ContactForm />
                </section>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.991702651674!2d67.08468887515453!3d24.932352577882348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4eb7183b97%3A0x35709df45c0003aa!2sLucky%20One%20Mall!5e0!3m2!1sen!2s!4v1730741283880!5m2!1sen!2s" width="600" height="450" style={{border:0 }}  allowFullScreen  loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full"></iframe>
      </>
    );
  };
  
  export default Contact;