import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { initState } from '../../services/appProcessor';
import { PopoverPicker } from '../appColorPicker/PopoverPicker';

import Actions from '../../store/actions/actions';

import './visualDisplay.scss';

const VisualDisplay = () => {
    const {changeFillStatus, onChangeRate, changeSuppression, changeColor, changePeaksStatus, addChannels} = Actions();
    const rate = useSelector(state => state.rate)
    const fillStatus = useSelector(state => state.fillStatus)
    const renderColor = useSelector(state => state.renderColor)
    const peaksStatus = useSelector(state => state.peaksStatus)
    const suppression = useSelector(state => state.suppression)
    
    const [color, setColor] = useState(renderColor)

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
            512, 14, '.....', '..',
            1024, 24, '..', '..']
        
        let num = 0
        switch (rate) {
            case 1024:
                num = 4                
            break;
            case 512:
                num = 3                
            break;
            case 255:
                num = 0                
            break;
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
        changeColor(color)
    })   

    return (
        <div id='visualDisplay' className="app__sheet visualdisplaysheet">
            <div className='app__flex__between'>
            <div className="app__title">?????????????????? ????????????</div>
                <div className='app__flex'>
                    <section className="small example">
                        <PopoverPicker color={color} onChange={setColor}/>
                    </section>
                    <section>
                        <select 
                            defaultValue={fillStatus}
                            onChange={(e) => changeFillStatus(e.target)}>
                                <option value="1">?????????????? ??????????????????: ??????????????</option>
                                <option value="0">?????????????? ??????????????????: ??????????????</option>
                        </select>
                    </section>
                    <section>
                        <select 
                            defaultValue={peaksStatus}
                            onChange={(e) => changePeaksStatus(e.target)}>
                                <option value="1">????????: ????</option>
                                <option value="0">????????: ??????</option>
                        </select>
                    </section>
                    <section>
                        <select 
                            defaultValue={suppression}
                            onChange={(e) => changeSuppression(e.target)}>
                                <option value="0">????????????????????: ??????</option>
                                <option value="1.2">????????????????????: 1.2</option>
                                <option value="1.5">????????????????????: 1.5</option>
                                <option value="1.8">????????????????????: 1.8</option>
                                <option value="2.0">????????????????????: 2.0</option>
                        </select>
                    </section>
                    {/* <section>
                        <select 
                            defaultValue={rate}
                            onChange={(e) => onChangeRate(e.target)}>
                                <option value="1024">????????????????: 1024 ?????????????? ???? ????????????</option>
                                <option value="512">????????????????: 512 ?????????????? ???? ????????????</option>
                                <option value="255">????????????????: 255 ?????????????? ???? ????????????</option>
                                <option value="204">????????????????: 204 ?????????????? ???? ????????????</option>
                                <option value="92">????????????????: 92 ?????????????? ???? ????????????</option>
                                {/* <option value="44">Mode: 45 samples</option> */}
                        {/* </select> */}
                    {/* </section> */}
                </div>
            </div>
            <canvas id='canvasDisplay'></canvas>
            <div className="visualdisplaysheet__center">
                <div className="visualdisplaysheet__freq">{freq()}</div>
            </div> 
            <div className='app__line'></div>  
            <div>
                <span className="app__title">???????????????????? ????????????????:</span>
                <button onClick={addChannels}>???????????????? ??????????</button>
            </div>         
        </div>
    )
}

export default VisualDisplay;