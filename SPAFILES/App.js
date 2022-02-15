import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
  <>
    <Navbar />
    <Header />
    <div className='container'>
      <Routes>

      </Routes>
    </div>
    <Footer />
  </>
  );
}

export default App;
