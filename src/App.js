import './App.css';
import Navbar from './components/navbar/Navbar';
import Features from './container/features/Features';
import Footer from './container/footer/Footer';
import FAQ from './container/fqa/FAQ';
import Hero from './container/hero/Hero';

function App() {
     return (
          <div>

               <header>
                    <Navbar />
                    <Hero />
               </header>

               <section id='features' className='section'>
                    <Features />
               </section>

               <section id='faq' className='section'>
                    <FAQ />
               </section>

               <section className='section'>
                    {/* Some Usefull Links */}
               </section>

               <footer >
                    <Footer />
               </footer>

          </div>
     );
}

export default App;
