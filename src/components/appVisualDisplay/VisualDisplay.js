import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { initState } from '../../services/appProcessor';

import Actions from '../../store/actions/actions';

import './visualDisplay.scss';

const VisualDisplay = () => {
    const {changeFillStatus, onChangeRate, changeColor, changePeaksStatus, addChannels} = Actions();

    const rate = useSelector(state => state.rate)
    const fillStatus = useSelector(state => state.fillStatus)
    const renderColor = useSelector(state => state.renderColor)
    const peaksStatus = useSelector(state => state.peaksStatus)

    const freq = () => {
        let cons
        const frequencyGenerated = (max, steep, dots, mdots) => {
            cons = mdots + ' 0 ';
            for (let i = 0 + steep ; i < max ; i += steep){
                cons += `${dots} ${i} `;
            } cons += mdots;            
        }
        
        const variations = [
            257, 8, '........', '..', 
            206, 6, '.......', '.....',
            93, 2, '....', '..',
            46, 2, '..................', '..']
        
        let num = 0
        switch (rate) {
            case 204:
                num = 1                
            break;
            case 92:
                num = 2
            break;
            default://
        }  
        frequencyGenerated(
            variations[4*num],
            variations[4*num+1],
            variations[4*num+2],
            variations[4*num+3],)   
            return cons;      
    }

    useEffect(()=>{
        initState();
    })   

    return (
        <div id='visualDisplay' className="app__sheet visualdisplaysheet">
            <div className='app__flex__between'>
            <div className="app__title">Отрисовка потока</div>
                <div>
                    <select 
                    defaultValue={rate}
                    onChange={(e) => onChangeRate(e.target)}>
                        <option value="255">Диапазон: 255 выборок из потока</option>
                        <option value="204">Диапазон: 204 выборки из потока</option>
                        <option value="92">Диапазон: 92 выборки из потока</option>
                        {/* <option value="44">Mode: 45 samples</option> */}
                    </select>
                    <select 
                    defaultValue={fillStatus}
                    onChange={(e) => changeFillStatus(e.target)}>
                        <option value="1">Вариант отрисовки: Заливка</option>
                        <option value="0">Вариант отрисовки: Контуры</option>
                    </select>
                    <select 
                    defaultValue={renderColor}
                    onChange={(e) => changeColor(e.target)}> 
                        <option value="0,0,255">Цвет: Синий</option>
                        <option value="255,0,0">Цвет: Красный</option>
                        <option value="0,255,0">Цвет: Зеленый</option>
                        <option value="0,255,255">Цвет: Аква</option>
                        <option value="255,255,0">Цвет: Желтый</option>
                        <option value="0, 100, 0">Цвет: Тёмнозеленый</option>
                        <option value="128, 128, 0">Цвет: Оливковый</option>
                        <option value="255, 165, 0">Цвет: Оранж</option>
                        <option value="95, 158, 160">Цвет: Кад.Синий</option>
                        <option value="128, 0, 128">Цвет: Пурпурный</option>
                        <option value="154, 205, 50">Цвет: ЖелтоЗеленый</option>
                        <option value="189, 183, 107">Цвет: НочнойКаи</option>
                    </select>
                    <select 
                    defaultValue={peaksStatus}
                    onChange={(e) => changePeaksStatus(e.target)}>
                        <option value="1">Пики: Да</option>
                        <option value="0">Пики: Нет</option>
                    </select>
                </div>
            </div>
            <canvas id='canvasDisplay'></canvas>
            <div className="visualdisplaysheet__center">
                <div className="visualdisplaysheet__freq">{freq()}</div>
            </div> 
            <div className='app__line'></div>  
            <div>
                <span className="app__title">Управление каналами:</span>
                <button onClick={addChannels}>ДОБАВИТЬ НОВЫЙ</button>
            </div>         
        </div>
    )
}

export default VisualDisplay;