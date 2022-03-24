import React, { lazy, Suspense } from "react";
import Header from "../appHeader/Header";
import VisualDisplay from "../appVisualDisplay/VisualDisplay";
import ChannelList from "../appChannelList/ChannelList";

const LedSettings = lazy(() => import('../appLedSettings/LedSettings'));
const LedSettingsMini = lazy(() => import('../appLedSettingsMini/LedSettingsMini'));

const MainPage = () => {
   
    return (
        <div >            
            <Header/>   
                <div  id='Header'></div>
                <div id='compensating'></div> 
                <Suspense fallback="Loading...">
                    <div className="app__flex"> 
                        <div>                        
                            <VisualDisplay/>
                            {window.innerWidth < 1500 ? <LedSettingsMini/> : null}              
                            <ChannelList/>
                        </div>
                        <div>
                            {window.innerWidth > 1500 ? <LedSettings/> : null} 
                        </div>
                    </div>   
                </Suspense>            
        </div>        
    )
}

export default MainPage;