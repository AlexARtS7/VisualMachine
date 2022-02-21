import initialState from '../initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, renderColor: action.color }

        case 'CHANGE_FULLSCREEN_MODE':
            return { ...state, fullScreen: action.value }

        case 'CHANGE_LABELS_STATUS':            
            return { ...state, visLab: action.value }

        case 'CHANGE_BORDER_STATUS':
            return { ...state, visBor: action.value }

        case 'CHANGE_VISUAL_SETTINGS':
            return { ...state, visSet: action.value }

        case 'CHANGE_LIGHT_UP':
            return { ...state, opacityUp: action.value/1000 }

        case 'CHANGE_LIGHT_DOWN':
            return { ...state, opacityDown: action.value/1000 }

        case 'CHANGE_LIGHT_MAX':
            return { ...state, opacityMax: action.value/100 }

        case 'CHANGE_PEAKS_STATUS':
            return { ...state, peaksStatus: +action.peaks }

        case 'CHANGE_FILL_STATUS':
            return { ...state, fillStatus: +action.fill }

        case 'CHANGE_VISMODE':
            return { ...state, rate: +action.rate }  
            
        case 'CHANGE_HREFINIT':
            return { ...state, hrefInit: action.hrefInit, initHref: action.initHref }        

        case 'CHANGE_CHANNEL_ARRAY':
            return { ...state, channels: action.tempArr } 
                    
        default: return state
    }
}

export default reducer;