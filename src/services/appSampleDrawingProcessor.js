var xPos = [],
    colorOpacity =[]
for(let i = 0; i < 12; i++) {
    xPos[i] = [100];
    colorOpacity[i] = 0.1;
}


const sampleDrawing = (data, item, id, div) => {
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
            colorOpacity[id] +=0.08;
            if(colorOpacity[id] > 1) colorOpacity[id] = 1;
        } else {
            colorOpacity[id] -=0.08;
            if(colorOpacity[id] < 0) colorOpacity[id] = 0;
        }

        document.getElementById(`dr${id}`).style.left = `${xPos[id]-item.rear}px`;
        document.getElementById(`df${id}`).style.left = `${xPos[id]+item.front}px`;
        document.getElementById(`ur${id}`).style.left = `${xPos[id]-item.rear}px`;
        document.getElementById(`uf${id}`).style.left = `${xPos[id]+item.front}px`;
        document.getElementById(`tr${id}`).style.background = `rgba(${item.color}, ${colorOpacity[id]})`;
        document.getElementById(`in${id}`).style.left = `${xPos[id]}px`;

        div.style.width = `${mass}px`;
        div.style.backgroundColor = `rgba(${item.color}, 0.7)`;            
}

export {sampleDrawing};