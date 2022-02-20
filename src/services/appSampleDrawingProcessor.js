var xPos = [],
    colorOpacity =[],
    viewOpacity = []

for(let i = 0; i < 12; i++) {
    xPos[i] = [100];
    colorOpacity[i] = 0.1;
    viewOpacity[i] = 0.1;
}


const sampleDrawing = (data, item, id, div, opacityUp, opacityDown, opacityMax, visSet) => {
    
    let mass;
         //average
        if(item.assemble === 'average'){
            let arr = [];
                for(let f = item.min; f <= item.max ; f++){
                    arr.push(data[f]);                                  
                }
            mass = arr.reduce((a, b) => (a + b)) / arr.length        
        }
        //maximum
        if(item.assemble === 'maximum'){
            mass = 0;
                for(let f = item.min; f <= item.max ; f++){
                   if(mass < data[f]) mass = data[f]                                 
                }                  
        }
       
        if(mass>244) mass = 244
        //target position
        if(xPos[id] < mass-item.front ){
            xPos[id] +=item.reaction
        } else if(xPos[id] > mass+item.rear+5 ) {
            xPos[id] -=item.reaction            
        }

        if(xPos[id] - item.rear < 0) xPos[id] = item.rear+5;
        if(xPos[id] + item.front > 244) xPos[id] = 240-item.front;

        //triggering
        if(mass>xPos[id]){
            colorOpacity[id] +=0.1;
            viewOpacity[id] += opacityUp;
            if(colorOpacity[id] > 1) colorOpacity[id] = 1;
            if(viewOpacity[id] > opacityMax) viewOpacity[id] = opacityMax;
        } else {
            colorOpacity[id] -=0.1;
            viewOpacity[id] -= opacityDown;
            if(colorOpacity[id] < 0) colorOpacity[id] = 0;
            if(viewOpacity[id] < 0) viewOpacity[id] = 0;
        }
        
        const channelVisDiv = document.getElementById(`view${id}`)
        if(channelVisDiv){
            switch (visSet){
                case 'none':
                    channelVisDiv.style.background = `rgba(${item.color}, ${viewOpacity[id]})`;
                break;
                case 'radialfromcenter':
                    channelVisDiv.style.background = 
                    `radial-gradient(rgba(${item.color}, ${viewOpacity[id]}), #000000)`;                
                break;
                case 'radialtocenter':
                    channelVisDiv.style.background = 
                    `radial-gradient( #000000, rgba(${item.color}, ${viewOpacity[id]}))`;                
                break;   
                case 'linearfromcentervertically':
                    channelVisDiv.style.background = 
                    `linear-gradient(to left, #000000, rgba(${item.color}, ${viewOpacity[id]}), #000000) `;              
                break;    
                case 'lineartocentervertically':
                    channelVisDiv.style.background = 
                    `linear-gradient(to left, rgba(${item.color}, ${viewOpacity[id]}), #000000, rgba(${item.color}, ${viewOpacity[id]})) `;                              
                break;  
                case 'lineartocenterhorizontally':
                    channelVisDiv.style.background = 
                    `linear-gradient(to top, rgba(${item.color}, ${viewOpacity[id]}), #000000, rgba(${item.color}, ${viewOpacity[id]})) `;                              
                break;     
                case 'linearfromcenterhorizontally':
                    channelVisDiv.style.background = 
                    `linear-gradient(to top, #000000, rgba(${item.color}, ${viewOpacity[id]}), #000000) `;              
                break; 
                default://
            } 
        }
        
        
        if ( div ){
            document.getElementById(`dr${id}`).style.left = `${xPos[id]-item.rear}px`;
            document.getElementById(`df${id}`).style.left = `${xPos[id]+item.front}px`;
            document.getElementById(`ur${id}`).style.left = `${xPos[id]-item.rear}px`;
            document.getElementById(`uf${id}`).style.left = `${xPos[id]+item.front}px`;
            document.getElementById(`in${id}`).style.left = `${xPos[id]}px`;
    
            document.getElementById(`tr${id}`).style.background = `radial-gradient(rgba(${item.color}, ${colorOpacity[id]}), #000000)`;
            
            div.style.width = `${mass}px`;             
            div.style.background = `linear-gradient(to top, #000000, rgb(${item.color}), #000000)`;   
        }
            
}

export {sampleDrawing};