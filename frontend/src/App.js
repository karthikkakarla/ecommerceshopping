import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import oral_banner from './Components/Assets/banner_oral.jpg'
import hair_banner from './Components/Assets/banner_hair.jpeg';
import body_banner from './Components/Assets/banner_body.jpeg';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/oral' element={<HomeCategory banner={oral_banner} category ="oral"/>}/>
            <Route path ='/hair' element={<HomeCategory banner={hair_banner} category ='hair'/>}/>
            <Route path ='/body' element={<HomeCategory banner={body_banner} category='body'/>}/>
            <Route path='/product' element={<Product />} >
              <Route path=':productId' element={<Product />}/>
            </Route>
            <Route path ='/cart' element={<Cart />} />
            <Route path ='/login' element={<LoginSignup />} />
           </Routes>  
           <Footer />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
