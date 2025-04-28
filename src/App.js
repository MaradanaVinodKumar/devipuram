

import './App.css';
import Devipuram from './components/Devipuram';
import Guruji from './components/Guruji';
import Homepage from './components/Homepage';
import PoojasAndHomas from './components/PoojasAndHomas';
import WLight from './components/WLight';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <WLight />
      <Routes>
        <Route  path="/" element={<Homepage />} />
        <Route path="Home" element={<Homepage />} />
        <Route path="Devipuram" element={<Devipuram />} />
        <Route path="Guruji" element={<Guruji/>} />
        <Route path="PoojasAndHomas" element={<PoojasAndHomas />} />
      </Routes>
    </Router>
  );
}

export default App;
