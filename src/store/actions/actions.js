import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initMarkers } from '../../services/appDisplayDrawingProcessor';
import { initState } from "../../services/appProcessor";
import { hrefInition } from "../../services/appDisplayDrawingProcessor";

const Actions = () => {
    const dispatch = useDispatch();
    const channels = useSelector(state => state.channels)
    const fullScreen = useSelector(state => state.fullScreen)

    const changeFillStatus = (e) => {        
        localStorage.setItem('fillStatus', e.value)
        dispatch({type: 'CHANGE_FILL_STATUS', fill: e.value});
    }

    const changeMaxChannel = (e, i) => {
        const tempArr = channels;
        tempArr[i].max = +e.value

        dispatch({type: 'CHANGE_CHANNEL_ARRAY', tempArr: tempArr })

        if(e.value < channels[i].min){
            changeMinChannel(e, i);
        }
        initMarkers(); 
    }

    const changeMinChannel = (e, i) => {         
        const tempArr = channels;
        tempArr[i].min = +e.value

        dispatch({type: 'CHANGE_CHANNEL_ARRAY', tempArr: tempArr })

        if(e.value > channels[i].max){
            changeMaxChannel(e, i);
        }
        initMarkers();
    }

    const changeVisMode = (e) => {        
        localStorage.setItem('rate', e.value)
        dispatch({type: 'CHANGE_VISMODE', rate: e.value})
    }

    const changeColor = (e) => {        
        localStorage.setItem('renderColor', e.value)
        dispatch({type: 'CHANGE_COLOR', color: e.value})
    }

    const changePeaksStatus = (e) => {        
        localStorage.setItem('peaksStatus', e.value)
        dispatch({type: 'CHANGE_PEAKS_STATUS', peaks: e.value})
    }

    const changeSampleColor = (e, i) => {
        const tempArr = channels;
        tempArr[i].color = e.value

        dispatch({type: 'CHANGE_CHANNEL_ARRAY', tempArr: tempArr })
        initMarkers();
    }

    const assembleChange = (e, i) => {
        const tempArr = channels;
        tempArr[i].assemble = e.value

        dispatch({type: 'CHANGE_CHANNEL_ARRAY', tempArr: tempArr })        
    }

    const rearChange = (e, i) => {
        const tempArr = channels;
        tempArr[i].rear = +e.value

        dispatch({type: 'CHANGE_CHANNEL_ARRAY', tempArr: tempArr })
    }

    const frontChange = (e, i) => {
        const tempArr = channels;
        tempArr[i].front = +e.value

        dispatch({type: 'CHANGE_CHANNEL_ARRAY', tempArr: tempArr })
    }

    const reactionChange = (e, i) => {
        const tempArr = channels;
        tempArr[i].reaction = +e.value

        dispatch({type: 'CHANGE_CHANNEL_ARRAY', tempArr: tempArr })
    }

    const changeLightUp = (e) => {        
        localStorage.setItem('opacityUp', e.value/1000)
        dispatch({type: 'CHANGE_LIGHT_UP', value: e.value})
        initState();
    }

    const changeLightDown = (e) => {        
        localStorage.setItem('opacityDown', e.value/1000)
        dispatch({type: 'CHANGE_LIGHT_DOWN', value: e.value})
        initState();
    }

    const changeLightMax = (e) => {        
        localStorage.setItem('opacityMax', e.value/100)
        dispatch({type: 'CHANGE_LIGHT_MAX', value: e.value})
        initState();
    }

    const changeVis = (e) => {        
        localStorage.setItem('visSet', e.value)
        dispatch({type: 'CHANGE_VISUAL_SETTINGS', value: e.value})
        initState();
    }

    const visBorChange = (e) => {        
        localStorage.setItem('visBor', e.checked)
        dispatch({type: 'CHANGE_BORDER_STATUS', value: e.checked})
    }

    const visLabChange = (e) => {   
        localStorage.setItem('visLab', e.checked)     
        dispatch({type: 'CHANGE_LABELS_STATUS', value: e.checked})
    }

    const fullScreenMode = (value) => {
        dispatch({type: 'CHANGE_FULLSCREEN_MODE', value: value})
    }

    const onChangeRate = (e) => {
        changeVisMode(e)
        channels.forEach((item, i) => {
            if(item.max > +e.value) {
                changeMaxChannel(e, i)
            }
            if(item.min > +e.value) {
                changeMinChannel(e, i)
            }
        });
    }

    const addChannels = () => {
        const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let res = abc.find(i => !channels.map(item => item.mark).includes(i))
        if(channels.length < 10){
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

            dispatch({type: 'CHANGE_CHANNEL_ARRAY', tempArr: tempArr })
            initMarkers();
        }
    }
    
    const deleteChannel = (i) => {
        const tempArr = channels;
        tempArr.splice(i, 1);   

        dispatch({type: 'CHANGE_CHANNEL_ARRAY', tempArr: tempArr })
        initMarkers();
    }

    useEffect(() => {
        dispatch({type: 'CHANGE_HREFINIT', hrefInit: hrefInition(), initHref: window.location.href })
    }, [fullScreen])
    
    //localstorage
    localStorage.setItem('channels', JSON.stringify(channels))

    return {changeFillStatus, 
            addChannels,
            onChangeRate, 
            changeColor, 
            changePeaksStatus, 
            changeSampleColor,
            assembleChange,
            rearChange,
            frontChange,
            reactionChange,
            deleteChannel,
            changeMinChannel,
            changeMaxChannel,
            changeLightUp,
            changeLightDown,
            changeVis,
            visBorChange,
            visLabChange,
            changeLightMax,
            fullScreenMode}
}

export default Actions;