import {Route,Routes} from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Detail from './Components/Detail';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail/:id'element={<Detail/>}/>
      </Routes>
      </>
  );
}

export default App;
