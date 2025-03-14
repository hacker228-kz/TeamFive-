import React from 'react';

const ImageWithTextAndRays = () => {
  return (
    <div className="relative min-h-screen min-w-screen flex flex-col items-center overflow-hidden bg-white">
      {/* Фоновое изображение */}
      <div className="relative w-full h-[500px]"> {/* Высота фонового изображения */}
        <img
          src="./images/img1.png"
          alt="Organic Food"
          className="w-full h-full object-cover"
        />

        {/* Текст и кнопка */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          {/* Текст "Natural Products" */}
          <p className="text-white text-[60px] font-extrabold leading-[60px] tracking-[0.5px] font-manrope">
            Natural Products
          </p>

          {/* Текст "For Lovers of" и "Healthy" на одной линии */}
          <div className="flex justify-center items-center space-x-4">
            <h1 className="text-white text-[60px] font-extrabold leading-[60px] tracking-[0.5px] font-manrope">
              For Lovers of
            </h1>
            <h1 className="text-[#EEC044] text-[60px] font-extrabold leading-[60px] tracking-[0.5px] font-manrope">
              Healthy
            </h1>
          </div>

          {/* Текст "Organic Food" */}
          <p className="text-white text-[60px] font-extrabold leading-[60px] tracking-[0.5px] font-manrope">
            Organic Food
          </p>
        </div>

        {/* Кнопка "Discover More" */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-[135px]">
          <a
            href="/products"
            className="inline-block z-20 rounded-[7px] bg-[#4BAF47] w-[135px] h-[40px] px-[30px] py-[10px] text-white text-[10px] font-medium text-center hover:bg-[#3a8f36] transition-colors duration-300 flex items-center justify-center"
          >
            Discover More
          </a>
        </div>

        {/* Лучи */}
        <div
          className="absolute z-0"
          style={{
            top: '0px',
            left: '120px',
            width: '170px',
            height: '100%',
            transform: 'rotate(15.098deg)',
            opacity: 0.08,
            background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
          }}
        ></div>
        <div
          className="absolute z-10"
          style={{
            top: '0px',
            left: '200px',
            width: '170px',
            height: '100%',
            transform: 'rotate(15.098deg)',
            opacity: 0.06,
            background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
          }}
        ></div>
      </div>

      <div className='w-full z-0'> {/* Убрана фиксированная высота */}
  <div className="relative w-full max-w-[1500px] px-[32px] mx-auto" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
    {/* Картинка */}
    <img
      src="./images/img2.png"
      alt="Organic Food"
      className="w-[950px] h-[560px] object-cover" />

    {/* Текст поверх картинки */}
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-20">
      {/* Заголовок */}
      <h1 className="text-4xl font-bold text-black mb-[16px]" style={{ textAlign: 'center' }}>
        Leader in Agriculture Market
      </h1>

      {/* Описание */}
      <p className="text-black z-20 mb-[16px] max-w-[800px]" style={{ maxWidth: '800px', marginBottom: '16px', textAlign: 'center' }}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
      </p>
    </div>
  </div>
</div>

<div className="min-h-screen flex items-center justify-center bg-[#F8F7F0] w-full">
  {/* Фоновое изображение (закреплено внизу) */}
  <div
    className="absolute bottom-0 left-0 right-0 w-full h-64 bg-cover bg-center"
    style={{
      backgroundImage: `url(/images/img-4.png)`,
      backgroundSize: 'cover',  // это обеспечит правильное растягивание
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
    }}
  ></div>

  {/* Контейнер для секций */}
  <div className="relative z-10 w-full">
    {/* Верхняя надпись */}
    <div className="text-center mb-8">
        <h1 className="text-2xl font-secondary text-[#EEC044]">Our Services </h1>
      <h2 className="text-3xl font-bold text-gray-800">What We Offer</h2>
    </div>

    {/* Горизонтальные секции */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      {/* Секция Agriculture Products */}
      <div
        className="flex flex-col items-start text-left bg-gray-50 rounded-lg p-4 shadow-md"
        style={{ width: '280px', height: '320px' }}
      >
        <div className="relative w-full h-36 mb-4">
          <img
            src="/images/img-1.png"
            alt="Agriculture"
            className="w-full h-36 object-cover rounded-lg"
          />
          {/* Зеленая иконка */}
          <img
            src="/images/iconka1.png"
            alt="Green Icon"
            className="absolute -bottom-4 right-2 w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Agriculture Products</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Lorem ipsum is simply free available.
          Aenean leo quam. Pellentesque
          semornare vestibulum.
        </p>
      </div>

      {/* Секция Organic Products */}
      <div
        className="flex flex-col items-start text-left bg-gray-50 rounded-lg p-4 shadow-md"
        style={{ width: '280px', height: '320px' }}
      >
        <div className="relative w-full h-36 mb-4">
          <img
            src="/images/img-2.png"
            alt="Organic"
            className="w-full h-36 object-cover rounded-lg"
          />
          {/* Зеленая иконка */}
          <img
            src="/images/iconka2.png"
            alt="Green Icon"
            className="absolute -bottom-4  right-2 w-12 h-12"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Organic Products</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Lorem ipsum is simply free available.
          Aenean leo quam. Pellentesque
          semornare vestibulum.
        </p>
      </div>

      {/* Секция Dairy Products */}
      <div
        className="flex flex-col items-start text-left bg-gray-50 rounded-lg p-4 shadow-md"
        style={{ width: '280px', height: '320px' }}
      >
        <div className="relative w-full h-36 mb-4">
          <img
            src="/images/img-3.png"
            alt="Dairy"
            className="w-full h-36 object-cover rounded-lg"
          />
          {/* Зеленая иконка */}
          <img
            src="/images/iconka3.png"
            alt="Green Icon"
            className="absolute -bottom-4 right-2 w-12 h-12"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Dairy Products</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Lorem ipsum is simply free available.
          Aenean leo quam. Pellentesque
          semornare vestibulum.
        </p>
      </div>
    </div>
  </div>
</div>
</div>


  );
};

export default ImageWithTextAndRays;