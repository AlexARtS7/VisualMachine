import React from 'react';
import { useSelector } from 'react-redux'
import { canvasReinit } from '../../services/appProcessor';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Actions from '../../store/actions/actions';

import './fullScreen.scss';

const FullScreenRender = () => {
    const { fullScreenMode } = Actions();
    const {channels} = useSelector(state => state) 
    const visLab = useSelector(state => state.visLab)
    const visBor = useSelector(state => state.visBor)
    const hrefInit = useSelector(state => state.hrefInit)
    const initHref = useSelector(state => state.initHref)

    const handle = useFullScreenHandle();

    // const startFullscreen = () => {
    //     handle.enter
    // }
    

    const elements = channels.map((item, i) => {
        if(hrefInit === !initHref) return null;
        const viewId = `view${i}`
        return (
            <div key={i} className='fullscreen__item'>
                {visLab ? <div className='app__navtext'>КАНАЛ: {item.mark}</div> : null}
                <div className={visBor ? 'app__bkg' : ''}>
                    <div className='fullscreen__view' 
                    id={viewId}></div>
                </div>
            </div>    
        )
    });

    const changefullScreenMode = () => {
        fullScreenMode(0)
        canvasReinit()
    }

    return (
        <div>
            <button 
                className='fullscreen__button' 
                onClick={handle.enter}>
                НА ВЕСЬ ЭКРАН</button>
        <FullScreen handle={handle}>
            <div className='fullscreen'>
                <button 
                    className='fullscreen__button' 
                    onClick={() => changefullScreenMode()}>
                    ВЕРНУТЬСЯ К НАСТРОЙКАМ
                </button>
                <div className='app__flex__center'>
                    {elements}
                </div>                
            </div>
        </FullScreen>
        </div>        
    )
}

export default FullScreenRender;