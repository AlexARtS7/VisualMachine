import { useSelector, useDispatch } from 'react-redux'

import { initChannels } from '../appVisualDisplay/appDisplayDrawingProcessor';

const AppChannelItem = ({min, max, mark, id, assemble}) => { 
    const {rate, channels} = useSelector(state => state)
    const dispatch = useDispatch();
    
    const elements = () => {
        const arr = []
        for (let i = 0; i <= rate ; i ++){
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
                        value={assemble}> 
                            <option value="average">average</option>
                            <option value="maximum">maximum</option>
                    </select>
                </div>
                
            </div>
            
        </div>
    )
}

export default AppChannelItem;