import React from 'react';
import { Link } from 'react-router-dom'; 
import backgroundImage from '../assets/background.png';
import formBg from '../assets/fromBg.svg';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="w-full h-[200px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="text-[10px] font-thin tracking-[1.4px] leading-[20px]">HOME   /   CONTACT</p>
          <h1 className="text-4xl">Contact</h1>
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <div className="w-[900px] bg-white p-9 rounded-xl ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
            <div className="bg-[#4BAF47] p-9 rounded-lg">
              <h2 className="text-2xl font-first text-white mb-4 ">About</h2>
              <p className="text-white text-xs font-light">
                Lorem ipsum is simply free text used by copytypinh refreshing <br/> Neque porro est qui
              </p>
            </div>

            <div className="bg-[#C5CE38] p-9 rounded-lg">
              <h2 className="text-2xl font-first text-white mb-4">Contact</h2>
              <p className="text-white text-xs font-light">+1-(234)-333-0079</p>
              <p className="text-white text-xs font-light">Email: info@example.com</p>
              <p className="text-white text-xs font-light">+1-(234)-333-0079</p>
            </div>

            <div className="bg-[#EEC044] p-9 rounded-lg">
              <h2 className="text-2xl font-first text-white mb-4">Address</h2>
              <p className="text-white text-xs font-light">
                66 Broklun Road Golden Street, <br />
                New Your United States of <br />
                Ameriaca
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[40%_60%] gap-0 bg-[#F8F7F0]">
            <div className="bg-white rounded-lg">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902453.1281218319!2d76.964464446875!3d27.92628239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974bad6f4bc682d%3A0xa78535584c577395!2sRAMA%20ACADEMY!5e0!3m2!1sru!2skz!4v1742072007101!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div
              className="p-20 rounded-lg"
              style={{ backgroundImage: `url(${formBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <h1 className='text-[#EEC044] font-first'>Contact Us</h1>
              <h2 className="text-4xl font-semibold text-black mb-4">Write a Message</h2>
              <form>
                <div className="flex gap-4 mb-4">
                  <input
                    className="w-1/2 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs font-light bg-white bg-opacity-80"
                    type="text"
                    id="name"
                    placeholder="Name"
                  />
                  <input
                    className="w-1/2 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs font-light bg-white bg-opacity-80"
                    type="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs font-light bg-white bg-opacity-80"
                    id="message"
                    rows="5"
                    placeholder="Write a Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-1/2 h-10 bg-[#4BAF47] text-white text-xs font-light py-2 px-4 rounded-lg hover:bg-[#3a8a3a] transition-colors"
                >
                  Send a Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/"
        className="mt-8 text-blue-600 hover:text-blue-800 underline transition-colors"
      >
        ← Back to Projects
      </Link>
    </div>
  );
};

export default Contact;