

export const handleDisplayItemInfosToUpdate = (item, formik, fieldsArray) => {
    fieldsArray.forEach(field => {
        formik.setFieldValue(field, item[field], false);
    });
};
