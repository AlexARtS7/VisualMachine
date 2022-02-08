const initialState = {
    renderColor: '0,255,0',
    rate: 255,
    peaksStatus: 1,
    fillStatus: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                renderColor: action.payload
            }
        case 'CHANGE_PEAKS_STATUS':
            return {
                ...state,
                peaksStatus: +action.payload
            }
        case 'CHANGE_FILL_STATUS':
            return {
                ...state,
                fillStatus: +action.payload
            }
        case 'CHANGE_VISMODE':
            return {
                ...state,
                rate: +action.payload
            }            
            
        default: return state
    }
}

export default reducer;