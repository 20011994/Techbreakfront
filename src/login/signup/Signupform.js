import React, { useEffect, useState } from 'react'
import '../../login/Login.css'
import {  Checkbox, VStack,Box } from '@chakra-ui/react'
import Settperform from '../Settperform'
import Enterotp from './Enterotp'
import Additionalinfo from './Additionalinfo'
function Signupform() {
  const [state ,setState] = useState(false)
  const [state1,setState1] = useState(false)
  const [count,setCount] = useState(0)
  // const [signupdata,setsignupdata] = useState(false)
const handlClicksiginup=()=>{
  setState(true)
  setCount(count+1)
}

const Otpfun =()=>{
  setState(false)
 setState1(true)
  setCount(count+1)
}

// const stepperfun=()=>{
//       stepperfun2()
// }
// useEffect(()=>{
//   stepperfun()
// },[count])
console.log(count,"countttttt")
  return (
    <div className='loginform'>
    {state ?<Enterotp count={count} Otpfun={Otpfun}/>:state1?<Additionalinfo count={count}/>:<>
    <h1 className='login-heading'>Sign Up</h1>
    <p>Hi there! plese enter your details to get started .</p>
     
     <div style={{width:"100%"}}>
     <Settperform />
     </div>
      <br/>
    <VStack
spacing={10}
align='stretch'
>
<Box h='40px' bg='' w ='350px'>
<text>Name</text>
<input type='' />
</Box>
<Box h='40px' bg='' w ='350px'>
<text>Company Email</text>
<input type='' />
</Box>
<Box h='40px' bg='' w ='350px'>
<text>Company Name</text>
<input type='' />
</Box>
<Box h='40px' bg='' w ='350px'>
<text>Password</text>
<input type=''/>

</Box>
<Box h='40px' bg='' w ='350px'>
<text>Mobile Number</text>
<input type=''/>

</Box>
<Checkbox defaultChecked>Remember me</Checkbox>


</VStack>
<button style={{width:"350px"}} className='login-button' onClick={handlClicksiginup}>Next</button>
<div className='forgot-password-div'>

</div>
<div style={{display:"flex",justifyContent:"center"}}>
<p>
    Already have an account  ? <span  style={{color:"rgba(11,37,114,1)",fontSize:"14px",fontWeight:"500"}}>Login </span>
</p>
</div>
    </>}
</div>
  )
}

export default Signupform