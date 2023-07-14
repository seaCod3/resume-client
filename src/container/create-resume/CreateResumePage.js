import Check from '@mui/icons-material/Check';
import { Avatar, Button, Grid, IconButton, StepConnector, StepLabel, stepConnectorClasses } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FaUser, FaUserCheck, FaUserGraduate, FaUserShield, FaUserTie } from 'react-icons/fa';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

import { cyan } from '@mui/material/colors';
import * as Yup from 'yup';
import Completed from '../../assets/images/Completed.svg';
import certification from '../../assets/images/certication.svg';
import College from '../../assets/images/college.svg';
import Details from '../../assets/images/details.svg';
import education from '../../assets/images/education.svg';
import SkillsImg from '../../assets/images/skills.svg';
import EducationDetails from '../../components/form-steps-components/EducationDetails';
import Experience from '../../components/form-steps-components/Experience';
import Languages from '../../components/form-steps-components/Languages';
import PersonalInformation from '../../components/form-steps-components/PersonalInformation';
import SectionDescriptionCard from '../../components/form-steps-components/SectionDescriptionCard';
import Skills from '../../components/form-steps-components/Skills';
import { sectionDescriptions } from '../../constants/static-texts';
import './create-resume-page.css';



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
  const [course, setCourse] = useState('');
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

  const [isMobileView, setIsMobileView] = useState(false);


  useEffect(() => {
    console.log(skills);
  }, [skills]);

  React.useEffect(() => {
    // Function to 
    const handleWindowResize = () => {
      const isMobile = window.innerWidth <= 667 ? true : false;
      setIsMobileView(isMobile);
    };

    // Add event listener to the window resize event
    window.addEventListener("resize", handleWindowResize);

    handleWindowResize();

    // Remove event listener when component is unmounted
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


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
    course: course,
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
    course: Yup.string()
      .required('Plese specify what did you studied.'),
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

    { label: 'Personal Information', nestedSteps: [0, 1, 2], icon: <FaUser size={15} color="#023642" /> },
    { label: 'Experience', nestedSteps: [0, 1,], icon: <FaUserTie size={15} color="#023642" /> },
    { label: 'Education', nestedSteps: [0, 1,], icon: <FaUserGraduate size={15} color="#023642" /> },
    { label: 'Skills', nestedSteps: [0, 1, 2], icon: <FaUserShield size={18} color="#023642" /> },
    { label: 'Job Details', nestedSteps: [0, 1,], icon: <FaUserCheck size={18} color="#023642" /> }

  ]

  const imageDisplayer = [certification, education, College, SkillsImg, Details, Completed];

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

    if (steps[activeStep].nestedSteps && !isFirstNestedStep()) {
      // Advance to the previous nested step within the current step
      setNestedStep(nestedStep - 1);
    } else {
      if (activeStep > 0) {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      }
      // Reset the nested step to the last one in the previous step
      setNestedStep(steps[activeStep - 1].nestedSteps.length - 1);
    }

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

  const shouldDisable = () => {
    return activeStep === 0 && nestedStep === 0
  }

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
    <section className='container-fluid' style={{ position: 'relative', height: '100vh' }} >
      <section className='container' style={{ marginTop: '56px', position: 'relative' }} >

        <Grid height={{ xs: 'auto', md: '100%' }} container >

          {/* Left Side */}
          <Grid item container height={'100%'} justifyContent={{ xs: 'center', lg: 'flex-start' }} alignContent={'flex-start'} xs={12} md={12} lg={8}>

            <Grid item sx={{ opacity: { xs: '.9', md: 1 }, marginTop: { xs: 0, md: 0 }, marginBottom: { xs: 0, md: '2rem' }, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: { xs: 0, md: '20px' }, paddingY: { xs: 2, md: '2rem' }, position: { xs: 'fixed', md: 'relative' }, zIndex: { xs: 5, md: 1 }, backgroundColor: '#fff', top: { xs: '56px', md: 'none' } }} xs={12} md={9}>

              <Stepper alternativeLabel nonLinear activeStep={activeStep} connector={<QontoConnector />} >
                {steps.map((label, index) => (
                  <Step key={label.label} completed={completed[index]}>
                    <StepButton color="#023642" onClick={handleStep(index)}>
                      {/* {label} */}
                      {
                        isMobileView ?
                          (
                            <StepLabel StepIconComponent={QontoStepIcon}>{label.icon}</StepLabel>
                          )
                          :
                          (
                            <StepLabel StepIconComponent={QontoStepIcon}>{`${label.label}`}</StepLabel>
                          )
                      }
                    </StepButton>
                  </Step>
                ))}
              </Stepper>

            </Grid>

            <Grid item xs={12} md={9} marginTop={{ xs: '93px', md: 0 }} >

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

                        <Box paddingX={{ xs: 2, md: 0 }} >
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

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'space-between', py: 2, marginY: '1.5rem' }}>
                          <Button
                            startIcon={<HiOutlineChevronLeft size={20} />}
                            variant='outlined'
                            color="inherit"
                            disabled={activeStep === 0 && nestedStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1, width: '150px', height: '40px', }}
                          >
                            Back
                          </Button>

                          {/* <Box sx={{ flex: '1 1 auto' }} /> */}

                          <Button
                            endIcon={<HiOutlineChevronRight size={20} />}
                            variant='outlined'
                            onClick={(e) => {
                              handleNext()
                              handleComplete()
                            }}
                            sx={{ mr: 1, width: '150px' }}
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
          {/* <Grid display={{ xs: 'none', lg: 'flex' }} flexGrow={999} backgroundColor={'#f4f4f4'} item xs={4}>

            <img src={isLastNestedStep() ? imageDisplayer[activeStep + 1] : imageDisplayer[activeStep]} alt="Description" className="fluid-img" />

          </Grid> */}

        </Grid>

        {/* <Box sx={{ width: '100%', bottom: 0, zIndex: 5, position: 'sticky', display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', marginTop: '1rem', }} >
          <IconButton fontSize="medium" onClick={handleBack} disabled={shouldDisable()} edge="start" aria-label="back button">
            <Avatar sx={{ bgcolor: cyan[50] }}>
              <HiOutlineChevronLeft size={20} color='#023642' />
            </Avatar>
          </IconButton>

          <IconButton
            edge="end"
            aria-label="next button"
            onClick={(e) => {
              handleNext()
              handleComplete()
            }}
          >
            <Avatar sx={{ bgcolor: cyan[50] }}>
              <HiOutlineChevronRight size={20} color='#023642' />
            </Avatar>
          </IconButton>
        </Box> */}

      </section>

      <Box sx={{ width: '100%', bottom: 0, zIndex: 5, position: 'fixed', display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', marginTop: '1rem', }} >
        <IconButton fontSize="medium" onClick={handleBack} disabled={shouldDisable()} edge="start" aria-label="back button">
          <Avatar sx={{ bgcolor: cyan[50] }}>
            <HiOutlineChevronLeft size={20} color='#023642' />
          </Avatar>
        </IconButton>

        <IconButton
          sx={{paddingRight: '2rem'}}
          edge="end"
          aria-label="next button"
          onClick={(e) => {
            handleNext()
            handleComplete()
          }}
        >
          <Avatar sx={{ bgcolor: cyan[50] }}>
            <HiOutlineChevronRight size={20} color='#023642' />
          </Avatar>
        </IconButton>
      </Box>

      <Box sx={{ position: 'absolute', top: 0, right: 0, height: '100%', width: '35%' }} display={{ xs: 'none', lg: 'block' }}  >
        <article style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4', padding: '25px', }} >

          <img src={isLastNestedStep() ? imageDisplayer[activeStep + 1] : imageDisplayer[activeStep]} alt="Description" className="fluid-img" />

        </article>
      </Box>
    </section>

  )

}

export default CreateResumePage;