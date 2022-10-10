import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/Signup';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Gallery from './components/Gallery';
import Services from './components/Services';
import About from './components/About';
import { Context } from "./context.js"
import { useEffect, useState } from 'react';

function App() {
  const [mode, setMode] = useState(false);
  const data = {
    mode, setMode
  }
  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  })
  return (
    <Context.Provider value={data}>
      <Router>
        <div >
          <Header />
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Carousel />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/connect" element={<Footer />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
