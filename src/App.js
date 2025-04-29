


import './App.css';
import { Navigation } from './Pages/Navigationbar/Navigation';

import Devipuram from './Pages/Devipurampage/Devipuram';
import Guruji from './Pages/Gurujipage/Guruji';
import Homepage from './Pages/Homepage/Homepage';
import PoojasAndHomas from './Pages/Poojasandhomaspage/PoojasAndHomas';
// import WLight from './components/WLight';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      {/* <WLight /> */}
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
