import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Home/>
    <Routes>
    <Route path="/home" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
