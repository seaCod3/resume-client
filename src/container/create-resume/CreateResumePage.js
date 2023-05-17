import { Form, Formik } from 'formik';
import React from 'react';
import Textfield from '../../components/form/text-field';
import DatePickers from '../../components/form/date-picker';

const CreateResumePage = () => {

  return (

    <section className='container section'>
      <Formik>
        <Form>
          <Textfield name={'firstName'} label={'First Name'} />
          <DatePickers name={'dateOfBirth'} label={'Date of Birth'} />
        </Form>
      </Formik>
    </section>

  )

}

export default CreateResumePage;