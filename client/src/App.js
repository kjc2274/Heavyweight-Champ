import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Difficulty from './components/Difficulty';
import NewChallenger from './components/NewChallenger';
import CustomOpponents from './components/CustomOpponents';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/select" element={<Difficulty/>}/>
        <Route path="/create-fighter" element={<NewChallenger/>}/>
        <Route path="/fighters" element={<CustomOpponents/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
