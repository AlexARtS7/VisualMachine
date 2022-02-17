const initialState = {
    renderColor: '0,255,0',
    rate: 204,
    peaksStatus: 1,
    fillStatus: 1,
    channels: [ 
{mark: 'A', min: 0, max: 8, color: '255,0,0', assemble: 'maximum', rear: 28, front: 10, reaction: 2}, 
{mark: 'B', min: 30, max: 50, color: '0,0,255', assemble: 'maximum', rear: 28, front: 10, reaction: 2}, 
{mark: 'C', min: 100, max: 190, color: '255,255,0', assemble: 'maximum', rear: 28, front: 10, reaction: 2} ]
}



const reducer = (state = initialState, action) => {
    var temp = []
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
            temp = state.channels;
            temp[action.id].min = +action.min
        return {
            ...state,
            channels: temp            
        } 
        case 'CHANGE_MAX_CHANNEL':
            temp = state.channels;
            temp[action.id].max = +action.max
        return {
            ...state,
            channels: temp         
        }    
        case 'CHANGE_SAMPLE_COLOR':
            temp = state.channels;
            temp[action.id].color = action.color
        return {
            ...state,
            channels: temp       
        }      
        case 'CHANGE_SAMPLE_ASSEMBLE':
            temp = state.channels;
            temp[action.id].assemble = action.assemble            
        return {
            ...state,
            channels: temp       
        }   
        case 'CHANGE_REARBUFFER':
            temp = state.channels;
            temp[action.id].rear = +action.rear            
        return {
            ...state,
            channels: temp       
        }   
        case 'CHANGE_FRONTBUFFER':
            temp = state.channels;
            temp[action.id].front = +action.front            
        return {
            ...state,
            channels: temp       
        } 
        case 'CHANGE_REACTION':
            temp = state.channels;
            temp[action.id].reaction = +action.reaction            
        return {
            ...state,
            channels: temp       
        }   
        case 'DELETE_SELECTED_CHANNEL':
            temp = state.channels;
            temp.splice(action.id, 1);         
        return {
            ...state,
            channels: temp       
        }
        case 'ADD_NEW_CHANNEL':       
        return {
            ...state,
            channels: action.newArr       
        }        
        default: return state
    }
}

export default reducer;