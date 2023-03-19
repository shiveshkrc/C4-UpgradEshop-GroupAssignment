import { Button, Container, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import ProductDetailsConfirm from '../ProductDetailsConfirm/ProductDetailsConfirm';

const steps = ['Items', 'Select Address', 'Confirm order'];

const PlaceOrder = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const totalSteps = () => {
        return steps.length;
      };
      const isLastStep = () => {
        return activeStep === totalSteps() - 1;
      };
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleStep = (step) => () => {
        setActiveStep(step);
      };

    return ( <>
        <Container>
            {/* Stepper showing steps to be completed to place an order successfully */}
            <Stepper activeStep={activeStep} sx={{m: 2}}>
                {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                    <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>

            {/* Here, the components will change according to the step */}
            <ProductDetailsConfirm></ProductDetailsConfirm>

            {/* BACK and NEXT buttons to navigate through the steps*/}
            <div style={{display: 'flex', justifyContent: 'center', margin: 10}}>
                <Button size='small' color='primary' onChange={handleBack}>Back</Button>
                <Button size='small' color='primary' variant='contained'>Next</Button>
            </div>
        </Container>
    </> );
}

export default PlaceOrder;