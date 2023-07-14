import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { FaCopy } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { VscCheckAll } from "react-icons/vsc";
import * as Yup from "yup";
import { i18n } from '../../translate/i18n';
import Textfield from '../form/text-field';
import './Modal.css';
import modalImage from './resume.svg';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function ResponsiveDialog() {
    const [open, setOpen] = React.useState(false);
    const [key, setKey] = React.useState([]);
    const [isCopied, setIsCopied] = React.useState(false);
    const resultRef = React.useRef(null);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCopyClick = () => {
        if (resultRef.current) {
            navigator.clipboard.writeText(resultRef.current.textContent)
        }
        setIsCopied(true);
    }

    const initialValues = {
        email: '',
    }

    const FORM_VALIDATION = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
    })



    React.useEffect(() => {
        let timeoutId;

        if (isCopied) {
            timeoutId = setTimeout(() => {
                setIsCopied(false);
            }, 2000);       // change the icon back to FaCopy after 3 seconds
        }

        return () => clearTimeout(timeoutId);
    }, [isCopied]);


    return (
        <div>
            <Button className='btn btn-primary hero-btn' onClick={handleClickOpen}>
                {i18n.t('hero.mainButton')}
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                maxWidth="md"
            >
                <DialogContent sx={{ padding: 0, paddingRight: 2, paddingLeft: 2 }} >
                    <div className='row'>
                        <div className='col-12 col-sm-5 image'>

                            <img src={modalImage} alt='Modal' />

                        </div>

                        <div className='col-12 col-sm-7 content'>
                            <p style={{ textAlign: 'right', cursor: 'pointer', margin: '0px' }}>
                                <MdClose onClick={handleClose} color="#023642" size={30} />
                            </p>
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

                                    <div className='textfield-Wrapper'>
                                        <Textfield
                                            name='email'
                                            label=''
                                            variant={'standard'}
                                            placeholder={'example@email.com'}
                                            autoComplete='off'
                                            className='textfield'
                                        />
                                    </div>

                                    <div>
                                        <button type='submit' className='btn btn-secondary'>{i18n.t('modal.button')}</button>

                                    </div>


                                </Form>
                            </Formik>

                            <div className='results-section'>
                                {key.map((item) => (
                                    <div className='result' key={item} ref={resultRef} style={{ cursor: 'pointer' }}>
                                        {item}

                                        {isCopied === true ? (
                                            <div className='copied-button'>
                                                <span>{i18n.t('modal.copied')}</span><VscCheckAll color="#fff" size={22} />
                                            </div>
                                        ) : (
                                            <FaCopy color="#fff" size={20} onClick={handleCopyClick} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}