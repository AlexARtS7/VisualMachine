import { canvasRender, canvasDraw } from "../services/appDisplayDrawingProcessor";
import { sampleDrawing } from "./appSampleDrawingProcessor";
import store from '../store/store';

if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log("Let's get this party started")
  }

var analyser,
    renderColor,
    hrefInit,
    hrefinit,
    rate,
    peaksStatus,
    fillStatus,
    channels,
    src,
    ctx = null,
    count = 0,
    pause = 0,
    opacityUp = 0.05,
    opacityDown = 0.01, 
    opacityMax = 1,
    onceStartRender = true,
    visSet = 'radialfromcenter',
    data = new Uint8Array(256);

function initState() {
    renderColor = store.getState().renderColor
    rate = store.getState().rate
    peaksStatus = store.getState().peaksStatus
    fillStatus = store.getState().fillStatus
    opacityUp = store.getState().opacityUp
    hrefInit = store.getState().hrefInit
    hrefinit = store.getState().hrefinit
    opacityDown = store.getState().opacityDown
    opacityMax = store.getState().opacityMax
    visSet = store.getState().visSet
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

function canvasReinit(){
    onceStartRender = true;    
}

function appProceccor() {
    requestAnimationFrame(appProceccor)
    if(ctx) {
        analyser.getByteFrequencyData(data);
    }
    
    if(count < 10000){
        count += 1;
        
    } else if (hrefinit === null){
        alert('ВНИМАНИЕ! Адрес сайта не корректен! Перейдите на svmachine.ru для продолжения работы.'); count = 0; ctx = null}

    if(pause === 0){
        analyserInitiate();
        pause = 30;
    } else if(pause < 100) {
        if(data[0] > 0) {
            pause = 200
        };
        pause -= 1;
    }    
   
    channels.forEach((item, i) => {        
        const div = document.getElementById(`div${i}`);
            sampleDrawing(data, item, i, div, opacityUp, opacityDown, opacityMax, visSet);
    })

    if( document.getElementById('canvasDisplay') && hrefInit === hrefinit ){
        if(onceStartRender) {canvasRender();onceStartRender = false;}
        if(data) canvasDraw(data, rate, fillStatus, renderColor, peaksStatus);
    }    
}

export { appProceccor, initState, analyserInitiate, canvasReinit };
