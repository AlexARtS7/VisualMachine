import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className="app__sheet appheadersheet">
          <div>
            <div className="appheadersheet__title">SoundVisualMachine</div>
            {/* <marquee className="appheadersheet__info" direction="left" scrollamount="4">Добро пожаловать в SoundVisualMachine!!! Это приложение для анализа звукового потока в реальном времени и дальнейшее его сопровождение цветовой поддержкой - цветомузыка онлайн на экране вашего монитора. приложение имеет простые, но в то же время гибкие настройки деления звукового потока на частоты, а так же удобные настройки визуального цветового сопровождения. я надеюсь вы найдете это приложение интересным для себя. вопросы и пожелания можете направлять на почту: enginpro@yandex.ru  . желаю приятного времяпровождения!;)</marquee> */}
          </div>
        </div>        
    );
  }
  
  export default Header;