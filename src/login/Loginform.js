import React from 'react'
import './Loginform.css'
import {  Checkbox, VStack,Box } from '@chakra-ui/react'
function Loginform({handlepassword,signupdatafun}) {
const handleChange =()=>{
    handlepassword()
}
const handleClicksign =()=>{
  signupdatafun()
}
  return (
    <div className='loginform'>
        <h1 className='login-heading'>Login</h1>
        <p>Welcome Back! plese enter your details</p>
        <VStack
  spacing={12}
  align='stretch'
>
  <Box h='40px' bg=''>
    <text>Company Email</text>
    <input type='' />
  </Box>
  <Box h='40px' bg=''>
  <text>Password</text>
  <input type=''/>
 
  </Box>
  <Checkbox defaultChecked>Remember me</Checkbox>

</VStack>
<button className='login-button'>Login</button>
<div className='forgot-password-div'>
<p className='forgot-password' onClick={handleChange}>Forgot password</p>

</div>
<div style={{display:"flex",justifyContent:"center"}}>
    <p>
        Dont have an account  ? <span onClick={handleClicksign} style={{color:"rgba(11,37,114,1)",fontSize:"14px",fontWeight:"500"}}>Sign Up </span>
    </p>
</div>
    </div>
  )
}

export default Loginform