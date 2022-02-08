import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initState } from '../../services/appProcessor';

import './appVisualDisplay.scss';
// import store from '../../store';

const AppVisualDisplay = () => { 
    const dispatch = useDispatch();

    const {rate, fillStatus, renderColor, peaksStatus} = useSelector(state => state)

    const freq = () =>{
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
            case 93:
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
    }) //, [mode]

    return (
        <div className="appvisualdisplaysheet">
            <div>
                <span className="appvisualdisplaysheet__title">VisualDisplay</span>
                <select 
                value={rate} 
                className="appvisualdisplaysheet__item" 
                onChange={(e) => dispatch({type: 'CHANGE_VISMODE', payload: e.target.value})}>
                     <option value="255">Mode: 255 samples</option>
                     <option value="204">Mode: 204 samples</option>
                     <option value="93">Mode: 93 samples</option>
                     {/* <option value="44">Mode: 45 samples</option> */}
                </select>
                <select 
                value={fillStatus}
                className="appvisualdisplaysheet__item"
                onChange={(e) => dispatch({type: 'CHANGE_FILL_STATUS', payload: e.target.value})}>
                     <option value="1">Render: Fill</option>
                     <option value="0">Render: Stroke</option>
                </select>
                <select 
                value={renderColor}
                className="appvisualdisplaysheet__item"
                onChange={(e) => dispatch({type: 'CHANGE_COLOR', payload: e.target.value})}
                > 
                     <option value="255,255,255">Color: White</option>
                     <option value="0,0,255">Color: Blue</option>
                     <option value="255,0,0">Color: Red</option>
                     <option value="0,255,0">Color: Green</option>
                     <option value="0,255,255">Color: Aqua</option>
                     <option value="255,255,0">Color: Yellow</option>
                </select>
                <select 
                value={peaksStatus}
                className="appvisualdisplaysheet__item"
                onChange={(e) => dispatch({type: 'CHANGE_PEAKS_STATUS', payload: e.target.value})}>
                     <option value="1">Peaks: Yes</option>
                     <option value="0">Peaks: No</option>
                </select>
            </div>
            <Canvas/>
            <div className="appvisualdisplaysheet__center">
                <div className="appvisualdisplaysheet__freq">{freq()}</div>
            </div>            
        </div>
    )
}

const Canvas = () => {
    return (
        <canvas id='canvasDisplay'></canvas>
    )    
}

export default AppVisualDisplay;