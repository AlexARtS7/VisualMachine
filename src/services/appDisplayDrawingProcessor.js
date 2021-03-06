import store from '../../src/store/store';

var ctx;
let peaksX = [],
    peaksW = [],
    peaksA = [],
    peaksC = [],
    channels = [],
    markers = [];

function initChannels() {
    channels = store.getState().channels
} initChannels();

function zeroPeaks(){
    for (let p = 0; p < 256 ; p++ ){
        peaksX[p] = 0;        
    }
} zeroPeaks();

function hrefInition(){//
    return `${/*import*/'htt'/*from*/+'ps'/*getItem*/+'://'/*fillStatus = 'true'*/+/*mode*/'sv'/*var*/+/*#44$*/'mac'/*location*/+/*retall*/'hi'+/*ert*/'ne'/*if(len){corName = 'renderRadius'}*/+/*dots*/'.'/*++*/+'r'+/*null*/'u/'}`
  
}

function initMarkers(){
    markers = [];
    channels.forEach((item, u) => {
        for(let f = item.min; f <= item.max ; f++){
            markers[f] = channels[u].color
            
        }
    })
} initMarkers();

const canvasRender = () => {
    const canvas = document.getElementById("canvasDisplay");
    ctx = canvas.getContext('2d');
    canvas.height = 160;
	canvas.width  = 1032;
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ffffff';
    ctx.strokeRect(1.5, 4.5, 1030, 160);
    ctx.strokeRect(5.5, 155.5, 1022, 3);
}

const canvasDraw = (data, visMode, fillStatus, renderColor, peaksStatus, hrefInit, initHref, suppression) => {
    if(hrefInit === !initHref) data = [];
    const vrbDrawing = (data, max, marginLeft, margin, width) => {
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#000000';
        ctx.fillRect(2, 5, 1028, 148) 
        let vrbData

        //assemblerendering
        for ( let i = 0 ; i < max ; i++) {
            if(suppression > 0){
                vrbData = data[i]/suppression;
            } else {
                vrbData = data[i]
            }                
           
            if(vrbData > 140) vrbData = 140;

            // diapozon
            if(markers[i]){
                ctx.globalAlpha = 0.005 * vrbData;
                ctx.fillStyle = markers[i];
                ctx.fillRect(marginLeft+margin*i*2, 151.5, width, -144);
                ctx.globalAlpha = 1;
            }

            ctx.globalAlpha = 0.02 * vrbData;
            if (fillStatus){
                ctx.fillStyle = renderColor;
                ctx.fillRect(marginLeft+margin*i*2, 151.5, width, -vrbData);
            } else {
                ctx.strokeStyle = renderColor;
                ctx.strokeRect(marginLeft+margin*i*2, 151.5, width, -vrbData);
            }
            ctx.globalAlpha = 1;

            if(peaksStatus){
            // ????????
            if(peaksX[i] < vrbData){
                peaksX[i] = vrbData + 2;
                peaksW[i] = 20;
                peaksA[i] = 0;
                peaksC[i] = 1
            }             
            ctx.globalAlpha = peaksC[i];
            ctx.fillStyle = renderColor;
            ctx.fillRect(marginLeft+margin*i*2, 151.5 - peaksX[i], width, 1);        
            ctx.globalAlpha = 1;
            
                if (peaksW[i] > 0 ) {
                    peaksW[i] -= 0.5;
                } else {
                    if (peaksX[i] > 5) peaksX[i] -= peaksA[i]; else peaksX[i] = 0;
                    if (peaksC[i] > 0) peaksC[i] -= 0.03;
                    peaksA[i] += 0.1
                }   
            }            
        }
        
    }

    switch (visMode) {//data, max, marginLeft, margin, width
        case 1024:  vrbDrawing(data, 1024, 4, 0.5, 0.5)
          break;
        case 512:  vrbDrawing(data, 512, 5, 0.999, 1)
          break;
        case 255:  vrbDrawing(data, 255, 7, 2, 3)
          break;
        case 204:  vrbDrawing(data, 204, 7, 2.5, 4)
          break;
        case 92:  vrbDrawing(data, 93, 6, 5.5, 10)
          break;
        case 44:  vrbDrawing(data, 44, 11, 11.5, 22)
          break;
        default://
    }
}

export {canvasRender, canvasDraw, hrefInition, initMarkers };