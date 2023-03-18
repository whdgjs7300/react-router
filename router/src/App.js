import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import { Routes, Route, Link} from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/product' element={<ProductPage/>}></Route>
        <Route path='/product/:id'element={<Detail/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
