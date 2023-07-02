import { useFormikContext } from 'formik';

const useFieldReseter = () => {
    // const listOfFieldsToClear = ['jobTitle', 'employer', 'jobLocationCity', 'jobLocationStreet', 'jobLocationCountry', 'jobStartDate', 'jobEndDate', 'stillWorkingHere'];

    const formik = useFormikContext();

    const handleResetLanguageDetails = (listOfFieldsToClear) => {

        listOfFieldsToClear.forEach(field => {

            formik.setFieldValue(field, '', false); // Reset 'language' field
            formik.setFieldTouched(field, false, false);

        });
    };

    return handleResetLanguageDetails;
};

export default useFieldReseter;
