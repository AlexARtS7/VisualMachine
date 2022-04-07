import { canvasRender, canvasDraw } from "../services/appDisplayDrawingProcessor";
import { sampleDrawing } from "./appSampleDrawingProcessor";
import store from '../store/store';

var analyser,
    renderColor,
    rate,
    suppression,
    peaksStatus,
    fillStatus,
    channels,
    src,
    ctx = null,
    pause = 0,
    opacityUp = 0.5,
    opacityDown = 0.1, 
    opacityMax = 1,
    hrefInit,
    initHref,
    onceStartRender = true,
    visSet = 'radialfromcenter',
    data = new Uint8Array(1024);

function initState() {
    renderColor = store.getState().renderColor
    rate = store.getState().rate
    suppression = store.getState().suppression
    peaksStatus = store.getState().peaksStatus
    fillStatus = store.getState().fillStatus
    opacityUp = store.getState().opacityUp
    opacityDown = store.getState().opacityDown
    opacityMax = store.getState().opacityMax
    hrefInit = store.getState().hrefInit
    initHref = store.getState().initHref
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
        {/Permission denied by system/.test(error) && alert('Нет прав доступа к микрофону или устройству ввода в Вашей системе. Дайте разрешение на использование устройств ввода для сайта для продолжения работы.  Система > Звук > Ввод > Параметры конфиденциальности микрофона.')}        
        setTimeout(() => {
            analyserInitiate();
        }, 10000)        
    });
}

function canvasReinit(){
    onceStartRender = true;    
}

function appProceccor() {
    requestAnimationFrame(appProceccor)
    if(ctx && hrefInit === initHref) {
        analyser.getByteFrequencyData(data);
    }

    if(pause === 0 && hrefInit === initHref){
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
   
    if( document.getElementById('canvasDisplay')  && hrefInit === initHref ){
        if(onceStartRender) {canvasRender();onceStartRender = false;}
        if(data) canvasDraw(data, rate, fillStatus, renderColor, peaksStatus, hrefInit, initHref, suppression);
    }  
    
    const back = document.getElementById('Header');
    if(back){
    const compensating = document.getElementById('compensating');
    const targetA = document.getElementById('ledsheet');
    const targetAA = document.getElementById('ledsheetmini');
    const targetB = document.getElementById('visualDisplay');
    const pos = Math.floor(back.getBoundingClientRect().top);

    if (pos <= 0) {
        if(targetA) targetA.className = 'ledsettings app__sheet sticky';
        if(targetAA) targetAA.className = 'ledsettingsmini app__sheet stickymini';
        if(targetB) targetB.className = 'app__sheet visualdisplaysheet sticky'
        compensating.className = 'compensating'
        } else {
        if(targetA) targetA.className = 'ledsettings app__sheet';
        if(targetAA) targetAA.className = 'ledsettingsmini app__sheet';
        if(targetB)targetB.className = 'app__sheet visualdisplaysheet'
        compensating.className = ''
        }
    }
}

export { appProceccor, initState, analyserInitiate, canvasReinit };
