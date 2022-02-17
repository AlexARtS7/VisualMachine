import { useSelector, useDispatch } from 'react-redux'
import { initMarkers } from '../../services/appDisplayDrawingProcessor';

import './controlPanel.scss';

const AppControlPanel = () => {
    const dispatch = useDispatch();
   
    const channels = useSelector(state => state.channels)

    const addChannels = () => {
        const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let res = abc.find(i => !channels.map(item => item.mark).includes(i))
        if(channels.length < 6){
            const tempArr = channels;
            tempArr.push (
                {mark: res, min: 0, max: 0, 
                color: '0,255,0', 
                assemble: 'maximum', rear: 28, 
                front: 10, reaction: 2})
         
        tempArr.sort((a, b) => {
            if(a.mark < b.mark) return -1;
            if(a.mark > b.mark) return 1;
            })
            dispatch({type: 'ADD_NEW_CHANNEL', newArr: tempArr})
            initMarkers();
        }
    }

    return (
        <div className="app__sheet controlpanel">
        <span className="app__title">Controls:</span>
        <button onClick={addChannels}>ADDNEWCHANNEL</button>
        </div>
    )
}

export default AppControlPanel;