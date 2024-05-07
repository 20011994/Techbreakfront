import React from 'react'
import Settperform from '../Settperform'
import '../../login/Login.css'
import { PinInput, PinInputField ,HStack} from '@chakra-ui/react'
function Enterotp({Otpfun,count}) {
    
  return (
    <div>
     <h1 className='login-heading'>Enter OTP</h1>
     <p style={{marginTop:"10px"}}>Enter The OTP send to your company email .</p><br></br>
       <div>
        <div>
            <Settperform count={count}/><br></br>
            <div>
            <HStack>
  <PinInput otp>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    

  </PinInput>
</HStack>
            </div>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
          <text style={{fontWeight:"600",fontSize:"16px",color:"rgba(11,37,114,1)"}}>
            Resend OTP
          </text>
          </div>
        </div>
        <br></br>
       <button style={{backgroundColor:"rgba(255,194,13,1)",width:"100%",height:"40px",borderRadius:"8px"}} onClick={()=>Otpfun()}>
        <span style={{fontWeight:"500",fontSize:"16px",color:""}}>Verify</span>
       </button>
       </div>
    </div>
  )
}

export default Enterotp