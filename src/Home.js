import './App.css';
import Features from './container/features/Features';
import FAQ from './container/fqa/FAQ';
import Hero from './container/hero/Hero';

function Home() {
     return (
          <div>

               <section>
                    <Hero />
               </section>

               <section id='features' className='section'>
                    <Features />
               </section>

               <section id='faq' className='section'>
                    <FAQ />
               </section>

               <section className='section'>
                    {/* Some Usefull Links */}
               </section>

          </div>
     );
}

export default Home;
