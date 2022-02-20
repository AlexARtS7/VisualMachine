import Header from "../appHeader/Header";
import VisualDisplay from "../appVisualDisplay/VisualDisplay";
import ChannelList from "../appChannelList/ChannelList";
import LedSettings from "../appLedSettings/LedSettings";

const MainPage = () => {
 
    //sheet fixed
    window.addEventListener('scroll', function(ev) {
        const back = document.getElementById('Header');
        const compensating = document.getElementById('compensating');
        const targetA = document.getElementById('ledsheet');
        const targetB = document.getElementById('visualDisplay');
        const pos = Math.floor(back.getBoundingClientRect().top);

        if (pos <= 0) {
            targetA.className = 'ledsettings app__sheet sticky';
            targetB.className = 'app__sheet visualdisplaysheet sticky'
            compensating.style.height = '240px'
            compensating.style.width = '0'
            } else {
            targetA.className = 'ledsettings app__sheet';
            targetB.className = 'app__sheet visualdisplaysheet'
            compensating.style.height = '0'
            compensating.style.width = '0'
            }
    });

    return (
        <div >            
            <Header/>   
                <div  id='Header'></div>
                <div id='compensating'></div> 
                <div className="app__flex"> 
                    <div>                        
                        <VisualDisplay/>
                        <ChannelList/>
                    </div>
                    <div>
                        <LedSettings/>
                    </div>
                </div>            
        </div>        
    )
}

export default MainPage;