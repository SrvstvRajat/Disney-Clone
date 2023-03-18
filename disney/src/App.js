import logo from './logo.svg';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
      </Routes>
      </>
  );
}

export default App;
