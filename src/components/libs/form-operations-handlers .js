
const handleDisplayItemInfosToUpdate = (item, formik, fieldsArray) => {
    fieldsArray.forEach(field => {
        formik.setFieldValue(field, item[field], false);
    });
};

export const handleAddNewItem = (existentItems, setListOfItems, fieldReseterHook, storedValuePointer, fieldsToReset, handleBuildObjectToSave) => {

    let educations = [];

    const educationsDetails = handleBuildObjectToSave();

    educations = localStorage.getItem(storedValuePointer);

    if (!educations) {

        educations.push(educationsDetails);

        localStorage.setItem(storedValuePointer, JSON.stringify(educations));

    } else {

        educations = JSON.parse(localStorage.getItem(storedValuePointer));
        console.log(educations)
        educations.push(educationsDetails);

        localStorage.setItem(storedValuePointer, JSON.stringify(educations));

    }

    setListOfItems([...existentItems, educationsDetails]);

    fieldReseterHook(fieldsToReset);

}

export const handleGetItemtoEdit = (itemPosition, customHook, listOfItems, formik, fields) => {

    customHook.onOpen()

    const itemToEdit = listOfItems[itemPosition];
    console.log(itemToEdit)

    handleDisplayItemInfosToUpdate(itemToEdit, formik, fields)

    customHook.setItemIndex(itemPosition);

    console.log(customHook.index, listOfItems.indexOf(itemToEdit))

}

export const handleSaveEditedItem = (setListOfItems, fieldReseterHook, indexOfItemToEdit, storedValuePointer, fieldsToReset, handleBuildObjectToSave) => {

    let listOfStoredItems = JSON.parse(localStorage.getItem(storedValuePointer));

    listOfStoredItems[indexOfItemToEdit] = handleBuildObjectToSave();

    setListOfItems(listOfStoredItems);
    localStorage.setItem(storedValuePointer, JSON.stringify(listOfStoredItems));

    fieldReseterHook(fieldsToReset);

}

export const handleDelete = (itemToDeletePosition, setListOfItems, storedValuePointer) => {
    console.log(itemToDeletePosition)

    const listOfStoredItems = JSON.parse(localStorage.getItem(storedValuePointer));
    console.log(listOfStoredItems)

    let remainingItems = listOfStoredItems.slice(0, itemToDeletePosition).concat(listOfStoredItems.slice(itemToDeletePosition + 1));

    setListOfItems([...remainingItems]);
    localStorage.setItem(storedValuePointer, JSON.stringify(remainingItems));

}