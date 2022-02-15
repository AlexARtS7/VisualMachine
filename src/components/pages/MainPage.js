import AppHeader from "../appHeader/AppHeader";
import AppVisualDisplay from "../appVisualDisplay/AppVisualDisplay";
import AppChannelList from "../appChannelList/AppChannelList";
import AppControlPanel from "../appControlPanel/AppControlPanel";

const MainPage = () => {
 
    return (
        <div>
            <AppHeader/>
            <div className="app__backsheet">
                <AppVisualDisplay/>
                <AppControlPanel/>
                <AppChannelList/>   
            </div>                            
        </div>
    )
}

export default MainPage;