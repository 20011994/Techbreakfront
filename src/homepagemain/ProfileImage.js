import React from 'react'
import { Avatar,WrapItem,Wrap,Checkbox } from '@chakra-ui/react'


function ProfileImage() {
  return (
    <div style={{backgroundColor:"#DDE5E9",width:"100%",height:"200px",marginTop:"10px"}}>
             
              <div style={{display:"flex",width:"90%"}}>
              <Wrap mt="10px" ml="45%">
  <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </WrapItem>
  </Wrap>
  <div style={{marginLeft:"18%",width:"10%",marginTop:"5%"}}>
   <Checkbox  colorScheme='yellow' style={{borderColor:"#303030"}} ></Checkbox></div>
   </div>
   <div style={{width:"100%", display:"flex",justifyContent:"center"}}><h1 style={{fontSize:"16px",fontWeight:"500",color:"#0B2572"}}>Asha Agrawal M</h1></div>
   <div style={{marginLeft:"10px"}}>
    <h1><span style={{fontSize:"14px",fontWeight:"500",color:"#0B2572"}}>EIS:</span>
<div style={{backgroundColor:"",width:"100px",display:"inline",paddingLeft:"10px"}}>     <span  style={{fontSize:"14px",color:"#35A660",marginLeft:"",fontWeight:"600"}}>&nbsp;&nbsp;&nbsp;23000 Points</span>
</div>     
     </h1>
    <h1><span style={{fontSize:"14px",fontWeight:"500",color:"#0B2572"}}>Dept:</span> <span  style={{fontSize:"14px",color:"#525252",marginLeft:"",fontWeight:"400"}}>&nbsp;&nbsp;Information Techno..</span></h1>
    <h1><span style={{fontSize:"14px",fontWeight:"500",color:"#0B2572"}}>Betch:</span> <span  style={{fontSize:"14px",color:"#525252",marginLeft:"",fontWeight:"400"}}>&nbsp;&nbsp;&nbsp;2014-2018</span></h1>
    <h1><span style={{fontSize:"14px",fontWeight:"500",color:"#0B2572"}}>Exp:</span> <span  style={{fontSize:"14px",color:"#525252",marginLeft:"",fontWeight:"400"}}>&nbsp;&nbsp;&nbsp;Fresher</span></h1>

   </div>

            </div>
  )
}

export default ProfileImage