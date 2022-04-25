import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MemeMaker from './pages/MemeMaker'
import NotesApp from './pages/NotesApp'
import DiceGame from './pages/DiceGame'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/notes-app' element={<NotesApp />} />
          <Route path='/dice-game' element={<DiceGame />} />
          <Route path='/meme-maker' element={<MemeMaker />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
