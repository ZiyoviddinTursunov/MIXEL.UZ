
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import SingPu from './pages/singUp/SingUp'
import Login from './pages/login/Login'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
    <Route path='/' element={<Home/>  } />
    <Route path='/singup' element={<SingPu/>}/>
    <Route path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
