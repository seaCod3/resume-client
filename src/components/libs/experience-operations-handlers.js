

export const handleAddNewExperience = (options, setOptions, formik, fieldReseterHook) => {

    const { values } = formik;
    let experiences = [];

    const experienceDetails = {

        jobTitle: values.jobTitle,
        employer: values.employer,
        jobLocationCity: values.jobLocationCity,
        jobLocationStreet: values.jobLocationStreet,
        jobLocationCountry: values.jobLocationCountry,
        jobStartDate: values.jobStartDate,
        jobEndDate: values.jobEndDate,
        stillWorkingHere: values.stillWorkingHere,

    }


    if (!localStorage.getItem('experiences')) {

        experiences.push(experienceDetails);

        localStorage.setItem('experiences', JSON.stringify(experiences));

    } else {

        experiences = JSON.parse(localStorage.getItem('experiences'));
        experiences.push(experienceDetails);

        localStorage.setItem('experiences', JSON.stringify(experiences));

    }

    setOptions([...options, experienceDetails]);

    const listOfFieldsToClear = ['jobTitle', 'employer', 'jobLocationCity', 'jobLocationStreet', 'jobLocationCountry', 'jobStartDate', 'jobEndDate', 'stillWorkingHere'];

    fieldReseterHook(listOfFieldsToClear);

}

const handleDisplayExperienceDetailsToUpdate = (jobExperienceToUpdate, formik) => {


    formik.setFieldValue('jobTitle', jobExperienceToUpdate.jobTitle, false); // Reset 'language' field
    formik.setFieldValue('employer', jobExperienceToUpdate.employer, false); // Reset 'whereWasLearned' field
    formik.setFieldValue('jobLocationCity', jobExperienceToUpdate.jobLocationCity, false); // Reset 'oralComprehension' field
    formik.setFieldValue('jobLocationStreet', jobExperienceToUpdate.jobLocationStreet, false); // Reset 'readingComprehension' field
    formik.setFieldValue('jobLocationCountry', jobExperienceToUpdate.jobLocationCountry, false); // Reset 'oralInteraction' field
    formik.setFieldValue('jobStartDate', jobExperienceToUpdate.jobStartDate, false); // Reset 'speakingSkills' field
    formik.setFieldValue('jobEndDate', jobExperienceToUpdate.jobEndDate, false); // Reset 'writingSkills' field
    formik.setFieldValue('stillWorkingHere', jobExperienceToUpdate.stillWorkingHere, false); // Reset 'writingSkills' field

};

export const handleEdit = (jobTitleOfExperienceToEdit, useExperience, experiences, formik) => {

    useExperience.onOpen()

    const experienceToEdit = experiences.find((experiences) => experiences.jobTitle === jobTitleOfExperienceToEdit)

    handleDisplayExperienceDetailsToUpdate(experienceToEdit, formik);

    useExperience.setExperienceIndex(experiences.indexOf(experienceToEdit));

    console.log(useExperience.index, experiences.indexOf(experienceToEdit))
    // console.log(experiences.indexOf(experienceToEdit));

}

export const handleSaveEditedExperience = (setOptions, formik, fieldReseterHook, indexOfExperienceToEdit) => {

    const { values } = formik;

    let experiences = JSON.parse(localStorage.getItem('experiences'));

    experiences[indexOfExperienceToEdit] = {

        jobTitle: values.jobTitle,
        employer: values.employer,
        jobLocationCity: values.jobLocationCity,
        jobLocationStreet: values.jobLocationStreet,
        jobLocationCountry: values.jobLocationCountry,
        jobStartDate: values.jobStartDate,
        jobEndDate: values.jobEndDate,
        stillWorkingHere: values.stillWorkingHere,

    }

    setOptions(experiences);
    localStorage.setItem('experiences', JSON.stringify(experiences));

    const listOfFieldsToClear = ['jobTitle', 'employer', 'jobLocationCity', 'jobLocationStreet', 'jobLocationCountry', 'jobStartDate', 'jobEndDate', 'stillWorkingHere'];
    fieldReseterHook(listOfFieldsToClear);

}

export const handleDelete = (jobTitleOfExperienceToDelete, setExperiences) => {

    const storedExperiences = JSON.parse(localStorage.getItem('experiences'));

    let remainingExperiences = storedExperiences.filter((experience) => experience.jobTitle !== jobTitleOfExperienceToDelete);

    localStorage.setItem('experiences', JSON.stringify(remainingExperiences));
    setExperiences([...JSON.parse(localStorage.getItem('experiences'))]);

}