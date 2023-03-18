import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import { Routes, Route, Link, Navigate} from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Detail from './pages/Detail';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import UserPage from './pages/UserPage';

function App() {
  // redirect 페이지 보호 
  const [authenticate, setAuthenticate] = useState(false);


  const PrivateRoute = () => {
    // Navigate는 컴포넌트임 리다이렉트 도와주는 
    return authenticate == true ? <UserPage/> : <Navigate to='/login' />
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/product' element={<ProductPage/>}></Route>
        <Route path='/product/:id'element={<Detail/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        
        <Route path='/user' element={<PrivateRoute/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
