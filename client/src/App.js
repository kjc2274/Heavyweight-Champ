import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import NewChallenger from './components/NewChallenger';
import CustomOpponents from './components/CustomOpponents';
import BoxingRing from './components/BoxingRing';
import Victory from './components/Victory';
import Defeat from './components/Defeat';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/create-fighter" element={<NewChallenger/>}/>
        <Route path="/fighters" element={<CustomOpponents/>}/>
        <Route path="/ring/:id" element={<BoxingRing/>}/>
        <Route path="/victory" element={<Victory/>}/>
        <Route path="defeat" element={<Defeat/>}/>
      </Routes>
      <ToastContainer theme='dark'/>
    </div>
  );
}

export default App;
