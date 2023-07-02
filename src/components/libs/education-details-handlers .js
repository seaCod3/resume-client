import { handleDisplayItemInfosToUpdate } from "./common-handlers";

const edducationDetailsFields = ['instituitionName', 'instituitionLocationStreet', 'instituitionLocationCity', 'instituitionLocationCountry', 'degree', 'graduationStartDate', 'graduationEndDate', 'stillStudingHere'];


export const handleAddNewEducation = (options, setOptions, formik, fieldReseterHook) => {

    const { values } = formik;
    let educations = [];

    const educationsDetails = {
        instituitionName: values.instituitionName,
        instituitionLocationStreet: values.instituitionLocationStreet,
        instituitionLocationCity: values.instituitionLocationCity,
        instituitionLocationCountry: values.instituitionLocationCountry,
        degree: values.degree,
        graduationStartDate: values.graduationStartDate,
        graduationEndDate: values.graduationEndDate,
        stillStudingHere: values.stillStudingHere,
    };



    if (!localStorage.getItem('educations')) {

        educations.push(educationsDetails);

        localStorage.setItem('educations', JSON.stringify(educations));

    } else {

        educations = JSON.parse(localStorage.getItem('educations'));
        educations.push(educationsDetails);

        localStorage.setItem('educations', JSON.stringify(educations));

    }

    setOptions([...options, educationsDetails]);

    fieldReseterHook(edducationDetailsFields);

}

export const handleEdit = (itemToEditIdentifier, customHook, listOfItems, formik) => {

    customHook.onOpen()

    const itemToEdit = listOfItems.find((item) => item[itemToEditIdentifier] === itemToEditIdentifier)

    handleDisplayItemInfosToUpdate(itemToEdit, formik, edducationDetailsFields)

    customHook.setItemIndex(listOfItems.indexOf(itemToEdit));

    console.log(customHook.index, listOfItems.indexOf(itemToEdit))

}

export const handleSaveEditedExperience = (setListOfItems, formik, fieldReseterHook, indexOfItemToEdit, storedValue) => {

    const { values } = formik;

    let listOfStoredItems = JSON.parse(localStorage.getItem(storedValue));

    listOfStoredItems[indexOfItemToEdit] = {

        instituitionName: values.instituitionName,
        instituitionLocationStreet: values.instituitionLocationStreet,
        instituitionLocationCity: values.instituitionLocationCity,
        instituitionLocationCountry: values.instituitionLocationCountry,
        degree: values.degree,
        graduationStartDate: values.graduationStartDate,
        graduationEndDate: values.graduationEndDate,
        stillStudingHere: values.stillStudingHere,

    }

    setListOfItems(listOfStoredItems);
    localStorage.setItem(storedValue, JSON.stringify(listOfStoredItems));

    fieldReseterHook(edducationDetailsFields);

}

export const handleDelete = (jobTitleOfExperienceToDelete, setExperiences) => {

    const storedExperiences = JSON.parse(localStorage.getItem('experiences'));

    let remainingExperiences = storedExperiences.filter((experience) => experience.jobTitle !== jobTitleOfExperienceToDelete);

    localStorage.setItem('experiences', JSON.stringify(remainingExperiences));
    setExperiences([...JSON.parse(localStorage.getItem('experiences'))]);

}