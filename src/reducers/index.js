const initialState = {
    renderColor: '0,255,0',
    rate: 204,
    peaksStatus: 1,
    fillStatus: 1,
    channels: [ {mark: 'A', min: 0, max: 8, color: '255,255,255', assemble: 'average'}, 
                {mark: 'B', min: 30, max: 50, color: '255,255,255', assemble: 'average'}, 
                {mark: 'C', min: 100, max: 190, color: '255,255,255', assemble: 'average'} ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                renderColor: action.color
            }
        case 'CHANGE_PEAKS_STATUS':
            return {
                ...state,
                peaksStatus: +action.peaks
            }
        case 'CHANGE_FILL_STATUS':
            return {
                ...state,
                fillStatus: +action.fill
            }
        case 'CHANGE_VISMODE':
            return {
                ...state,
                rate: +action.rate
            }  
        case 'CHANGE_MIN_CHANNEL':
            const newMinChannels = state.channels;
            newMinChannels[action.id].min = +action.min
        return {
            ...state,
            channels: newMinChannels            
        } 
        case 'CHANGE_MAX_CHANNEL':
            const newMaxChannels = state.channels;
            newMaxChannels[action.id].max = +action.max
        return {
            ...state,
            channels: newMaxChannels         
        }    
        case 'CHANGE_SAMPLE_COLOR':
            const newSampleColor = state.channels;
            newSampleColor[action.id].color = action.color
        return {
            ...state,
            channels: newSampleColor       
        }              
            
        default: return state
    }
}

export default reducer;