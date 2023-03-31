import './App.css';
import Navbar from './componants/Navbar';
import Home from './pages/Home';
import Footer from './componants/Footer';
import Menu from './pages/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Routes} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar  />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/menu" element={< Menu />} />
          <Route path="/about" element={< About />} />
          <Route path="/contact" element={< Contact />} />
        </Routes>
        <Footer/>
      </Router>
     

    </div>
  );
}

export default App;
