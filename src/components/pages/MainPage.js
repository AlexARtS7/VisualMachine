import Header from "../appHeader/Header";
import VisualDisplay from "../appVisualDisplay/VisualDisplay";
import ChannelList from "../appChannelList/ChannelList";
import ControlPanel from "../appControlPanel/ControlPanel";
import LedSettings from "../appLedSettings/LedSettings";

const MainPage = () => {
 
    return (
        <div>
            <Header/>
                <div id='backsheet' className="app__backsheet app__flex">     
                    <div>
                        <VisualDisplay/>
                        <ControlPanel/>
                        <ChannelList/>
                    </div>
                    <div style={{'width': '100%'}}>
                        <LedSettings/>
                    </div>
                </div>
                
        </div>
        
    )
}

export default MainPage;