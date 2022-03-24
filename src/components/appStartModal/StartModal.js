import React, { useState } from 'react';
import img1 from '../../resources/img/1.png'
import img2 from '../../resources/img/2.png'
import img3 from '../../resources/img/3.png'
import './startModal.scss'

const StartModal = ({closeModal}) => {
    let [slide, setSlide] = useState(1)
    const [checked, setChecked] = useState(false)
    const maxSlide = 5
    
    const selectSlide = () => {
        switch (slide){
            case 1:
               return <Slide1/>
            case 2:
                return <Slide2/>
            case 3:
                return <Slide3/>
            case 4:
                return <Slide4/>
            case 5:
                return <Slide5/>
            default://
        }    
    }

    const slideForward = () => {
        setSlide(slide = slide + 1)
        if(slide > maxSlide) setSlide(1)
    }

    const slideBack = () => {
        setSlide(slide = slide - 1)
        if(slide < 1) setSlide(maxSlide)
    }

    const setCheckedFunction = () => {
        setChecked(!checked)
    }

    return (
        <div className='startmodal'>
            <div className='startmodal__sheet'>
                <div className='startmodal__title'>Добро пожаловать в SoundVisualMachine!</div>
                <div className='app__line'></div>
                    <div className='startmodal__container'>                       
                           {selectSlide()} 
                    </div>                
                <div className='navigation-1 app__flex__between'>
                    <div>
                        <span>{slide}/{maxSlide} </span>
                        <button className='startmodal__buttons' onClick={() => slideBack()}>НАЗАД</button>
                        <button className='startmodal__buttons' onClick={() => slideForward()}>ВПЕРЕД</button>
                        <button className='startmodal__buttons' onClick={() => closeModal(checked)}>ЗАКРЫТЬ ЭТО ОКНО</button>
                    </div>
                        <div className='navigation-1__text'>Больше не показывать</div>
                        <input 
                        className='startmodal__checkbox'
                        name='dontShow'
                        checked={checked}
                        onChange={() => setCheckedFunction()}
                        type="checkbox"/>
                </div>
                <div className='navigation-2'>
                    <div className='app__flex__between'>
                        <span>{slide}/{maxSlide} </span>
                        <div>
                            <button className='startmodal__buttons' onClick={() => slideBack()}>НАЗАД</button>
                            <button className='startmodal__buttons' onClick={() => slideForward()}>ВПЕРЕД</button>
                        </div> 
                        <button className='startmodal__buttons' onClick={() => closeModal(checked)}>ЗАКРЫТЬ ЭТО ОКНО</button>
                    </div>                       
                    <div className='app__flex__center navigation-2__top'>
                        <div className='navigation-2__text'>Больше не показывать это окно</div>
                            <input 
                            className='startmodal__checkbox'
                            name='dontShow'
                            checked={checked}
                            onChange={() => setCheckedFunction()}
                            type="checkbox"/>
                    </div>                        
                </div>
            </div>            
        </div>
    )
}

const Slide1 = () => {
    return (
        <div className='startmodal__content'>
            <p>Приложение обрабатывает звуковой поток со звуковой карты (стерео-микшер) или микрофона и сопровождает цветной индикацией. Можно настроить срабатывание каналов на определенные частоты. Например низкие, средние и высокие или настроить на своё усмотрение, как хотите.</p> <br/><br/>
            <p>ВНИМАНИЕ! Приложение использует устройство ввода на Вашем ПК или телефоне. Для работы необходимо Ваше разрешение на его использование. Захват звука происходит с микрофона или стерео-микшера (только на ПК). Если Вы включите устройство ввода стерео-микшер на своем компьютере, то звуковой поток будет захватываться со звуковой карты на выходе.</p><br/><br/>Это приветственное окно содержит информацию как работать с приложением, пожалуйста, ознакомтесь с ней. <br/><br/><br/><br/>svmachine.ru 2022 enginpro@yandex.ru
        </div>
    )
}

const Slide2 = () => {
    
    return (
        <div className='startmodal__content'>
            <img src={img1} alt='image' style={{'width' : '100%'}}/>
            <p>Это визуальное представление звукового потока. Здесь можно выбрать цвет отрисовки, включить пики, поменять вариант отрисовки, выбрать количество выборок из потока.</p><br/><p>Цветные полосы на заднем фоне служат индикацией выбранного диапазона выборок. Их цвет соответствует цвету канала, который использует данный диапазон. При изменении диапазона расположение полос будет менятся тоже.</p><br/><p>Кнопка "ДОБАВИТЬ НОВЫЙ" добавит новый канал в список каналов и присвоит ему букву A,B,C и т.д. Всего можно добавить 10 каналов.</p>
        </div>
    )
}

const Slide3 = () => {
    
    return (
        <div className='startmodal__content'>
            <img src={img2} alt='image' style={{'width' : '100%'}}/>
            <p>Это окно канала. В селектах "Начало" и "Конец" можно задать начало и конец диапазона соответственно. Выбранные значения отобразятся в полях "ОТ ВЫБОРКИ" "ПО ВЫБОРКУ" тоже. </p><br/><p>Сборка канала имеет два варианта на выбор. При варианте "Среднее от выбранных" канал соберется из среднего значения всех выборок в выставленом диапазоне. Если будет выбран вариант "Максимальный из выбранных" то будет взято значение самой наибольшей выборки в выставленном диапазоне в текущий момент времени.</p><br/><p>В визуальном представлении канала можно увидеть работу собранного канала из того диапазона, который Вы выставили раньше. Тут же можно увидить полосу срабатывания, которая будет двигаться за максимальным значением сборки. Если сборка пересечет ее, то загорится поле "пик", и подаст сигнал на зажигание индикаторов каналов.</p>
        </div>
    )    
}

const Slide4 = () => {
    
    return (
        <div className='startmodal__content'>
            <img src={img2} alt='image' style={{'width' : '100%'}}/>
            <p>Для точной настройки срабатывания используйте настройки буферов. Фронтальный буфер находится от полосы срабатывания справа. Его можно увидеть на поле "Визуальное представление собранного канала" как две маленьких полоски (дальше Маркеры) снизу и сверху. Пока сборка не достигнет маркеров, полоса срабатывания не будет двигаться за сборкой. То же самое касается буфера тыла. Он находится перед полосой срабатывания и позволяет задерживать полосу срабатывания в обратном направлении. </p><br/><br/><p>Селект "Реакция" позволит настроить скорость перемещения полосы срабатывания.</p><br/><br/><p>С помощю кнопок "Цвет" и "Удалить канал" можно поменять цвет канала или удалить канал.</p>
        </div>
    )    
}

const Slide5 = () => {
    
    return (
        <div className='startmodal__content app__flex'>
            <div>
             <img src={img3} alt='image' style={{'height' : '400px'}}/>  
            </div>
            <div className='ml'>
            <p>Здесь представлены настройки для визуального отображения индикаторов каналов, скорости их зажигания, угасания и максимальной яркости.</p><br/><br/><p>Вы можете отключить рамки и лейблы индикаторов каналов.</p><br/><br/><p>Кнопка "Полноэкранный режим" переведет приложение в режим полного экрана, выведет идикаторы каналов на экран и спрячет настройки.</p><br/><br/><p>На этом все, надеюсь Вам понравится это приложение.</p><br/><br/><p>Желаю весело провести время ;)</p>
            </div>
            
        </div>
    )
}

export default StartModal;