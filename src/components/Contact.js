import { ArchiveIcon } from "@heroicons/react/solid";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_adoym08', 'template_ynisof7', form.current, 'FYsu2jci_MTBCsWo8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <section id="contact">
            <div className="px-5 py-8 mb-40 mx-auto max-w-screen-md">
                <div className="text-center">
                    <ArchiveIcon className="w-10 inline-block mb-4" />
                </div>
                <h1 className="text-center text-4xl font-medium title-font pb-4">
                    Contact
                </h1>                
                <p class="mb-8 lg:mb-16 text-center sm:text-xl">Need some help on your game or translation project? Let me know!</p>
                <form class="space-y-8"  ref={form} onSubmit={sendEmail}>
                    <div>
                        <label for="email" class="block mb-2">Email</label>
                        <input type="email" id="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="verycoolperson@gmail.com" required/>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2">Subject</label>
                        <input type="text" id="subject" name="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Games, software, translation, or other?" required/>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2">Your message</label>
                        <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red sm:w-fit hover:bg-gray focus:ring-4">Send message</button>
                </form>
            </div>
        </section>
    );
}


