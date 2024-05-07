import React from 'react'
import Settperform from '../Settperform'
import "../../login/Login.css"
import {  Checkbox, VStack,Box ,Radio, RadioGroup,Stack,Select} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

function Additionalinfo({count}) {
  return (
    <div>
      <div>
      <h1 style={{fontSize:"18px"}} className='login-heading'>Additional info</h1>
      <p>Hi there! please enter your details to get started. </p>
      </div>
      <br></br>
        <div>
            <Settperform count={count}/>
        </div>
        <VStack
  spacing={12}
  align='stretch'
>
  <Box h='40px' bg=''>
    <text>Company Type*</text>
    <RadioGroup mt="5px" defaultValue='2'>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='yellow' value='1'>
      Radio
    </Radio>
    <Radio colorScheme='yellow' value='2'>
      Radio
    </Radio>
  </Stack>
</RadioGroup>
<Box h='20px' bg=''>
<FormControl>
  <FormLabel>Country</FormLabel>
  <Select placeholder='Select country'>
    <option>United Arab Emirates</option>
    <option>Nigeria</option>
  </Select>
</FormControl>
</Box>

  </Box>
  
 

</VStack>
<Box h="250px" bg="" mt="100px" style={{backgroundColor:""}}>
  <text>Company Address</text>
  <Box mt="10px">
  <input type=''  placeholder= "Address Line1" style={{paddingLeft:"10px"}} />

  </Box>
  <Box mt="10px">
  <input type='' placeholder= "Address Line2" style={{paddingLeft:"10px"}} />

  </Box>
<Box style={{display:"flex",width:"",justifyContent:"space-between",marginTop:"10px"}}>
<input type=''  placeholder= "State" style={{width:"140px",marginTop:"5px",paddingLeft:"10px"}} />
  <input type='' placeholder= "District" style={{width:"140px",paddingLeft:"10px"}}/>
</Box>
<Box>
  <Box mt="10px">
  <input type='' placeholder= "Pin Code"  style={{width:"140px",paddingLeft:"10px"}}/>

  </Box>
</Box>
  </Box>
  <button style={{backgroundColor:"rgba(255,194,13,1)",width:"100%",height:"40px",borderRadius:"8px",marginTop:"15px"}} >
        <span style={{fontWeight:"500",fontSize:"16px",color:""}}>Sign up</span>
       </button>
       <div style={{display:"flex",justifyContent:"center",marginTop:"15px",height:"50px"}}>
<p>
    Already have an account  ? <span  style={{color:"rgba(11,37,114,1)",fontSize:"14px",fontWeight:"500"}}>Login </span>
</p>
</div>
    </div>

  )
}

export default Additionalinfo