import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import { Divider, Grid, Button, stepConnectorClasses, StepConnector, StepLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import PropTypes from 'prop-types';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import certification from '../../assets/images/certication.svg';
import './create-resume-page.css';
import PersonalInformation from '../../components/form-stepscomponents/PersonalInformation';
import { useState } from 'react';



const steps = ['Personal Information', 'Contacts', `Education`, 'Skills', 'Job Details'];


const CreateResumePage = () => {

  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');


  const INITIAL_FORM_STATE = {
    fullName: fullName,
    dateOfBirth: dateOfBirth,
    gender: gender,
    nationality: nationality,
    street: street,
    city: city,
    zipCode: zipCode,
    country: country,
  }


  const FORM_VALIDATION_SCHEMA = Yup.object().shape({

    fullName: Yup.string()
      .required('Full Name is required'),
    dateOfBirth: Yup.date()
      .required('Birth Date is required'),
    gender: Yup.string()
      .required('Gender is required'),
    nationality: Yup.string()
      .required('Nationality is required'),
    street: Yup.string()
      .required('Street is required'),
    city: Yup.string()
      .required('City is required'),
    zipCode: Yup.string()
      .required('Zip Code is required'),
    country: Yup.string()
      .required('Country is required'),
  })

  // Stepper related functions

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#023642',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#023642',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#cdf5fe',
      borderTopWidth: 1,
      borderRadius: 1,
    },
  }));

  const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#023642',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#023642',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }
  
  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
  };

  // end of stepper related funtions and customization


  return (

    <section style={{ marginTop: '56px' }} >

      <Grid height={'100vh'} container >

        {/* Left Side */}
        <Grid item container pl={'310px'} pr={'2rem'} xs={8}>

          <Grid item xs={9}>

            <Box sx={{ width: '100%', marginY: '4rem' }}>

              <Stepper alternativeLabel nonLinear activeStep={activeStep} connector={<QontoConnector />} >
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                    <StepButton  color="#023642" onClick={handleStep(index)}>
                      {/* {label} */}
                      <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </StepButton>
                  </Step>
                ))}
              </Stepper>

            </Box>


            <Formik

              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION_SCHEMA}
              onSubmit={(values, onSubmitProps) => {
                console.log(values);
                onSubmitProps.resetForm()
              }}
              enableReinitialize

            >
              <Form>

                <div>
                  {allStepsCompleted() ? (
                    <React.Fragment>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                      </Box>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>

                      <Box>
                        {activeStep == 0 && (
                          <>
                            <PersonalInformation />
                          </>
                        )}

                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                          color="inherit"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                        >
                          Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={(e) => {
                          handleNext()
                          handleComplete()
                        }} sx={{ mr: 1 }}>
                          Next
                        </Button>
                        {/* {activeStep !== steps.length &&
                          (completed[activeStep] ? (
                            <Typography variant="caption" sx={{ display: 'inline-block' }}>
                              Step {activeStep + 1} already completed
                            </Typography>
                          ) : (
                            <Button onClick={handleComplete}>
                              {completedSteps() === totalSteps() - 1
                                ? 'Finish'
                                : 'Complete Step'}
                            </Button>
                          ))} */}
                      </Box>
                    </React.Fragment>
                  )}
                </div>

              </Form>
            </Formik>
          </Grid>

        </Grid>

        {/* Right Side */}
        <Grid backgroundColor={'#f4f4f4'} item xs={4}>

          <img src={certification} alt="Description" className="fluid-img" />

        </Grid>

      </Grid>

    </section>

  )

}

export default CreateResumePage;