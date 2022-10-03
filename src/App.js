import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    
    <Router>
      {/* 
      <Login/> */}
    <div>
      <Header/>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* <Route path="/" element={<Carousel />}></Route> */}
        {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
