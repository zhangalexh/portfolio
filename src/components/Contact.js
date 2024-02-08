import { ArchiveIcon } from "@heroicons/react/solid";
import React, {useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [displayText, setDisplayText] = useState('');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_adoym08', 'template_ynisof7', form.current, 'FYsu2jci_MTBCsWo8')
        .then((result) => {
            console.log(result.text);
            setDisplayText("Submitted! Check your email for an auto-reply.")
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <section id="contact">
            <div className="px-2 lg:px-0 py-8 mb-40 mx-auto w-70 sm:w-10/12 lg:w-1/2 xl:w-1/3">
                <div className = "text-left lg:text-center">
                    <ArchiveIcon className="w-10 inline-block mb-4" />
                </div>
                <h1 className="text-left lg:text-center text-4xl font-medium title-font pb-4">
                    Contact
                </h1>                
                <p className="mb-8 text-xl text-left lg:text-center">I'm open to inquiries! Need help on your game or translation project? Let me know!</p>
                <form className="space-y-8"  ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="verycoolperson@gmail.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2">Subject</label>
                        <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Games, software, translation, or other?" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2">Your message</label>
                        <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red sm:w-fit hover:bg-gray focus:ring-4">Send message</button>
                    <p>{displayText}</p>
                </form>
            </div>
        </section>
    );
}


