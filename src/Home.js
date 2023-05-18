import { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';
import Features from './container/features/Features';
import FAQ from './container/fqa/FAQ';
import Hero from './container/hero/Hero';

function Home() {
     const [openModal, setOpenModal] = useState(false)
     function handleModal() {
          setOpenModal(true)
        }


     return (
          <div>

               <Modal open={openModal} close={() => setOpenModal(false)} />

               <section>
                    <Hero handleModal={handleModal} />
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
