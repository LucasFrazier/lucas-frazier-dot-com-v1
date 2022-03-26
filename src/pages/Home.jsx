import './Home.css';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Work from '../components/Work';

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <Services />
      <Work />
      <About />
    </div>
  );
}
