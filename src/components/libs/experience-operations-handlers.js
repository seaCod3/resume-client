

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

    fieldReseterHook();

}

export const handleSaveEditedExperience = (setOptions, formik, fieldReseterHook, indexOfExperienceToEdit) => {

    const { values } = formik;

    let experiences = JSON.parse(localStorage.getItem('experiences'));
    console.log(experiences, values, indexOfExperienceToEdit)

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
    console.log(indexOfExperienceToEdit, 'zustand');

    fieldReseterHook();

}