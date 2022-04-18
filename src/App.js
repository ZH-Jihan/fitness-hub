import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkous from './Component/Checkout/Checkous';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import Navbar from './Component/Nevbar/Navbar';
import RequireAuth from './Component/RequarAuth/RequarAuth';
import SingUp from './Component/SingUp/SingUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkous></Checkous>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
