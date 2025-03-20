



import React, { useState } from "react";
import arrow from "../../assets/images/arrow.svg";  // Обновите путь к изображению стрелки
import Contact from "../contact/Contact";
import fromBg from '../../assets/images/fromBg.svg';
import Footer from "../shop/Footer";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Компонент контактной карточки
  const ContactCard = () => {
    return (
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
        <div className="text-center bg-[#EEC044] pt-4 pb-3 px-6 rounded-[20px_20px_0_0] max-sm:px-4 max-sm:py-3">
          <div className="text-white text-lg mb-0.5">Call us anytime</div>
          <div className="text-white text-xl font-bold max-sm:text-xl">
            666 888 0000
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
    <section 
      className="flex gap-8 items-start mx-auto my-0 px-5 py-30 max-lg:gap-6 max-md:flex-col"
      style={{
        backgroundImage: 'url(./images/zel1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '',
        backgroundSize: '500px 650px',
        zIndex: '0'
      }}
    >
      {/* Левая часть – изображение и контактная карточка */}
      <div className="sticky top-0 ml-[300px] flex-[0_0_350px] max-md:flex-[0_0_auto] max-md:w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c18763ee02baa8d39344c9ddf1914fc2a5f20799"
          alt="Kale leaves"
          className="w-full h-[400px] object-cover rounded-[20px]"
        />
        <ContactCard />
      </div>

      {/* Правая часть – FAQ */}
      <div className="flex-1 ml-[100px]">
        <header className="mb-8 max-sm:mb-6">
          <h2 className="text-[#EEC044] font-first text-xl mb-2">
            Frequently Asked Questions
          </h2>
          <h3 className="text-[#1F1E17] text-4xl font-bold leading-[1.2] max-md:text-3xl max-sm:text-2xl">
            You've Any Questions
          </h3>
        </header>

        {/* Контейнер для вопросов */}
        <div className="w-[600px]">
          {/* Accordion Item 1 */}
          <div className="relative w-full rounded-[10px] bg-[#F8F7F0] mb-[20px]">
            <div 
              className="flex items-center justify-between cursor-pointer py-4"
              onClick={() => toggleSection(0)}
            >
              <h4 className="w-[388px] text-[#1F1E17] text-[20px] font-manrope font-bold leading-[30px] ml-[38px] transition-transform duration-300 hover:scale-[1.02]">
                World’s hottest destinations for vegans
              </h4>
              <img
                src={arrow}
                alt="Arrow"
                className={`cursor-pointer mr-[38px] transition-transform duration-300 ${
                  activeIndex === 0 ? 'rotate-90' : ''
                }`}
              />
            </div>
            {activeIndex === 0 && (
              <p className="w-[388px] text-[#878680] text-[16px] font-manrope font-medium leading-[30px] pb-[30px] ml-[40px]">
                Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum
                leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl.
                Nulla facilisi. Pellentesque est metus many of some form.
              </p>
            )}
          </div>

          {/* Accordion Item 2 */}
          <div className="relative w-full rounded-[10px] bg-[#F8F7F0] mb-[20px]">
            <div 
              className="flex items-center justify-between cursor-pointer py-4"
              onClick={() => toggleSection(1)}
            >
              <h4 className="w-[388px] text-[#1F1E17] text-[20px] font-manrope font-bold leading-[30px] ml-[38px] transition-transform duration-300 hover:scale-[1.02]">
                Let’s grow naturaly and live naturaly
              </h4>
              <img
                src={arrow}
                alt="Arrow"
                className={`cursor-pointer mr-[38px] transition-transform duration-300 ${
                  activeIndex === 1 ? 'rotate-90' : ''
                }`}
              />
            </div>
            {activeIndex === 1 && (
              <p className="w-[388px] text-[#878680] text-[16px] font-manrope font-medium leading-[30px] pb-[30px] ml-[40px]">
                Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum
                leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl.
                Nulla facilisi. Pellentesque est metus many of some form.
              </p>
            )}
          </div>

          {/* Accordion Item 3 */}
          <div className="relative w-full rounded-[10px] bg-[#F8F7F0]">
            <div 
              className="flex items-center justify-between cursor-pointer py-4"
              onClick={() => toggleSection(2)}
            >
              <h4 className="w-[388px] text-[#1F1E17] text-[20px] font-manrope font-bold leading-[30px] ml-[38px] transition-transform duration-300 hover:scale-[1.02]">
                Best vegetables for your healthy hair
              </h4>
              <img
                src={arrow}
                alt="Arrow"
                className={`cursor-pointer mr-[38px] transition-transform duration-300 ${
                  activeIndex === 2 ? 'rotate-90' : ''
                }`}
              />
            </div>
            {activeIndex === 2 && (
              <p className="w-[388px] text-[#878680] text-[16px] font-manrope font-medium leading-[30px] pb-[30px] ml-[40px]">
                Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum
                leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl.
                Nulla facilisi. Pellentesque est metus many of some form.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
    <div className="pt-[100px] pr-[200px] pb-[100px] pl-[200px] bg-white">
  <div className="flex justify-between items-start">
    {/* Заголовок и название слева */}
    <div>
      <h1 className="text-xl font-first text-[#EEC044]">Our Recent Work</h1>
      <h1 className="text-4xl font-bold ">Recently Completed Projects</h1>
    </div>
    
    {/* Текст справа */}
    <p className="text-[18px] leading-tight  text-[#878680] w-2/3 ml-15 mt-6">
      Lorem ipsum dolor sit amet consectetur adipiscing elit penatibsenectus,
      sem mus etiam pharetra lacus ac tortor vitae, amet tincidunt congue fusce
      ridiculus cubilia ad feugiat fames placerat
    </p>
  </div>
</div>
<div className=" w-full h-[400px]"> {/* Высота фонового изображения */}
        <img
          src="./images/img50.png"
          alt="Organic Food"
          className="w-full h-[400px] "
        />
        </div>
        <div className="text-center mt-[100px]">
  <h1 className="text-2xl font-first text-[#EEC044]">Team Members</h1>
  <h2 className="text-3xl font-bold text-gray-800">Meet Our Farmers</h2>
</div>
<div className="flex justify-center items-center space-x-8 mt-8">
  {/* Картинка 1 */}
  <div className="relative flex flex-col items-center">
    <img 
      src="./images/img-11.png"
      alt="Kevin Smith" 
      className="w-[300px] h-[350px] transition-transform duration-300 hover:scale-[1.02]" 
    />
    {/* Зеленая иконка */}
    <img
      src="/images/ikonka15.png"
      alt="Green Icon"
      className="absolute -bottom-4 left-[135px] w-8 h-8 z-20" 
    />
    <div className="absolute -bottom-7 -right-5 w-[170px] h-[60px] bg-white font-semibold flex items-center justify-center text-xs shadow-md">
      <span>Kevin Smith</span>
    </div>
  </div> 

  {/* Картинка 2 */}
  <div className="relative flex flex-col items-center">
    <img 
      src="./images/img-21.png"
      alt="Jessica Brown" 
      className="w-[300px] h-[350px] transition-transform duration-300 hover:scale-[1.02]" 
    />
    {/* Зеленая иконка */}
    <img
      src="/images/ikonka15.png"
      alt="Green Icon"
      className="absolute -bottom-4 left-[135px] w-8 h-8 z-20" 
    />
    <div className="absolute -bottom-7 -right-7 w-[170px] h-[60px] bg-white font-semibold flex items-center justify-center text-xs shadow-md">
      <span>Jessica Brown</span>
    </div>
  </div>

  {/* Картинка 3 */}
  <div className="relative flex flex-col items-center">
    <img 
      src="./images/img-33.png"
      alt="David Martin" 
      className="w-[300px] h-[350px] transition-transform duration-300 hover:scale-[1.02]" 
    />
    {/* Зеленая иконка */}
    <img
      src="/images/ikonka15.png"
      alt="Green Icon"
      className="absolute -bottom-4 left-[135px] w-8 h-8 z-20" 
    />
    <div className="absolute -bottom-7 -right-7 w-[170px] h-[60px] bg-white font-semibold flex items-center justify-center text-xs shadow-md">
      <span>David Martin</span>
    </div>
  </div>
</div>
         <div>
            
<div className="relative w-full h-[400px] mt-[100px]"> {/* Высота фонового изображения */}
  
  <img
    src="./images/img100.png"
    alt="Organic Food"
    className="w-full h-full object-cover"/>

<div className="absolute inset-0 flex flex-col items-center justify-center">
{/* Круглая белая кнопка с треугольником */}
<button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors mb-4">
<img
    src="./images/Icon.png"
    alt="Organic Food"
    className="w-5 h-5  transform  rotate-[120deg]"/>
</button>
{/* Текст под кнопкой */}
<div className="w-[550px] h-[100px] mt-[10px]">
<h1 className="text-4xl font-semibold text-white text-center">
ECO-Friendly Products can be Made from Scratch
</h1>
</div>

</div>
</div>
         </div>


  <div  className="flex flex-col items-center mt-[150px]">
  {/* Блок с заголовками */}
  <div className="text-center mb-8">
    <h2 className="text-2xl font-first text-[#EEC044]">
      From the blog
    </h2>
    <h1 className="text-3xl font-bold text-black-800">
      New & Articles
    </h1>
  </div>

  {/* Блок с картинками */}
  <div className="flex justify-center">
    <div className="mx-1.5 rounded-lg">
      <img
        src="./images/img101.png"
        alt="Картинка 1"
        className="w-[350px] h-[400px] object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
      />
    </div>

    <div className="mx-1.5 rounded-lg">
      <img
        src="./images/img102.png"
        alt="Картинка 2"
        className="w-[350px] h-[400px] object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
      />
    </div>

    <div className="mx-1.5 rounded-lg">
      <img
        src="./images/img103.png"
        alt="Картинка 3"
        className="w-[350px] h-[400px] object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
      />
    </div>
  </div>
</div>
  <div>
    <div className="  grid grid-cols-[40%_60%] gap-0 bg-[#F8F7F0] mt-[100px] w-[1060px] ml-[220px ] " >
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
                  style={{ backgroundImage: `url(${fromBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
  
  <div className="relative w-full h-[130px] mt-[100px] mb-0"> {/* Высота фонового изображения */}
  
  <img
    src="./images/img2000.png"
    alt="Organic Food"
    className="w-full h-full object-cover"/>
{/* Контейнер для маленьких картинок */}
<div className="absolute inset-0 flex justify-center items-center space-x-24">
    <img
      src="./images/small1.png"
      alt="Small Image 1"
      className="w-[100px] h-[60px]"
    />
    <img
      src="./images/small2.png"
      alt="Small Image 2"
      className="w-[100px] h-[60px]"
    />
    <img
      src="./images/small3.png"
      alt="Small Image 3"
      className="w-[100px] h-[60px]"
    />
    <img
      src="./images/small4.png"
      alt="Small Image 4"
      className="w-[100px] h-[60px]"
    />
    <img
      src="./images/small5.png"
      alt="Small Image 5"
      className="w-[100px] h-[60px]"
    />
  </div>
  
</div>
<div className="-mt-[124px]">

</div>

</div>
  );
};

export default FAQSection;
