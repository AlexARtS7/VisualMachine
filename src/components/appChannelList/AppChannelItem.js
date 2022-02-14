import { useSelector, useDispatch } from 'react-redux'

const AppChannelItem = ({min, max, mark, id, assemble, rear, front, reaction}) => { 
    const {rate, channels} = useSelector(state => state)
    const dispatch = useDispatch();

    const divId = `div${id}`;
    const inId = `in${id}`;
    const trId = `tr${id}`;
    const ufId = `uf${id}`;
    const urId = `ur${id}`;
    const dfId = `df${id}`;
    const drId = `dr${id}`;
    
    const elements = () => {
        const arr = []
        for (let i = 0; i <= rate ; i ++){
            arr.push(<option key={i} value={i}>{i}</option>)  
        } return arr               
    }   
    
    const elementsBuf = () => {
        const arr = []
        for (let i = 0; i <= 50 ; i ++){
            arr.push(<option key={i} value={i}>{i}</option>)  
        } return arr               
    } 

    const calibreMinMax = (event) => {
        dispatch({type: 'CHANGE_MAX_CHANNEL', max: event.value, id: event.id})
        dispatch({type: 'CHANGE_MIN_CHANNEL', min: event.value, id: event.id})
    }

    const changeMin = (event) => {
        if(event.value > channels[event.id].max){
            calibreMinMax(event);
        } else {
            dispatch({type: 'CHANGE_MIN_CHANNEL', min: event.value, id: event.id})
        }        
    }

    const changeMax = (event) => {
        if(event.value < channels[event.id].min){
            calibreMinMax(event);
        } else {
            dispatch({type: 'CHANGE_MAX_CHANNEL', max: event.value, id: event.id})
        }        
    }

    const changeSampleColor = (event) => {
        dispatch({type: 'CHANGE_SAMPLE_COLOR', color: event.value, id: event.id})
    }

    const assembleChange = (event) => {
        dispatch({type: 'CHANGE_SAMPLE_ASSEMBLE', assemble: event.value, id: event.id})
        
    }

    const rearChange = (event) => {
        dispatch({type: 'CHANGE_REARBUFFER', rear: event.value, id: event.id})
    }

    const frontChange = (event) => {
        dispatch({type: 'CHANGE_FRONTBUFFER', front: event.value, id: event.id})
    }

    const reactionChange = (event) => {
        dispatch({type: 'CHANGE_REACTION', reaction: event.value, id: event.id})
    }

    return (
        <div className="app__sheet appchannellist">
            <div>
                <span className="app__title">Channel : {mark}</span>
                <select
                className="app__item"
                id={id}
                onChange={(e) => changeSampleColor(e.target)}> 
                     <option value="255,255,255">Color: White</option>
                     <option value="0,0,255">Color: Blue</option>
                     <option value="255,0,0">Color: Red</option>
                     <option value="0,255,0">Color: Green</option>
                     <option value="0,255,255">Color: Aqua</option>
                     <option value="255,255,0">Color: Yellow</option>
                     <option value="0, 100, 0">Color: DarkGreen</option>
                     <option value="128, 128, 0">Color: Olive</option>
                     <option value="255, 165, 0">Color: Orange</option>
                     <option value="95, 158, 160">Color: CadetBlue</option>
                     <option value="128, 0, 128">Color: Purple</option>
                     <option value="154, 205, 50">Color: YellowGreen</option>
                     <option value="189, 183, 107">Color: DarkKhaki</option>
                </select>
            </div>            
            <div className="appchannellist__line"></div>
            <div className="app__flex">
                <div className="appchannellist__center">
                    <div className="appchannellist__navtext">Start</div>
                    <select 
                        className="appchannellist__select" 
                        size={4}
                        value={min}
                        id={id}
                        onChange={(e) => changeMin(e.target)}>
                        {elements()}
                    </select>
                </div>
                <div className="appchannellist__center">
                    <div className="appchannellist__navtext">End</div>
                    <select 
                        className="appchannellist__select" 
                        size={4}
                        value={max}
                        id={id}
                        onChange={(e) => changeMax(e.target)}>
                        {elements()}
                    </select>
                </div>
                <div className="appchannellist__center ml">
                    <div className='appchannellist__navtext'>startpoint</div>
                    <div className='appchannellist__bkg appchannellist__text'>{channels[id].min}</div>
                    <div className='appchannellist__navtext'>endpoint</div>
                    <div className='appchannellist__bkg appchannellist__text'>{channels[id].max}</div>
                </div>
                <div className="appchannellist__center ml">
                    <div className='appchannellist__navtext'>channelAssemble</div>
                    <select                 
                        className="appchannellist__select"
                        id={id}
                        size={4}
                        value={assemble}
                        onChange={(e) => assembleChange(e.target)}> 
                            <option value="average">average of a samples</option>
                            <option value="maximum">maximum of a semples</option>
                    </select>
                </div>
                <div className="appchannellist__center ml">
                    <div className='appchannellist__navtext'>visualrendering</div>
                    <div className='appchannellist__renderarea appchannellist__bkg'>    
                        <div className='div' id={divId}></div>
                        <div className='indicator' id={inId}></div>
                        <div className='markers up' id={ufId}></div>
                        <div className='markers up' id={urId}></div>
                        <div className='markers down' id={dfId}></div>
                        <div className='markers down' id={drId}></div>
                    </div>
                </div>
                <div className="appchannellist__center ml">
                    <div className='appchannellist__navtext'>triggering</div>
                    <div className='appchannellist__triggeringarea appchannellist__bkg' id={trId}></div> 
                </div>            
                    <div className="appchannellist__center ml">
                        <div className="appchannellist__navtext">rearbuf</div>
                        <select 
                            className="appchannellist__select" 
                            size={4}
                            value={rear}
                            id={id}
                            onChange={(e) => rearChange(e.target)}>
                            {elementsBuf()}
                        </select>
                    </div>                  
                    <div className="appchannellist__center">
                        <div className="appchannellist__navtext">frontbuf</div>
                        <select 
                            className="appchannellist__select" 
                            size={4}
                            value={front}
                            id={id}
                            onChange={(e) => frontChange(e.target)}>
                            {elementsBuf()}
                        </select>
                    </div>
                    <div className="appchannellist__center ml">
                        <div className='appchannellist__navtext'>frontbuffer</div>
                        <div className='appchannellist__bkg appchannellist__text'>{channels[id].front}</div>
                        <div className='appchannellist__navtext'>rearbuffer</div>
                        <div className='appchannellist__bkg appchannellist__text'>{channels[id].rear}</div>
                    </div>
                    <div className="appchannellist__center ml">
                        <div className="appchannellist__navtext">reaction</div>
                        <select 
                            className="appchannellist__select" 
                            id={id}
                            value={reaction}
                            size={4}
                            onChange={(e) => reactionChange(e.target)}>
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

export default AppChannelItem;