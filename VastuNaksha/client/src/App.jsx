import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DirectionAnalysis from './pages/DirectionAnalysis';
import Brochure from './pages/Brochure';
import Contact from './pages/Contact';
import AdminPanel from './admin/AdminPanel';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check-direction" element={<DirectionAnalysis />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
