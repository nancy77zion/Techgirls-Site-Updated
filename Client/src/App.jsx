
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Faq from './pages/Faq'
import About from './pages/About'
import ErrorPage from './components/ErrorPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './components/ProtectedRoutes'
import {BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SharedRoute from './components/SharedRoutes'



function App() {

  return (
      <BrowserRouter>
        <Routes>
      <Route path={'/'} element={<SharedRoute />}>
        <Route index element={<Home />} />
        <Route path={'signup'} element={<SignUp />} />
        <Route path={'login'} element={<Login />} />
        <Route path={'About'} element={<About />} />
        <Route path={'faqs'} element={<Faq/>} />
        <Route element={<ProtectedRoutes />} >
          <Route path={'dashboard'} element={<Dashboard/>} />
        </Route>
      </Route>
      <Route path={'*'} element={<ErrorPage />} />
    </Routes>
      </BrowserRouter>
      
    
  )
}

export default App