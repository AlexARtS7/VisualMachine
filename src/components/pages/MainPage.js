import AppHeader from "../appHeader/AppHeader";
import AppVisualDisplay from "../appVisualDisplay/AppVisualDisplay";
import AppChannelVisualDisplay from "../appChannelVisualDispley/AppChannelVisualDisplay";
import AppChannelList from "../appChannelList/AppChannelList";
import AppControlChannelsPanel from "../appControlChannelsPanel/AppControlChannelsPanel";

const MainPage = () => {
 
    return (
        <div>
            <AppHeader/>
                <div className="backsheet flex">
                    <div>
                        <AppVisualDisplay/>
                        {/* <AppControlChannelsPanel/> */}
                        <AppChannelList/>
                    </div>                        
                        <AppChannelVisualDisplay/>
                </div>                            
        </div>
    )
}

export default MainPage;