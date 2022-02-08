import { lazy, Suspense } from "react";
import { appProceccor } from "../../services/appProcessor";

const MainPage = lazy(() => import('../pages/MainPage'));

appProceccor();

const App = () => {
  return (
    <div className="app">
        <main>
            <Suspense fallback="Loading...">
              <MainPage/>
            </Suspense>                   
        </main>      
    </div>
  );
}






export default App;

