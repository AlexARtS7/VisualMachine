import initialState from '../initialState';

const reducer = (state = initialState, action) => {
    var temp = []
    switch (action.type) {
        case 'CHANGE_COLOR':
            localStorage.setItem('renderColor', action.color)
            return {
                ...state,
                renderColor: action.color
            }
        case 'CHANGE_FULLSCREEN_MODE':
            return {
                ...state,
                fullScreen: action.value
            }
        case 'CHANGE_LABELS_STATUS':
            localStorage.setItem('visLab', action.value)
        return {
            ...state,
            visLab: action.value
        }
        case 'CHANGE_BORDER_STATUS':
            localStorage.setItem('visBor', action.value)
        return {
            ...state,
            visBor: action.value
        }
        case 'CHANGE_VISUAL_SETTINGS':
            localStorage.setItem('visSet', action.value)
        return {
            ...state,
            visSet: action.value
        }
        case 'CHANGE_LIGHT_UP':
            localStorage.setItem('opacityUp', action.value/1000)
        return {
            ...state,
            opacityUp: action.value/1000
        }
        case 'CHANGE_LIGHT_DOWN':
            localStorage.setItem('opacityDown', action.value/1000)
        return {
            ...state,
            opacityDown: action.value/1000
        }
        case 'CHANGE_LIGHT_MAX':
            localStorage.setItem('opacityMax', action.value/100)
        return {
            ...state,
            opacityMax: action.value/100
        }
        case 'CHANGE_PEAKS_STATUS':
            localStorage.setItem('peaksStatus', action.peaks)
            console.log(localStorage.getItem('peaksStatus'))
            return {
                ...state,
                peaksStatus: +action.peaks
            }
        case 'CHANGE_FILL_STATUS':
            localStorage.setItem('fillStatus', action.fill)
            return {
                ...state,
                fillStatus: +action.fill
            }
        case 'HREF_SET':
        return {
            ...state,
            hrefInit: action.value
        }
        case 'CHANGE_VISMODE':
            localStorage.setItem('rate', action.rate)
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