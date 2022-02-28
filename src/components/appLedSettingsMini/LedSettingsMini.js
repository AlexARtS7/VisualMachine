import { useSelector } from 'react-redux'
import Actions from '../../store/actions/actions'
import './ledSettingsMini.scss'

const LedSettingsMini = () => {
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
        return (
            <div key={i} className='ledsettingsmini__item'>
                {visLab ? <div className='app__navtext'>
                    {channels.length < 8 ? 'Канал:' : 'Кл:'}<br/>{item.mark}</div> : null}
                    <div className={visBor ? 'app__bkg' : ''} >
                        <div className={visLab ? 'ledsettingsmini__view' : 'ledsettingsmini__viewlarge'} 
                             id={viewId}>
                        </div>
                    </div>                
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
            <div id='ledsheetmini' className='ledsettingsmini app__sheet'>
                <div className='app__flex__between'>
                    <div className="app__title">Визуальные настройки</div>
                    <div className="app__title">Всего каналов: {channels.length}</div>
                </div>
                <div className="app__line"></div>

                <div className='app__flex__between'>
                <div className="app__bkg ledsettingsmini__sheet__elements app__flex__between">
                    {elements}
                </div>
                <div>
                    <div className='app__flex__between'>
                        <div className='app__center'>
                            <div className='app__navtext'>Скорость зажигания</div>
                            <div className='app__bkg ledsettingsmini__text'>{Math.floor(opacityUp*1000)}%</div>
                            <select 
                                className="ledsettingsmini__select"
                                value={opacityUp*1000}
                                onChange={(e) => changeLightUp(e.target)}>
                                    {items(100)}
                            </select>
                        </div>
                        <div className='app__center'>
                            <div className='app__navtext'>Скорость затухания</div>
                            <div className='app__bkg ledsettingsmini__text'>{Math.floor(opacityDown*1000)}%</div>
                            <select 
                                className="ledsettingsmini__select"
                                value={opacityDown*1000}
                                onChange={(e) => changeLightDown(e.target)}>
                                    {items(100)}
                            </select>
                        </div>
                        <div className='app__center'>
                            <div className='app__navtext'>Максимальная яркость</div>
                            <div className='app__bkg ledsettingsmini__text'>{Math.floor(opacityMax*100)}%</div>
                            <select 
                                className="ledsettingsmini__select"
                                value={opacityMax*100}
                                onChange={(e) => changeLightMax(e.target)}>
                                    {items(100)}
                            </select>
                        </div>
                    </div>
                    <div className="app__title">Варианты отрисовки</div>
                    <select 
                        className="ledsettingsmini__selectS"
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
                </div>
                <div>
                    <label htmlFor='visLab' className='app__title'> Лейблы....: </label>
                    <input 
                        className='ledsettingsmini__checkbox' 
                        name='visLab'
                        checked={visLab}
                        onChange={(e) => visLabChange(e.target)}
                        type="checkbox"/> <br/>
                    <label htmlFor='visBor' className='app__title'> Рамки.......: </label>
                    <input 
                        className='ledsettingsmini__checkbox'
                        name='visBor'
                        checked={visBor} 
                        onChange={(e) => visBorChange(e.target)}
                        type="checkbox"/>
                    <div className='app__line'></div>
                
                    <button 
                        className='ledsettingsmini__button' 
                        onClick={() => fullScreenMode(1)}>
                        ПОЛНОЭКРАННЫЙ РЕЖИМ
                    </button> 
                </div>            
            </div> 
        </div>                  
    )
}

export default LedSettingsMini;