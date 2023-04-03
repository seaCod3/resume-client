import './App.css';
import Navbar from './components/navbar/Navbar';
import Features from './container/features/Features';
import FAQ from './container/fqa/FAQ';

function App() {
     return (
          <div>

               <header>
                    <Navbar />
               </header>

               <section className='section'>
                    <Features />
               </section>

               <section className='section'>
                    <FAQ />
               </section>

               <section className='section'>
                    {/* Some Usefull Links */}
               </section>

               <footer>
                    {/* Footer */}
               </footer>

          </div>
     );
}

export default App;
