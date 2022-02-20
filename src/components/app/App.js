import { lazy, Suspense } from "react";
import { useSelector } from "react-redux"
import { analyserInitiate } from "../../services/appProcessor";

const MainPage = lazy(() => import('../pages/MainPage'));
const FSPage = lazy(() => import('../pages/FSPage'));

analyserInitiate();

const App = () => {
  const fullScreen = useSelector(state => state.fullScreen)

  return (
    <div className="app">
        <main>
            <Suspense fallback="Loading...">
              {fullScreen === 0 ? <MainPage/> : <FSPage/>}              
            </Suspense>                   
        </main>      
    </div>
  );
}

export default App;