import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/Avout/About';
import Blogs from './Component/Blog/Blog';
import Checkout from './Component/Checkout/Checkous';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import Navbar from './Component/Nevbar/Navbar';
import Notfound from './Component/Notfound/Notfound';
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
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
