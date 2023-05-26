import React from 'react';
import './create-resume-page.css';
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
import education from '../../assets/images/education.svg';
import College from '../../assets/images/college.svg';
import SkillsImg from '../../assets/images/skills.svg';
import Details from '../../assets/images/details.svg';
import PersonalInformation from '../../components/form-steps-components/PersonalInformation';
import { useState } from 'react';
import Experience from '../../components/form-steps-components/Experience';
import SectionDescriptionCard from '../../components/form-steps-components/SectionDescriptionCard';
import EducationDetails from '../../components/form-steps-components/EducationDetails';
import Skills from '../../components/form-steps-components/Skills';
import { useEffect } from 'react';
import { sectionDescriptions } from '../../constants/static-texts';
import { HiOutlineChevronRight } from "react-icons/hi2";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import Languages from '../../components/form-steps-components/Languages';




const CreateResumePage = () => {

  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [employer, setEmployer] = useState('');
  const [jobStartDate, setJobStartDate] = useState('');
  const [jobEndDate, setJobEndDate] = useState('');
  const [stillWorkingHere, setStillWorkingHere] = useState(false);
  const [jobLocationCity, setJobLocationCity] = useState('');
  const [jobLocationStreet, setJobLocationStreet] = useState('');
  const [jobLocationCountry, setJobLocationCountry] = useState('');
  const [instituitionName, setInstituitionName] = useState('');
  const [instituitionLocationStreet, setInstituitionLocationStreet] = useState('');
  const [instituitionLocationCity, setInstituitionLocationCity] = useState('');
  const [instituitionLocationCountry, setInstituitionLocationCountry] = useState('');
  const [degree, setDegree] = useState('');
  const [graduationStartDate, setGraduationStartDate] = useState('');
  const [graduationEndDate, setGraduationEndDate] = useState('');
  const [stillStudingHere, setStillStudingHere] = useState(false);
  const [skills, setSkills] = useState('');
  const [language, setLanguage] = useState('');
  const [whereWasLearned, setWhereWasLearned] = useState('');
  const [oralComprehension, setOralComprehension] = useState('');
  const [readingComprehension, setReadingComprehension] = useState('');
  const [oralInteraction, setOralInteraction] = useState('');
  const [speakingSkills, setSpeakingSkills] = useState('');
  const [writingSkills, setWritingSkills] = useState('');


  useEffect(() => {
    console.log(skills);
  }, [skills]);


  const INITIAL_FORM_STATE = {

    fullName: fullName,
    dateOfBirth: dateOfBirth,
    gender: gender,
    nationality: nationality,
    street: street,
    city: city,
    zipCode: zipCode,
    country: country,
    email: email,
    phone: phone,
    jobTitle: jobTitle,
    employer: employer,
    jobStartDate: jobStartDate,
    jobEndDate: jobEndDate,
    stillWorkingHere: stillWorkingHere,
    jobLocationCity: jobLocationCity,
    jobLocationStreet: jobLocationStreet,
    jobLocationCountry: jobLocationCountry,
    instituitionName: instituitionName,
    instituitionLocationStreet: instituitionLocationStreet,
    instituitionLocationCity: instituitionLocationCity,
    instituitionLocationCountry: instituitionLocationCountry,
    degree: degree,
    graduationStartDate: graduationStartDate,
    graduationEndDate: graduationEndDate,
    stillStudingHere: stillStudingHere,
    skills: skills,
    language: language,
    whereWasLearned: whereWasLearned,
    oralComprehension: oralComprehension,
    readingComprehension: readingComprehension,
    oralInteraction: oralInteraction,
    speakingSkills: speakingSkills,
    writingSkills: writingSkills

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
    email: Yup.string()
      .required('Email is required'),
    phone: Yup.string()
      .required('Phone is required'),
    jobTitle: Yup.string()
      .required('Job Title is required'),
    employer: Yup.string()
      .required('Employer is required'),
    jobStartDate: Yup.date()
      .required('Job Start Date is required'),
    jobEndDate: Yup.date()
      // .required('Job End Date is required')
      .optional(),
    stillWorkingHere: Yup.boolean()
      .optional(),
    jobLocationCity: Yup.string()
      .required('Job Location City is required'),
    jobLocationStreet: Yup.string()
      .required('Job Location Street is required'),
    jobLocationCountry: Yup.string()
      .required('Job Location Country is required'),
    instituitionName: Yup.string()
      .required('Instituition Name is required'),
    instituitionLocationStreet: Yup.string()
      .required('Instituition Location Street is required'),
    instituitionLocationCity: Yup.string()
      .required('Instituition Location City is required'),
    instituitionLocationCountry: Yup.string()
      .required('Instituition Location Country is required'),
    degree: Yup.string()
      .required('Degree is required'),
    graduationStartDate: Yup.date()
      .required('Graduation Start Date is required'),
    graduationEndDate: Yup.date()
      .optional(),
    // .required('Graduation End Date is required')
    stillStudingHere: Yup.boolean()
      .optional(),
    skills: Yup.string()
      .required('Skills is required'),
    language: Yup.string()
      .required('Language is required'),
    whereWasLearned: Yup.string()
      .optional(),
    oralComprehension: Yup.string()
      .required('Oral Comprehension is required'),
    readingComprehension: Yup.string()
      .required('Reading Comprehension is required'),
    oralInteraction: Yup.string()
      .required('Oral Interaction is required'),
    speakingSkills: Yup.string()
      .required('Speaking Skills is required'),
    writingSkills: Yup.string()
      .required('Writing Skills is required'),

  })

  // Stepper related functions

  const steps = [

    { label: 'Personal Information', nestedSteps: [0, 1, 2] },
    { label: 'Experience', nestedSteps: [0, 1,] },
    { label: 'Education', nestedSteps: [0, 1,] },
    { label: 'Skills', nestedSteps: [0, 1, 2] },
    { label: 'Job Details', nestedSteps: [0, 1,] }

  ]


  const imageDisplayer = [certification, education, College, SkillsImg, Details];

  const [activeStep, setActiveStep] = React.useState(0);
  const [nestedStep, setNestedStep] = useState(0); // nested steps
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

  const isLastNestedStep = () => {
    return nestedStep === steps[activeStep].nestedSteps.length - 1;
  }

  const isFirstNestedStep = () => {
    return nestedStep === 0;
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  // const handleNext = () => {
  //   const newActiveStep =
  //     isLastStep() && !allStepsCompleted()
  //       ? // It's the last step, but not all steps have been completed,
  //       // find the first step that has been completed
  //       steps.findIndex((step, i) => !(i in completed))
  //       : activeStep + 1;
  //   setActiveStep(newActiveStep);
  // };

  const handleNext = () => {

    if (steps[activeStep].nestedSteps && !isLastNestedStep()) {
      // Advance to the next nested step within the current step
      setNestedStep(nestedStep + 1);
      console.log(nestedStep);
    } else {
      // Advance to the next step
      setNestedStep(0)
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setNestedStep(0);

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
    setNestedStep(0);
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
        <Grid item container alignContent={'start'} pl={'310px'} pr={'2rem'} xs={8}>

          <Box sx={{ width: '80%', marginY: '4rem' }}>

            <Stepper alternativeLabel nonLinear activeStep={activeStep} connector={<QontoConnector />} >
              {steps.map((label, index) => (
                <Step key={label.label} completed={completed[index]}>
                  <StepButton color="#023642" onClick={handleStep(index)}>
                    {/* {label} */}
                    <StepLabel StepIconComponent={QontoStepIcon}>{label.label}</StepLabel>
                  </StepButton>
                </Step>
              ))}
            </Stepper>

          </Box>

          <Grid item xs={9}>

            {/* stepper used to be placed here */}


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
                        {activeStep === 0 && (
                          <>
                            {nestedStep === 0 && <SectionDescriptionCard {...sectionDescriptions[5]} />}
                            {nestedStep === 1 && <PersonalInformation />}
                            {nestedStep === 2 && <SectionDescriptionCard {...sectionDescriptions[2]} />}
                          </>
                        )}
                        {activeStep === 1 && (
                          <>
                            {nestedStep === 0 && <Experience />}
                            {nestedStep === 1 && <SectionDescriptionCard {...sectionDescriptions[0]} />}
                          </>
                        )}
                        {activeStep === 2 && (
                          <>
                            {nestedStep === 0 && <EducationDetails />}
                            {nestedStep === 1 && <SectionDescriptionCard {...sectionDescriptions[1]} />}
                          </>
                        )}
                        {activeStep === 3 && (
                          <>
                            {nestedStep === 0 && <Skills skills={skills} setSkills={setSkills} />}
                            {nestedStep === 1 && <Languages />}
                            {nestedStep === 2 && <SectionDescriptionCard {...sectionDescriptions[3]} />}
                          </>
                        )}
                        {activeStep === 4 && (
                          <>
                            <SectionDescriptionCard {...sectionDescriptions[4]} />
                          </>
                        )}

                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, marginTop: '2rem' }}>
                        <Button
                          startIcon={<HiOutlineChevronLeft size={20} />}
                          variant='outlined'
                          color="inherit"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1, width: '150px', height: '40px', }}
                        >
                          Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button
                          endIcon={<HiOutlineChevronRight size={20} />}
                          variant='outlined'
                          onClick={(e) => {
                            handleNext()
                            handleComplete()
                          }} sx={{ mr: 1, width: '150px' }}
                          className='btn-secondary'
                        >
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

          <img src={isLastNestedStep() ? imageDisplayer[activeStep +1] : imageDisplayer[activeStep]} alt="Description" className="fluid-img" />

        </Grid>

      </Grid>

    </section>

  )

}

export default CreateResumePage;