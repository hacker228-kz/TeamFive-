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

        {/* Правая часть: Текст и кнопки */}
        <div className="w-full md:w-1/2 p-6 flex flex-col space-y-6 overflow-hidden"> {/* Добавили overflow-hidden */}
          {/* Заголовок */}
          <div className="text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h1>
            <h2 className="text-xl text-gray-600">You’ve Any Questions</h2>
          </div>

          {/* Кнопки */}
          <div className="space-y-4">
            {/* Первая кнопка */}
            <button 
              className="w-full inline-flex p-4 pl-6 justify-between items-center gap-4 rounded-lg bg-[#F8F7F0] hover:bg-[#E0DFD8] transition duration-300"
              onClick={() => alert('Button 1 clicked!')}
            >
              <h3 className="text-lg font-bold text-gray-800">World’s hottest destinations for vegans</h3>
              <div 
                style={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  background: '#C5CE38',
                  width: '60px',
                  height: '60px',
                }}
              >
                {/* Иконка или текст внутри квадрата */}
              </div>
            </button>

            {/* Вторая кнопка */}
            <button 
              className="w-full inline-flex p-4 pl-6 justify-between items-center gap-4 rounded-lg bg-[#F8F7F0] hover:bg-[#E0DFD8] transition duration-300"
              onClick={() => alert('Button 2 clicked!')}
            >
              <h3 className="text-lg font-bold text-gray-800">Let’s grow naturally and live naturally</h3>
              <div 
                style={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  background: '#C5CE38',
                  width: '60px',
                  height: '60px',
                }}
              >
                {/* Иконка или текст внутри квадрата */}
              </div>
            </button>
          </div>

          {/* Текст между второй и третьей кнопкой */}
          <div className="text-gray-600 text-sm">
            <p>
              Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo
              ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla
              facilisi. Pellentesque est metus many of some form.
            </p>
          </div>

          {/* Третья кнопка */}
          <button 
            className="w-full inline-flex p-4 pl-6 justify-between items-center gap-4 rounded-lg bg-[#F8F7F0] hover:bg-[#E0DFD8] transition duration-300"
            onClick={() => alert('Button 3 clicked!')}
          >
            <h3 className="text-lg font-bold text-gray-800">Best vegetables for your healthy hair</h3>
            <div 
              style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                background: '#C5CE38',
                width: '60px',
                height: '60px',
              }}
            >
              {/* Иконка или текст внутри квадрата */}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;