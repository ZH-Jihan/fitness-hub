import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home/Home';
import Navbar from './Component/Nevbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
