import { useSelector } from 'react-redux'
import Actions from '../../store/actions/actions';

const ChannelItem = ({id}) => {
    const { changeSampleColor, 
            assembleChange, 
            rearChange, 
            frontChange, 
            reactionChange,
            deleteChannel,
            changeMinChannel,
            changeMaxChannel} = Actions();

    const rate = useSelector(state => state.rate)
    const {channels} = useSelector(state => state)   
    
    const divId = `div${id}`;
    const inId = `in${id}`;
    const trId = `tr${id}`;
    const ufId = `uf${id}`;
    const urId = `ur${id}`;
    const dfId = `df${id}`;
    const drId = `dr${id}`;
    
    const elements = (max) => {
        const arr = []
        for (let i = 0; i <= max ; i ++){
            arr.push(<option key={i} value={i}>{i}</option>)  
        } return arr               
    }   

    return (
        <div className="app__sheet channellist">
            <div className='app__flex__between'>
                <div className="app__title">Канал : {channels[id].mark}</div>
                <div>
                <select
                    value={channels[id].color}
                    id={id}
                    onChange={(e) => changeSampleColor(e.target, id)}>
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
                {id > 0 ? <button 
                        className='closebutton' 
                        id={id}
                        onClick={(e) => deleteChannel(e.target.id)}
                        >УДАЛИТЬ КАНАЛ</button>: null}
                    
                </div>              
            </div>            
            <div className="app__line"></div>
            <div className="app__flex__between">
                <div className="app__center">
                    <div className="app__navtext">Начало</div>
                    <select 
                        className="channellist__select" 
                        size={4}
                        value={channels[id].min}
                        id={id}
                        onChange={(e) => changeMinChannel(e.target, id)}>
                        {elements(rate)}
                    </select>
                </div>
                <div className="app__center">
                    <div className="app__navtext">Конец</div>
                    <select 
                        className="channellist__select" 
                        size={4}
                        value={channels[id].max}
                        id={id}
                        onChange={(e) => changeMaxChannel(e.target, id)}>
                        {elements(rate)}
                    </select>
                </div>
                <div className="app__center ml">
                    <div className='app__navtext'>от выборки</div>
                    <div className='app__bkg channellist__text'>{channels[id].min}</div>
                    <div className='app__navtext'>по выборку</div>
                    <div className='app__bkg channellist__text'>{channels[id].max}</div>
                </div>
                <div className="app__center ml">
                    <div className='app__navtext'>Вариант сборки канала</div>
                    <select                 
                        className="channellist__select"
                        id={id}
                        size={4}
                        value={channels[id].assemble}
                        onChange={(e) => assembleChange(e.target, id)}> 
                            <option value="average">Среднее от выбранных</option>
                            <option value="maximum">Максимальный из выбранных</option>
                    </select>
                </div>
                <div className="app__center ml">
                    <div className='app__navtext'>Визуальное представление собранного канала</div>
                    <div className='channellist__renderarea app__bkg'>    
                        <div className='div' id={divId}></div>
                        <div className='indicator' id={inId}></div>
                        <div className='markers up' id={ufId}></div>
                        <div className='markers up' id={urId}></div>
                        <div className='markers down' id={dfId}></div>
                        <div className='markers down' id={drId}></div>
                    </div>
                </div>
                <div className="app__center ml">
                    <div className='app__navtext'>Пик</div>
                    <div className='channellist__triggeringarea app__bkg' id={trId}></div> 
                </div>            
                    <div className="app__center ml">
                        <div className="app__navtext">Тыл</div>
                        <select 
                            className="channellist__select" 
                            size={4}
                            value={channels[id].rear}
                            id={id}
                            onChange={(e) => rearChange(e.target, id)}>
                            {elements(50)}
                        </select>
                    </div>                  
                    <div className="app__center">
                        <div className="app__navtext">Фронт</div>
                        <select 
                            className="channellist__select" 
                            size={4}
                            value={channels[id].front}
                            id={id}
                            onChange={(e) => frontChange(e.target, id)}>
                            {elements(50)}
                        </select>
                    </div>
                    <div className="app__center ml">
                        <div className='app__navtext'>буфер фронта</div>
                        <div className='app__bkg channellist__text'>{channels[id].front}</div>
                        <div className='app__navtext'>буфер тыла</div>
                        <div className='app__bkg channellist__text'>{channels[id].rear}</div>
                    </div>
                    <div className="app__center ml">
                        <div className="app__navtext">реакция</div>
                        <select 
                            className="channellist__select" 
                            id={id}
                            value={channels[id].reaction}
                            size={4}
                            onChange={(e) => reactionChange(e.target, id)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div> 
            </div>
            
        </div>
    )
}

export default ChannelItem;