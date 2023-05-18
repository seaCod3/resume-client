import React from 'react'
import './modal.css'
import modalImage from './rsume.svg';
import Textfield from '../form/text-field';
import { Form, Formik } from 'formik';

const Modal = ({ open, close }) => {
  if (!open) return null;
  return (
    <div className='overlay' onClick={close}>
      <div className='modalContainer' onClick={(e) => { e.stopPropagation() }}>
        <img src={modalImage} alt='modal' />
        <div className='modalContent'>
          <p onClick={close} className='closeBtn'>X</p>
          <h2>Almost There.</h2>
          <h6>Please provide us with your email!</h6>
          <p></p>

          <Formik>
            <Form>
              <Textfield
                name='email'
                label=''
                variant={'standard'}
               />

            </Form>
          </Formik>



        </div>
      </div>
    </div>
  )
}

export default Modal
