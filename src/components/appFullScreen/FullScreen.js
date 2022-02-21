import { useSelector } from 'react-redux'
import { canvasReinit } from '../../services/appProcessor';
import Actions from '../../store/actions/actions';

import './fullScreen.scss';

const FullScreen = () => {
    const { fullScreenMode } = Actions();
    const {channels} = useSelector(state => state) 
    const visLab = useSelector(state => state.visLab)
    const visBor = useSelector(state => state.visBor)
    const hrefInit = useSelector(state => state.hrefInit)
    const initHref = useSelector(state => state.initHref)

    const elements = channels.map((item, i) => {
        if(hrefInit === !initHref) return null;
        const viewId = `view${i}`
        return (
            <div key={i} className='fullscreen__item'>
                {visLab ? <div className='app__navtext'>Ch: {item.mark}</div> : null}
                <div className={visBor ? 'app__bkg fullscreen__view' : 'fullscreen__view'} id={viewId}></div>
            </div>    
        )
    });

    const changefullScreenMode = () => {
        fullScreenMode(0)
        canvasReinit()
    }

    return (
        <div className='fullscreen'>
            <button 
                className='fullscreen__button' 
                onClick={() => changefullScreenMode()}>
                GO BACK TO SETTINGS</button>
                <div className='app__flex__center'>
                    {elements}
                </div>                
        </div>
    )
}

export default FullScreen;