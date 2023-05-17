import { Form, Formik } from 'formik';
import './App.css';
import Textfield from './components/form/text-field';
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
                    <Formik>
                         <Form>
                              <Textfield name={'firstName'} label={'First Name'} />
                         </Form>
                    </Formik>
               </section>

               <section className='section'>
                    {/* Some Usefull Links */}
               </section>

          </div>
     );
}

export default Home;
