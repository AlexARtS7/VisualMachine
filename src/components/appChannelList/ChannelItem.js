import { useSelector, useDispatch } from 'react-redux'
import { initMarkers } from '../../services/appDisplayDrawingProcessor';

const ChannelItem = ({id}) => {
    const dispatch = useDispatch();
    const rate = useSelector(state => state.rate)
    const {channels} = useSelector(state => state)   
    
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
        initMarkers();  
    }

    const changeMax = (event) => {
        if(event.value < channels[event.id].min){
            calibreMinMax(event);
        } else {
            dispatch({type: 'CHANGE_MAX_CHANNEL', max: event.value, id: event.id})
        }  
        initMarkers();    
    }

    const changeSampleColor = (event) => {
        dispatch({type: 'CHANGE_SAMPLE_COLOR', color: event.value, id: event.id})
        initMarkers();
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

    const deleteChannel = (event) => {
        dispatch({type: 'DELETE_SELECTED_CHANNEL', id: event.id})
        initMarkers();
    }

    return (
        <div className="app__sheet channellist">
            <div className='app__flex__between'>
                <div className="app__title">Channel : {channels[id].mark}</div>
                <div>
                <select
                    value={channels[id].color}
                    id={id}
                    onChange={(e) => changeSampleColor(e.target)}>
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
                {id > 2 ? <button 
                        className='closebutton' 
                        id={id}
                        onClick={(e) => deleteChannel(e.target)}
                        >DELETE CHANNEL</button>: null}
                    
                </div>              
            </div>            
            <div className="app__line"></div>
            <div className="app__flex__between">
                <div className="app__center">
                    <div className="app__navtext">Start</div>
                    <select 
                        className="channellist__select" 
                        size={4}
                        value={channels[id].min}
                        id={id}
                        onChange={(e) => changeMin(e.target)}>
                        {elements()}
                    </select>
                </div>
                <div className="app__center">
                    <div className="app__navtext">End</div>
                    <select 
                        className="channellist__select" 
                        size={4}
                        value={channels[id].max}
                        id={id}
                        onChange={(e) => changeMax(e.target)}>
                        {elements()}
                    </select>
                </div>
                <div className="app__center ml">
                    <div className='app__navtext'>startpoint</div>
                    <div className='app__bkg channellist__text'>{channels[id].min}</div>
                    <div className='app__navtext'>endpoint</div>
                    <div className='app__bkg channellist__text'>{channels[id].max}</div>
                </div>
                <div className="app__center ml">
                    <div className='app__navtext'>channelAssemble</div>
                    <select                 
                        className="channellist__select"
                        id={id}
                        size={4}
                        value={channels[id].assemble}
                        onChange={(e) => assembleChange(e.target)}> 
                            <option value="average">average of a samples</option>
                            <option value="maximum">maximum of a samples</option>
                    </select>
                </div>
                <div className="app__center ml">
                    <div className='app__navtext'>visualrendering</div>
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
                    <div className='app__navtext'>triggering</div>
                    <div className='channellist__triggeringarea app__bkg' id={trId}></div> 
                </div>            
                    <div className="app__center ml">
                        <div className="app__navtext">rearbuf</div>
                        <select 
                            className="channellist__select" 
                            size={4}
                            value={channels[id].rear}
                            id={id}
                            onChange={(e) => rearChange(e.target)}>
                            {elementsBuf()}
                        </select>
                    </div>                  
                    <div className="app__center">
                        <div className="app__navtext">frontbuf</div>
                        <select 
                            className="channellist__select" 
                            size={4}
                            value={channels[id].front}
                            id={id}
                            onChange={(e) => frontChange(e.target)}>
                            {elementsBuf()}
                        </select>
                    </div>
                    <div className="app__center ml">
                        <div className='app__navtext'>frontbuffer</div>
                        <div className='app__bkg channellist__text'>{channels[id].front}</div>
                        <div className='app__navtext'>rearbuffer</div>
                        <div className='app__bkg channellist__text'>{channels[id].rear}</div>
                    </div>
                    <div className="app__center ml">
                        <div className="app__navtext">reaction</div>
                        <select 
                            className="channellist__select" 
                            id={id}
                            value={channels[id].reaction}
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

export default ChannelItem;