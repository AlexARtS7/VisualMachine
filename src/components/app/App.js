import { lazy, Suspense } from "react";
import { analyserInitiate } from "../../services/appProcessor";

const MainPage = lazy(() => import('../pages/MainPage'));

analyserInitiate();

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

