import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';

const NestedStepsTest = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [nestedStep, setNestedStep] = useState(0);

    const handleNext = () => {
        if (nestedStep === 0) {
            // Advance to the next nested step within the current step
            setNestedStep(1);
        } else {
            // Move to the next main step
            setCurrentStep(prevStep => prevStep + 1);
            // Reset nested step back to 0
            setNestedStep(0);
        }
    };

    const handleBack = () => {
        if (nestedStep === 0) {
            // Move to the previous main step
            setCurrentStep(prevStep => prevStep - 1);
            // Set nested step to the last step of the previous main step
            setNestedStep(2);
        } else {
            // Move to the previous nested step within the current step
            setNestedStep(0);
        }
    };

    return (
        <div style={{ height: '100vh', width: '100%', marginTop: '100px' }} >
            <Stepper activeStep={currentStep} alternativeLabel>

                <Step>
                    <StepLabel>Step 1</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step 2</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step 3</StepLabel>
                </Step>

            </Stepper>

            <div>
                {currentStep === 0 && (
                    <div>
                        {nestedStep === 0 && <p>Nested Step 1 content</p>}
                        {nestedStep === 1 && <p>Nested Step 2 content</p>}
                    </div>
                )}
                {currentStep === 1 && (
                    <div>
                        {nestedStep === 0 && <p>Nested Step 1 content</p>}
                        {nestedStep === 1 && <p>Nested Step 2 content</p>}
                    </div>
                )}
                {currentStep === 2 && <p>Step 3 content</p>}
            </div>

            <div>
                {currentStep > 0 && (
                    <Button onClick={handleBack}>Back</Button>
                )}
                {(currentStep < 2 || (currentStep === 2 && nestedStep === 0)) && (
                    <Button onClick={handleNext}>Next</Button>
                )}
            </div>
        </div>
    );
};

export default NestedStepsTest;