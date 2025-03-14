import React from 'react';
import { Link } from 'react-router-dom'; 
import backgroundImage from '../assets/background.png';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="w-full h-[200px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Текст поверх изображения */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {/* Надпись "HOME / CONTACT" */}
          <p className="text-[10px] font-thin tracking-[1.4px] leading-[20px]">HOME   /   CONTACT</p>
          {/* Заголовок "Contact" */}
          <h1 className="text-4xl font-covered-by-your-grace">Contact</h1>
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <div className="w-[900px] bg-white p-9 rounded-xl ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="bg-[#4BAF47] p-9 rounded-lg">
              <h2 className="text-2xl font-Сovered-By-Your-Grace text-white mb-4 ">About</h2>
              <p className="text-white text-xs font-light">
                Lorem ipsum is simply free text used by copytypinh refreshing <br/> Neque porro est qui
              </p>
            </div>

            <div className="bg-[#C5CE38] p-9 rounded-lg">
              <h2 className="text-2xl font-covered-by-your-grace text-white mb-4">Contact</h2>
              <p className="text-white text-xs font-light">+1-(234)-333-0079</p>
              <p className="text-white text-xs font-light">Email: info@example.com</p>
              <p className="text-white text-xs font-light">+1-(234)-333-0079</p>
            </div>

            <div className="bg-[#EEC044] p-9 rounded-lg">
              <h2 className="text-2xl font-covered-by-your-grace text-white mb-4">Address</h2>
              <p className="text-white text-xs font-light">
                66 Broklun Road Golden Street, <br />
                New Your United States of <br />
                Ameriaca
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Вставка Google Maps */}
            <div className="bg-white p-6 rounded-lg">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792036926!2d-73.98542868459413!3d40.74881797932683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629999999999!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Контактная форма */}
            <div className="bg-white p-6 rounded-lg">
              <h1 className='text-[#EEC044]'>Contact Us</h1>
              <h2 className="text-4xl font-semibold text-black mb-4">Write a Messege</h2>
              <form>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    id="email"
                    placeholder="Email Adress"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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