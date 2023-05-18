import { Form, Formik } from 'formik';
import React from 'react';
import Textfield from '../../components/form/text-field';
import DatePickers from '../../components/form/date-picker';
import { Divider, Grid } from '@mui/material';
import education from '../../assets/images/education.svg';
import certification from '../../assets/images/certication.svg';
import './create-resume-page.css';

const CreateResumePage = () => {

  return (

    <section className='containe'>

      <Grid height={'100vh'} sx={{ marginTop: '56px' }} container >

        <Grid item container alignItems={'center'} pl={'310px'} pr={'2rem'} justifyContent={'flex-start'} xs={8}>

          <Grid item xs={9}>

            <Formik>
              <Form>
                <Textfield name={'firstName'} label={'First Name'} />
                <DatePickers name={'dateOfBirth'} label={'Date of Birth'} />
                <Textfield name={'firstName'} label={'First Name'} />
                <DatePickers name={'dateOfBirth'} label={'Date of Birth'} />
              </Form>
            </Formik>

          </Grid>

          <Grid item xs={9}>

            <Divider variant="middle" >Divider</Divider>

          </Grid>

        </Grid>

        <Grid backgroundColor={'#033f49'} item xs={4}>

          <img src={certification} alt="Description" className="fluid-img" />

        </Grid>

      </Grid>

    </section>

  )

}

export default CreateResumePage;