import { canvasRender, canvasDraw } from "../services/appDisplayDrawingProcessor";
import { sampleDrawing } from "./appSampleDrawingProcessor";
import store from '../store';

if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log("Let's get this party started")
  }

var analyser,
    renderColor,
    rate,
    peaksStatus,
    fillStatus,
    channels,
    src,
    ctx = null,
    pause = 0, 
    onceStartRender = true,
    data = new Uint8Array(256);

function initState() {
    renderColor = store.getState().renderColor
    rate = store.getState().rate
    peaksStatus = store.getState().peaksStatus
    fillStatus = store.getState().fillStatus
    channels = store.getState().channels
} initState();

function analyserInitiate(){
    if(ctx) return;

    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {
        ctx = new AudioContext();
        analyser = ctx.createAnalyser();
        src = ctx.createMediaStreamSource(stream);
        src.connect(analyser);
        appProceccor();
    }).catch(error => {    
        alert(error + '\r\n\ Отклонено.');
        analyserInitiate();
        console.log('ok')
    });
}

function appProceccor() {
    requestAnimationFrame(appProceccor)
    if(ctx) {
        analyser.getByteFrequencyData(data);
    }
    
    if(pause === 0){
        analyserInitiate();
        pause = 30;
    } else if(pause < 100) {
        if(data[0] > 0) {
            pause = 200
        };
        pause -= 1;
    }
    
    if( document.getElementById('canvasDisplay') ){
        if(onceStartRender) {canvasRender();onceStartRender = false;}
        if(data) canvasDraw(data, rate, fillStatus, renderColor, peaksStatus);
    }

    channels.forEach((item, i) => {
        const div = document.getElementById(`div${i}`);
        if( div ){
            sampleDrawing(data, item, i, div);
        }
    })
}

export { appProceccor, initState, analyserInitiate };
