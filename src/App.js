import './App.css';
import { Navigation } from './Pages/Navigationbar/Navigation';

import Devipuram from './Pages/Devipurampage/Devipuram';
import Guruji from './Pages/Gurujipage/Guruji';
import Homepage from './Pages/Homepage/Homepage';
import PoojasAndHomas from './Pages/Poojasandhomaspage/PoojasAndHomas';
// import WLight from './components/WLight';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './components/Test';
import { LogIn } from 'lucide-react';
import Login from './components/Login';
import RegisterForm from './components/RegistrationForm';
import LoginForm from './components/Login';
import { div } from 'framer-motion/client';
import AuthPage from './components/AuthPage';

function App() {
  return (
   
    <Router>
      <Navigation />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Home" element={<Homepage />} />
          <Route path="Devipuram" element={<Devipuram />} />
          <Route path="Guruji" element={<Guruji />} />
          <Route path="PoojasAndHomas" element={<PoojasAndHomas />} />
          <Route path="Signin" element={<RegisterForm />} />
          <Route path="Login" element={<LoginForm />} />
          <Route path='Authpage' element={<AuthPage />} />
        </Routes>
      </div>
    </Router>

    // <div>
    //   <RegisterForm />
    // </div>
  
  );
}

export default App;
