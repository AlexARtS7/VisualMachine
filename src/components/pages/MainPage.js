import AppHeader from "../appHeader/AppHeader";
import AppVisualDisplay from "../appVisualDisplay/AppVisualDisplay";
import AppChannelList from "../appChannelList/AppChannelList";

const MainPage = () => {
 
    return (
        <div>
            <AppHeader/>
            <div className="app__backsheet">
                <AppVisualDisplay/>
                <AppChannelList/>   
            </div>                            
        </div>
    )
}

export default MainPage;