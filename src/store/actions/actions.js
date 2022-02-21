import { useDispatch, useSelector } from "react-redux";
import { initMarkers } from '../../services/appDisplayDrawingProcessor';
import { initState } from "../../services/appProcessor";

const Actions = () => {
    const dispatch = useDispatch();
    const channels = useSelector(state => state.channels)

    const changeFillStatus = (e) => {
        dispatch({type: 'CHANGE_FILL_STATUS', fill: e.value});
    }

    const calibreMinMax = (e, i) => {
        dispatch({type: 'CHANGE_MAX_CHANNEL', max: e.value, id: i})
        dispatch({type: 'CHANGE_MIN_CHANNEL', min: e.value, id: i})
    }

    const changeMaxChannel = (e, i) => {
        dispatch({type: 'CHANGE_MAX_CHANNEL', max: e.value, id: i})
        if(e.value < channels[i].min){
            calibreMinMax(e, i);
        } else {
            dispatch({type: 'CHANGE_MAX_CHANNEL', max: e.value, id: i})
        }  
        initMarkers(); 
    }

    const changeMinChannel = (e, i) => {        
        if(e.value > channels[i].max){
            calibreMinMax(e, i);
        } else {
            dispatch({type: 'CHANGE_MIN_CHANNEL', min: e.value, id: i})
        } 
        initMarkers();
    }

    const changeVisMode = (e) => {
        dispatch({type: 'CHANGE_VISMODE', rate: e.value})
    }

    const changeColor = (e) => {
        dispatch({type: 'CHANGE_COLOR', color: e.value})
    }

    const changePeaksStatus = (e) => {
        dispatch({type: 'CHANGE_PEAKS_STATUS', peaks: e.value})
    }

    const addNewChannel = (eArr) => {
        dispatch({type: 'ADD_NEW_CHANNEL', newArr: eArr})
    }

    const changeSampleColor = (e) => {
        dispatch({type: 'CHANGE_SAMPLE_COLOR', color: e.value, id: e.id})
        initMarkers();
    }

    const assembleChange = (e) => {
        dispatch({type: 'CHANGE_SAMPLE_ASSEMBLE', assemble: e.value, id: e.id})
        
    }

    const rearChange = (e) => {
        dispatch({type: 'CHANGE_REARBUFFER', rear: e.value, id: e.id})
    }

    const frontChange = (e) => {
        dispatch({type: 'CHANGE_FRONTBUFFER', front: e.value, id: e.id})
    }

    const reactionChange = (e) => {
        dispatch({type: 'CHANGE_REACTION', reaction: e.value, id: e.id})
    }

    const deleteChannel = (e) => {
        dispatch({type: 'DELETE_SELECTED_CHANNEL', id: e.id})
        initMarkers();
    }

    const changeLightUp = (e) => {
        dispatch({type: 'CHANGE_LIGHT_UP', value: e.value})
        initState();
    }

    const changeLightDown = (e) => {
        dispatch({type: 'CHANGE_LIGHT_DOWN', value: e.value})
        initState();
    }

    const changeLightMax = (e) => {
        dispatch({type: 'CHANGE_LIGHT_MAX', value: e.value})
        initState();
    }

    const changeVis = (e) => {
        dispatch({type: 'CHANGE_VISUAL_SETTINGS', value: e.value})
        initState();
    }

    const visBorChange = (e) => {
        dispatch({type: 'CHANGE_BORDER_STATUS', value: e.checked})
    }

    const visLabChange = (e) => {        
        dispatch({type: 'CHANGE_LABELS_STATUS', value: e.checked})
    }

    const fullScreenMode = (value) => {
        dispatch({type: 'CHANGE_FULLSCREEN_MODE', value: value})
    }

    const hrefSet = (value) => {
        dispatch({type: 'HREF_SET', value: value})
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

    //localstorage
    localStorage.setItem('channels', JSON.stringify(channels))

    return {changeFillStatus, 
            onChangeRate, 
            changeColor, 
            changePeaksStatus, 
            addNewChannel, 
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
            hrefSet,
            visBorChange,
            visLabChange,
            changeLightMax,
            fullScreenMode}
}

export default Actions;