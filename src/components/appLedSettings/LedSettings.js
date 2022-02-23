import { useSelector } from 'react-redux'
import Actions from '../../store/actions/actions'
import './ledSettings.scss'

const LedSettings = () => {
    const { changeLightUp,
            changeLightDown,
            changeLightMax,
            changeVis,
            visBorChange,
            visLabChange,
            fullScreenMode} = Actions()

    const {channels} = useSelector(state => state)  
    const opacityUp = useSelector(state => state.opacityUp)  
    const opacityDown = useSelector(state => state.opacityDown) 
    const opacityMax = useSelector(state => state.opacityMax) 
    const visSet = useSelector(state => state.visSet)
    const visLab = useSelector(state => state.visLab)
    const visBor = useSelector(state => state.visBor)
    
    const elements = channels.map((item, i) => {
        const viewId = `view${i}`
        console.log(viewId)
        return (
            <div key={i} className='ledsettings__item'>
                {visLab ? <div className='app__navtext'>
                    {channels.length < 8 ? 'Канал:' : 'Кл:'} {item.mark}</div> : null}
                <div className={visBor ? 'app__bkg ledsettings__view' : 'ledsettings__view'} id={viewId}></div>
            </div>    
        )
    });

    const items = (max) => {
        const arr = []
        for (let i = 5; i <= max ; i += 5){
            arr.push(<option key={i} value={i}>{i}</option>)  
        } return arr               
    }   

    return (
            <div id='ledsheet' className='ledsettings app__sheet'>
                <div className='app__flex__between'>
                    <div className="app__title">Визуальные настройки</div>
                    <div className="app__title">Всего каналов: {channels.length}</div>
                </div>
                <div className="app__line"></div>
                <div className="app__bkg ledsettings__sheet app__flex__between">
                    {elements}
                </div>
                <div className='app__flex__between'>
                    <div className='app__center'>
                        <div className='app__navtext'>Скорость зажигания</div>
                        <div className='app__bkg ledsettings__text'>{Math.floor(opacityUp*1000)}%</div>
                        <select 
                            className="ledsettings__select" 
                            size={8}
                            value={opacityUp*1000}
                            onChange={(e) => changeLightUp(e.target)}>
                                {items(100)}
                        </select>
                    </div>
                    <div className='app__center'>
                        <div className='app__navtext'>Скорость затухания</div>
                        <div className='app__bkg ledsettings__text'>{Math.floor(opacityDown*1000)}%</div>
                        <select 
                            className="ledsettings__select" 
                            size={8}
                            value={opacityDown*1000}
                            onChange={(e) => changeLightDown(e.target)}>
                                {items(100)}
                        </select>
                    </div>
                    <div className='app__center'>
                        <div className='app__navtext'>Максимальная яркость</div>
                        <div className='app__bkg ledsettings__text'>{Math.floor(opacityMax*100)}%</div>
                        <select 
                            className="ledsettings__select" 
                            size={8}
                            value={opacityMax*100}
                            onChange={(e) => changeLightMax(e.target)}>
                                {items(100)}
                        </select>
                    </div>
                </div>
                <div className='app__line'></div>
                <div className="app__title">Варианты отрисовки</div>
                <div className='app__line'></div>
                <select 
                    className="ledsettings__selectS" 
                    size={8}
                    value={visSet}
                    onChange={(e) => changeVis(e.target)}>
                    <option value='none'>Нет</option>
                    <option value='radialfromcenter'>Радиальный градиент от центра</option>
                    <option value='radialtocenter'>Радиальный градиент к центру</option>
                    <option value='linearfromcentervertically'>Вертикальный градиент от центра</option>
                    <option value='lineartocentervertically'>Вертикальный градиент к центру</option>
                    <option value='linearfromcenterhorizontally'>Горизонтальный градиент от центра</option>
                    <option value='lineartocenterhorizontally'>Горизонтальный градиент к центру</option>
                </select>
                <div className='app__line'></div>
                <label htmlFor='visLab' className='app__title'> Лейблы каналов: </label>
                <input 
                    className='ledsettings__checkbox' 
                    name='visLab'
                    checked={visLab}
                    onChange={(e) => visLabChange(e.target)}
                    type="checkbox"/> <br/>
                <label htmlFor='visBor' className='app__title'> Рамки каналов: </label>
                <input 
                    className='ledsettings__checkbox'
                    name='visBor'
                    checked={visBor} 
                    onChange={(e) => visBorChange(e.target)}
                    type="checkbox"/>
                <div className='app__line'></div>
            
                <button 
                    className='ledsettings__button' 
                    onClick={() => fullScreenMode(1)}>
                    ПОЛНОЭКРАННЫЙ РЕЖИМ</button>       
            </div>    
    )
}

export default LedSettings;