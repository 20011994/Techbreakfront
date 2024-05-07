import React from 'react'
import {  Checkbox, VStack,Box } from '@chakra-ui/react'

function Forgotpassword({Forgotpassword1}) {
    const handleClick=()=>{
        Forgotpassword1()
    }
  return (
    <div className='loginform'>
    <h1 className='login-heading'>Forgot Password</h1>
    <p>Enter your registered email to send a password reset link .</p>
    <VStack
spacing={12}
align='stretch'
>
<Box h='40px' bg=''>
<text>Registered Email</text>
<input type='' />
</Box>
{/* <Box h='40px' bg=''>
<text>Password</text>
<input type=''/>

</Box> */}
{/* <Checkbox defaultChecked>Remember me</Checkbox> */}

</VStack>
<br></br><br></br>
<Box h ='40px'>
<button  className='login-button'>Send Reset Link</button>
</Box>
<div className='backLogin'>
    <p onClick={handleClick}>Back to Login</p>
</div>


</div>

  )
}

export default Forgotpassword