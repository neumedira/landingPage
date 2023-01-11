import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Layanan from './components/Layanan';
import Bisnis from './components/Bisnis';
import Pilih from './components/Pilih';
import About from './components/About';
import Footer from "./components/Footer";
import Jasa from './components/Jasa';

function App() {
  return (
    <>
      <div className='myBG'>
        <Navbar />
        <Hero />
      </div>

      <div className='lBG'>
        <Layanan />
      </div>

      <div className='rBG'>
        <Bisnis/>
      </div>

      <div className='lBG'>
        <Pilih/>
      </div>

      <div>
        <About/>
      </div>

      <div>
        <Jasa />
      </div>

      <div className='fBG'>
        <Footer />
      </div>

    </>
  );
}

export default App;
