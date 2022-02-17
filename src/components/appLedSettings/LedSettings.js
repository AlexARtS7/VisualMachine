import { useSelector, useDispatch } from 'react-redux'
import './ledSettings.scss'

const LedSettings = () => {
    // const dispatch = useDispatch();
    const {channels} = useSelector(state => state)   
    
    const elements = channels.map((item, i) => {
        return (
            <div key={i} className='ledsettings__item'>
                <div className='app__navtext'>Channel: {item.mark}</div>
                <div className="app__bkg ledsettings__view"></div>
            </div>    
        )
    });

    window.addEventListener('scroll', function(ev) {
        const back = document.getElementById('backsheet');
        const target = document.getElementById('ledsheet');
        const pos = Math.floor(back.getBoundingClientRect().top);
        console.log(pos)
        if (pos <= 0) { 
            console.log(window.innerHeight)
            target.className = 'ledsettings app__sheet sticky';
            } else {
            target.className = 'ledsettings app__sheet';
            }
     });


    return (
            <div id='ledsheet' className='ledsettings app__sheet'>
                <div className='app__flex__between'>
                    <div className="app__title">LedSettings</div>
                    <div className="app__title">channels: {channels.length}</div>
                </div>
                    
                <div className="app__line"></div>
                <div className="app__bkg ledsettings__sheet app__flex__between">
                    {elements}
                </div>
                <select 
                    className="ledsettings__sheet" 
                    size={4}>
                </select>
            </div>    
    )
}



export default LedSettings;