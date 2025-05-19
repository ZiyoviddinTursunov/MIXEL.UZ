
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import SingPu from './pages/singUp/SingPu'
import Login from './pages/singUp/Login'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
    <Route path='/' element={<Home/>  } />
    <Route path='/login' element={<Login/>}/>
    <Route path='/singup' element={<SingPu/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
