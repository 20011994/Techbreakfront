import React from 'react'
import { Avatar,WrapItem,Wrap } from '@chakra-ui/react'
import { BellIcon ,EmailIcon,TimeIcon,SunIcon} from '@chakra-ui/icons'

function NavbarMain() {
  return (
    <div style={{backgroundColor:"rgba(13,44,131,1)",height:"60px",display:"flex"}}>
        
       <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",height:"60px"}}> 
       <h1 style={{color:"white",marginLeft:"3%"}}> NavbarMain </h1></div>

          <div style={{display:"flex",width:"100%",justifyContent:"flex-end",backgroundColor:"",height:"60px"}}>
          <div style={{backgroundColor:"",height:"60px",display:"flex",width:"30%",justifyContent:"space-evenly"}}>
          <div style={{display:"flex",backgroundColor:"",justifyContent:"center",alignItems:"center"}}>
               <div style={{display:"flex",flexDirection:"column"}}>
             <div style={{ display:"flex",justifyContent:"center"}}>
             <SunIcon w="5" h="5" color="white"/>
             </div>
                <p style={{color:"whitesmoke"}}>Sun</p>
               </div>
                </div>             <div style={{display:"flex",backgroundColor:"",justifyContent:"center",alignItems:"center"}}>
               <div style={{display:"flex",flexDirection:"column"}}>
             <div style={{ display:"flex",justifyContent:"center"}}>
             <TimeIcon w="5" h="5" color="white"/>
             </div>
                <p style={{color:"whitesmoke"}}>Time</p>
               </div>
                </div>            
                 <div style={{display:"flex",backgroundColor:"",justifyContent:"center",alignItems:"center"}}>
               <div style={{display:"flex",flexDirection:"column"}}>
             <div style={{ display:"flex",justifyContent:"center"}}>
             <EmailIcon w="5" h="5" color="white"/>
             </div>
                <p style={{color:"whitesmoke"}}>My JOb</p>
               </div>
                </div> 
            <div style={{display:"flex",alignItems:"center"}}>
            <BellIcon w="6" h="6" color="white"/>
            </div>
             <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
             <Wrap>
  <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov'  size='md' />
  </WrapItem>
   </Wrap>
             </div>
          </div>

          </div>
        </div>
  )
}

export default NavbarMain