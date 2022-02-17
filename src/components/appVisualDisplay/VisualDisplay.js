import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initState } from '../../services/appProcessor';

import './visualDisplay.scss';

const VisualDisplay = () => {
    const dispatch = useDispatch();

    const rate = useSelector(state => state.rate)
    const fillStatus = useSelector(state => state.fillStatus)
    const renderColor = useSelector(state => state.renderColor)
    const peaksStatus = useSelector(state => state.peaksStatus)
    const channels = useSelector(state => state.channels)

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

    const onChangeRate = (event) => {
        dispatch({type: 'CHANGE_VISMODE', rate: event.value})
        channels.forEach((item, i) => {
            if(item.max > +event.value) {
                dispatch({type: 'CHANGE_MAX_CHANNEL', max: event.value, id: i})
            }
            if(item.min > +event.value) {
                dispatch({type: 'CHANGE_MIN_CHANNEL', min: event.value, id: i})
            }
        });
    }

    return (
        <div className="app__sheet visualdisplaysheet">
            <div className='app__flex__between'>
            <div className="app__title">VisualDisplay</div>
                <div>
                    <select 
                    defaultValue={rate}
                    onChange={(e) => onChangeRate(e.target)}>
                        <option value="255">Mode: 255 samples</option>
                        <option value="204">Mode: 204 samples</option>
                        <option value="92">Mode: 92 samples</option>
                        {/* <option value="44">Mode: 45 samples</option> */}
                    </select>
                    <select 
                    defaultValue={fillStatus}
                    onChange={(e) => dispatch({type: 'CHANGE_FILL_STATUS', fill: e.target.value})}>
                        <option value="1">Render: Fill</option>
                        <option value="0">Render: Stroke</option>
                    </select>
                    <select 
                    defaultValue={renderColor}
                    onChange={(e) => dispatch({type: 'CHANGE_COLOR', color: e.target.value})}> 
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
                    <select 
                    defaultValue={peaksStatus}
                    onChange={(e) => dispatch({type: 'CHANGE_PEAKS_STATUS', peaks: e.target.value})}>
                        <option value="1">Peaks: Yes</option>
                        <option value="0">Peaks: No</option>
                    </select>
                </div>
            </div>
            <canvas id='canvasDisplay'></canvas>
            <div className="visualdisplaysheet__center">
                <div className="visualdisplaysheet__freq">{freq()}</div>
            </div>            
        </div>
    )
}

export default VisualDisplay;