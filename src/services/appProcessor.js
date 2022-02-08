import { canvasRender, canvasDraw } from "../components/appVisualDisplay/appDisplayDrawingProcessor";
import store from '../store';

var analyser,
    src,
    ctx = null,
    pause = 0, 
    onceStartRender = true,
    data = new Uint8Array(256);

let renderColor,
    rate,
    peaksStatus,
    fillStatus

function initState() {
    renderColor = store.getState().renderColor
    rate = store.getState().rate
    peaksStatus = store.getState().peaksStatus
    fillStatus = store.getState().fillStatus
} initState();


function appProceccor() {
    requestAnimationFrame(appProceccor)
    if(ctx) {
        analyser.getByteFrequencyData(data);
    }
       
    if(pause === 0){
        analyserInitiate();
        pause = 30;
        // console.log('init')
    } else if(pause < 100) {
        if(data[0] > 0) {
            pause = 200
            // console.log('init ok')
        };
        pause -= 1;
    }
    
    if( document.getElementById('canvasDisplay')){
        if(onceStartRender) {canvasRender();onceStartRender = false;}
        if(data) canvasDraw(data, rate, fillStatus, renderColor, peaksStatus);
    }
}

const analyserInitiate = () => {
    ctx = new AudioContext();
    analyser = ctx.createAnalyser();
    
    navigator.getUserMedia = (navigator.getUserMedia || 
    navigator.webkitGetUserMedia || 
    navigator.mozGetUserMedia || 
    navigator.msGetUserMedia);

    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {
        src = ctx.createMediaStreamSource(stream);
        src.connect(analyser);
    }).catch(error => {    
        alert(error + '\r\n\ Отклонено.');
    });
}

export { appProceccor, initState, analyserInitiate };
