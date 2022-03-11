import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MemeGenerator from './pages/MemeGenerator'
import Notes from './pages/Notes'
import Tenzies from './pages/Tenzies'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="/tenzies" element={<Tenzies />} />
          <Route path="/meme-generator" element={<MemeGenerator />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
