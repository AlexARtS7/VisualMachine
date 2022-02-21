import { lazy, Suspense } from "react";
import { useSelector } from "react-redux"
import { analyserInitiate } from "../../services/appProcessor";
import { useState } from "react";

const MainPage = lazy(() => import('../pages/MainPage'));
const FSPage = lazy(() => import('../pages/FSPage'));
const StartModal = lazy(() => import('../appStartModal/StartModal'));

analyserInitiate();

const App = () => {
  const fullScreen = useSelector(state => state.fullScreen)
  const startWindowsShow = localStorage.getItem('startWindowShow')  === 'false' ? false : true  
  const [showModal, setShowModal] = useState(startWindowsShow)
  

  const closeModal = (checked) => {
    setShowModal(false)
    if(checked){
      localStorage.setItem('startWindowShow', false)
    }
  }

  return (
    <div className="app">
        <main className={fullScreen === 0 ? 'wrapper': null}>
            <Suspense fallback="Loading...">
              {fullScreen === 0 ? <MainPage/> : <FSPage/>} 
              {showModal ? <StartModal closeModal={closeModal}/> : null} 
            </Suspense>                   
        </main>      
    </div>
  );
}

export default App;