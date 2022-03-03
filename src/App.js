import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  );
}
