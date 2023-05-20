import React, { useRef } from 'react'
import './modal.css'
import { MdClose } from "react-icons/md";
import modalImage from './rsume.svg';
import Textfield from '../form/text-field';
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import { FaCopy } from "react-icons/fa";
const Modal = ({ open, close }) => {

  const [key, setKey] = React.useState([]);

  const resultRef = useRef(null);

  const handleCopyClick = () => {
    if (resultRef.current) {
      navigator.clipboard.writeText(resultRef.current.textContent)
        .then(() => alert('Copied to clipboard'))
        .catch(err => console.error('Failed to copy:', err));
    }
  }

  const initialValues = {
    email: '',
  }

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  })


  if (!open) return null;
  return (
    <div className='overlay' onClick={close}>
      <div className='modalContainer' onClick={(e) => { e.stopPropagation() }}>
        <di className='image'>
          <img src={modalImage} alt='modal' />

        </di>
        <div className='modalContent'>

          <p onClick={close} className='closeBtn'><MdClose color="#023642" size={30} /></p>
          <h2>Almost There.</h2>
          <h6>Please provide us with your email!</h6>
          <p>By providing us with your email, you will receive a key that will be associated with your account, and you will be able to edit your resume for up to 30 days until your account is removed.
            We advise you to keep this key in a safe place</p>

          <Formik
            initialValues={{ ...initialValues }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              setKey([values.email]);
              console.log(key)
            }}
          >
            <Form className='contend-flex'>

              <div className='textfiels-Wrapper'>
                <Textfield
                  name='email'
                  label=''
                  variant={'standard'}
                  placeholder={'example@email.com'}
                  autoComplete='off'
                />
              </div>


              <button type='submit' className='btn btn-secondary'>Submit</button>

            </Form>
          </Formik>

          
           {/* {key.map((item) => (
            <div className='result' key={item}>
              {item}
              <FaCopy color="#fff" size={20} />
            </div>
          ))} */}

          <div className='results-section'>
          {key.map((item) => (
            <div className='result' key={item} ref={resultRef}>
              {item}
              <FaCopy color="#fff" size={20} onClick={handleCopyClick} />
            </div>
          ))}
        </div>
          

        </div>
      </div>
    </div>
  )
}

export default Modal
