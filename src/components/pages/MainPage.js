import { lazy, Suspense } from "react";
import Header from "../appHeader/Header";
import VisualDisplay from "../appVisualDisplay/VisualDisplay";
import ChannelList from "../appChannelList/ChannelList";

const LedSettings = lazy(() => import('../appLedSettings/LedSettings'));
const LedSettingsMini = lazy(() => import('../appLedSettingsMini/LedSettingsMini'));

const MainPage = () => {
 
    //sheet fixed
    window.addEventListener('scroll', function(ev) {
        const back = document.getElementById('Header');
        if(back){
        const compensating = document.getElementById('compensating');
        const targetA = document.getElementById('ledsheet');
        const targetAA = document.getElementById('ledsheetmini');
        const targetB = document.getElementById('visualDisplay');
        const pos = Math.floor(back.getBoundingClientRect().top);

        if (pos <= 0) {
            targetA.className = 'ledsettings app__sheet sticky';
            targetAA.className = 'ledsettingsmini app__sheet stickymini';
            targetB.className = 'app__sheet visualdisplaysheet sticky'
            compensating.className = 'compensating'
            } else {
            targetA.className = 'ledsettings app__sheet';
            targetAA.className = 'ledsettingsmini app__sheet';
            targetB.className = 'app__sheet visualdisplaysheet'
            compensating.className = ''
            }
        }        
    });

    return (
        <div >            
            <Header/>   
                <div  id='Header'></div>
                <div id='compensating'></div> 
                <Suspense fallback="Loading...">
                    <div className="app__flex"> 
                        <div>                        
                            <VisualDisplay/>
                                <div className='ledtype-2'>
                                    <LedSettingsMini/>
                                </div>
                            <ChannelList/>
                        </div>
                        <div  className='ledtype-1'>
                            <LedSettings/>
                        </div>
                    </div>   
                </Suspense>            
        </div>        
    )
}

export default MainPage;