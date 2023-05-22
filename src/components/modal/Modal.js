import React, { useRef } from 'react'
import './modal.css'
import { MdClose } from "react-icons/md";
import modalImage from './rsume.svg';
import Textfield from '../form/text-field';
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import { FaCopy } from "react-icons/fa";
import { VscCheckAll } from "react-icons/vsc";
import { i18n } from '../../translate/i18n';
const Modal = ({ open, close }) => {

  const [key, setKey] = React.useState([]);
  const [isCopied, setIsCopied] = React.useState(false);

  const resultRef = useRef(null);

  const handleCopyClick = () => {
    if (resultRef.current) {
      navigator.clipboard.writeText(resultRef.current.textContent)
        // .then(() => alert('Copied to clipboard'))
        // .catch(err => console.error('Failed to copy:', err));
    }
    setIsCopied(true);
  }

  React.useEffect(() => {
    let timeoutId;

    if (isCopied) {
      timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, 3000); // change the icon back to FaCopy after 3 seconds
    }

    return () => clearTimeout(timeoutId);
  }, [isCopied]);

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
          <h2>{i18n.t('modal.title')}</h2>
          <h6>{i18n.t('modal.subtitle')}</h6>
          <p>{i18n.t('modal.content')}</p>

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


              <button type='submit' className='btn btn-secondary'>{i18n.t('modal.button')}</button>

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
                {isCopied ? (
                  <VscCheckAll color="#fff" size={20} />
                ) : (
                  <FaCopy color="#fff" size={20} onClick={handleCopyClick} />
                )}
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  )
}

export default Modal
