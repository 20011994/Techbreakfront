import React from 'react'
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box
  } from '@chakra-ui/react'
function Settperform({count}) {
    const steps = [
        { title: 'Basic Info', description: '' },
        { title: 'OTPVerification', description: '' },
        { title: 'Additional Info', description: '' },
      ]
    const { activeStep } = useSteps({
        index: count,
        count: steps.length,
      })

const sizes ={
  md:{
    title:{
      fontSize:"xs"
    }
  }
}
console.log(count,"count")
  return (
    <div style={{width:"350px",backgroundColor:"",marginRight:"5%"}}>
        <Stepper index={activeStep} size='sm'>
      {steps.map((step, index) => (
        <Step key={index}>
        <div>
          <StepIndicator  style={index===2?
            {marginLeft:"25px"}:index===1?
            {marginLeft:"30px"}:index===0?
            {marginLeft:"15px"}:
            {marginLeft:""}} >
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
 
          <Box mr="10px">
            <StepTitle >{step.title}</StepTitle>
            {/* <StepDescription>{step.description}</StepDescription> */}
          </Box>
          </div>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
    </div>
  )
}

export default Settperform