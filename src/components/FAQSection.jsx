import React from 'react';

const FAQSection = () => {
  return (
    <div className="flex flex-col  justify-center bg-[#FFFF]">
      {/* Основной контейнер */}
      <div 
        className="max-w-6xl w-full flex flex-col md:flex-row items-center "
        style={{ width: '2500px', height: '450px' }} // Задаем ширину и высоту в пикселях
      >
        {/* Левая часть: Картинки */}
        <div className="w-full md:w-1/2 p-0 relative"> {/* Убрали padding и добавили relative */}
          {/* Фоновая картинка */}
          <img
            src="/images/img20.png" // Замените на путь к вашей фоновой картинке
            alt="Background"
            className="w-[400px]  ml-4 h-[450px] object-left" // Прижимаем к левому краю
            style={{ margin: '0' }} // Убираем отступы
          />
          {/* Основная картинка */}
          <img
            src="/images/img10.png" // Замените на путь к вашей основной картинке
            alt="Placeholder"
            className="absolute w-[250px] h-[280px] rounded-lg shadow-lg -mt-5 ml-[100px]"
            style={{ top: '25%', left: '25%' }} // Позиционирование основной картинки
          />
        </div>

        <div className="w-full  px-[120px] pr-[30px] py-4 flex flex-col items-start space-y-4 overflow-hidden">
  {/* Заголовок */}
  <div className="text-left">
    <h1 className="text-lg  text-gray-800 ">Frequently Asked Questions</h1>
    <h2 className="text-sm text-gray-600">You've Any Questions</h2>
  </div>

  {/* Кнопки */}
  <div className="space-y-3 w-full">
    {/* Первая кнопка */}
    <button 
      className="w-2/3 inline-flex p-1 pl-4 justify-between items-center gap-3 rounded-md bg-[#F8F7F0] hover:bg-[#E0DFD8] transition duration-300"
      onClick={() => alert('Button 1 clicked!')}
    >
      <h3 className="text-xs font-bold text-gray-800">World’s hottest destinations for vegans</h3>
      <div className="flex justify-center items-center rounded-md bg-[#C5CE38] w-[40px] h-[40px]">
        {/* Иконка */}
      </div>
    </button>

    {/* Вторая кнопка */}
    <button 
      className="w-2/3 inline-flex p-1 pl-4 justify-between items-center gap-3 rounded-md bg-[#F8F7F0] hover:bg-[#E0DFD8] transition duration-300"
      onClick={() => alert('Button 2 clicked!')}
    >
      <h3 className="text-xs font-bold text-gray-800">Let’s grow naturaly and live naturaly</h3>
      <div className="flex justify-center items-center rounded-md bg-[#C5CE38] w-[40px] h-[40px]">
        {/* Иконка */}
      </div>
    </button>
  </div>

  {/* Текст между кнопками */}
<div className="text-gray-600 text-[10px] text-left overflow-hidden line-clamp-3">
  <p>
    Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo
    ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla
    facilisi. Pellentesque est metus many of some form.
  </p>
</div>


  {/* Третья кнопка */}
  <button 
    className="w-2/3 inline-flex p-1 pl-4 justify-between items-center gap-3 rounded-md bg-[#F8F7F0] hover:bg-[#E0DFD8] transition duration-300"
    onClick={() => alert('Button 3 clicked!')}
  >
    <h3 className="text-xs font-bold text-gray-800">Best vegetables for your healthy hair</h3>
    <div className="flex justify-center items-center rounded-md bg-[#C5CE38] w-[40px] h-[40px]">
      {/* Иконка */}
    </div>
  </button>
</div>
 </div>

 <div className="pt-[100px] pr-[200px] pb-[100px] pl-[200px] bg-white">
  <div className="flex justify-between items-start">
    {/* Заголовок и название слева */}
    <div>
      <h1 className="text-xl text-[#EEC044]">Our Recent Work</h1>
      <h1 className="text-4xl font-semibold ">Recently Completed Projects</h1>
    </div>
    
    {/* Текст справа */}
    <p className="text-[16px] leading-tight font-medium text-gray-700 w-2/3 ml-15 mt-6">
      Lorem ipsum dolor sit amet consectetur adipiscing elit penatibsenectus,
      sem mus etiam pharetra lacus ac tortor vitae, amet tincidunt congue fusce
      ridiculus cubilia ad feugiat fames placerat
    </p>
  </div>
</div>
        <div className=" w-[1280px] h-[400px]"> {/* Высота фонового изображения */}
        <img
          src="./images/img50.png"
          alt="Organic Food"
          className="w-[1280px] h-[400px] "
        />
        </div>

        <div className="border-1 border-white pt-[30px] pr-[200px] pb-[100px] pl-[200px] rounded-lg text-center shadow-lg">
          {/* Верхняя надпись */}
    <div className="text-center mb-8">
        <h1 className="text-2xl font-secondary text-[#EEC044]">Team Members </h1>
      <h2 className="text-3xl font-bold text-gray-800">Meet Our Farmers</h2>
    </div>
    <div className="flex justify-between items-center gap-0"> {/* Убрали отступы между картинками */}
    {/* Картинка 1 */}
    <div className="relative flex flex-col items-center">
      <img 
        src="./images/img-11.png"
        alt="" 
        className="w-[200px] h-[250px]" /> {/* Размер картинки 200x250px */}
        {/* Зеленая иконка */}
          <img
            src="/images/ikonka15.png"
            alt="Green Icon"
            className="absolute -bottom-4 left-10  w-8 h-8 z-20" />
      <div className="absolute -bottom-7 -right-7 w-[170px] h-[60px] bg-white font-semibold flex items-center justify-center text-xs shadow-md">
     <h1>Kevin Smith</h1>
        
      </div>
    </div> 

    {/* Картинка 2 */}
    <div className="relative flex flex-col items-center">
      <img 
        src="./images/img-21.png"
        alt="" 
        className="w-[200px] h-[250px]" /> {/* Размер картинки 200x250px */}
        {/* Зеленая иконка */}
        <img
            src="/images/ikonka15.png"
            alt="Green Icon"
            className="absolute -bottom-4 left-10  w-8 h-8 z-20" />
      <div className="absolute -bottom-7 -right-7 w-[170px] h-[60px] bg-white flex font-semibold  items-center justify-center text-xs shadow-md">
      <h1>Jessica Brown</h1>
        
      </div>
    </div>

    {/* Картинка 3 */}
    <div className="relative flex flex-col items-center">
      <img 
        src="./images/img-33.png"
        alt="" 
        className="w-[200px] h-[250px]" /> {/* Размер картинки 200x250px */}
        {/* Зеленая иконка */}
        <img
            src="/images/ikonka15.png"
            alt="Green Icon"
            className="absolute -bottom-4 left-10 w-8 h-8 z-20" />
      <div className="absolute -bottom-7 -right-7 w-[170px] h-[60px] bg-white  font-semibold  flex items-center justify-center text-xs shadow-md">
  <h1>David Martin</h1>
       
      </div>
    </div>
  </div>
</div>

<div className="relative w-full h-[400px]"> {/* Высота фонового изображения */}
  
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
          className="w-5 h-5 text-black transform rotate-100"/>
    </button>
  {/* Текст под кнопкой */}
  <h1 className="text-4xl font-semibold text-white text-center">
    ECO-Friendly Products can be Made from Scratch
  </h1>
</div>
</div>

<div className="border-1  pt-[50px] pr-[200px] pb-[100px] pl-[200px] rounded-lg text-center shadow-lg">
          {/* Верхняя надпись */}
    <div className="text-center mb-8">
        <h1 className="text-2xl font-secondary text-[#EEC044]">Team Members </h1>
      <h2 className="text-3xl font-bold text-gray-800">Meet Our Farmers</h2>
      <div className="flex justify-center items-center h-[400px] ">
      {/* Первая картинка */}
<div className="mx-1.5 rounded-lg"> {/* 5px с каждой стороны = 10px между картинками */}
  <img
    src="./images/img101.png"
    alt="Картинка 1"
    className="w-[250px] h-[300px] object-cover rounded-lg"
  />
</div>

{/* Вторая картинка */}
<div className="mx-1.5 rounded-lg">
  <img
    src="./images/img102.png"
    alt="Картинка 2"
    className="w-[250px] h-[300px] object-cover rounded-lg"
  />
</div>

{/* Третья картинка */}
<div className="mx-1.5 rounded-lg">
  <img
    src="./images/img103.png"
    alt="Картинка 3"
    className="w-[250px] h-[300px] object-cover rounded-lg"
  />
</div>
 </div>
   </div>
    </div>

    <div className="relative w-full h-[130px]"> {/* Высота фонового изображения */}
  
  <img
    src="./images/img2000.png"
    alt="Organic Food"
    className="w-full h-full object-cover"/>
{/* Контейнер для маленьких картинок */}
<div className="absolute inset-0 flex justify-center items-center space-x-2">
    <img
      src="./images/small1.png"
      alt="Small Image 1"
      className="w-[100px] h-[100px]"
    />
    <img
      src="./images/small2.png"
      alt="Small Image 2"
      className="w-[100px] h-[100px]"
    />
    <img
      src="./images/small3.png"
      alt="Small Image 3"
      className="w-[100px] h-[100px]"
    />
    <img
      src="./images/small4.png"
      alt="Small Image 4"
      className="w-[100px] h-[100px]"
    />
    <img
      src="./images/small5.png"
      alt="Small Image 5"
      className="w-[80px] h-[80px]"
    />
  </div>


</div>
      </div>              
  );
};

export default FAQSection;