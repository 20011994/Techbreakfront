import React, { useState } from 'react'
import "./Login.css"
import img1 from "../image/loginimg.jpg"
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import Loginform from './Loginform'
import Forgotpassword from './Forgotpassword'
import Settperform from './Settperform'
import Signupform from './signup/Signupform'

function Login() {
  const [state, setState] = useState(true)
  const [state1, setState1] = useState(false)
  const [password, setpassword] = useState(false)
  const [signupdata, setsignupdata] = useState(false)

  const handleClick = () => {
    setState(true)
    setState1(false)

  }
  const handleClick1 = () => {
    setState1(true)
    setState(false)
  }
  const handlepassword = () => {
    console.log("hello")
    setpassword(true)
  }

  const Forgotpassword1 = () => {
    console.log("hello11")
    setpassword(false)
  }
  const signupdatafun = () => {
    setsignupdata(true)
    console.log("hellosignupfun")
  }

  return (
    <div className='login'>
      <div className='login-left'>
        <img className='img' src={img1} />
      </div>
      <div className='login-right'>
        <Tabs className='Tabs-right' position='relative' variant='styled' colorScheme='' style={{}} >
          <TabList style={{ marginLeft: "8%" }}>
            <Tab className='tab' style={{ color: state ? "blue" : "" }} onClick={handleClick}>Login by user</Tab>
            <Tab style={{ color: state1 ? "blue" : "" }} onClick={handleClick1}>Login by colluges</Tab>

          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
          <TabPanels className='table-panels'>
            <TabPanel className='table-panel'>
              {password ? <Forgotpassword Forgotpassword1={Forgotpassword1} /> : signupdata ? 
               <Signupform signupdatafun={signupdatafun} /> :
               <Loginform handlepassword={handlepassword} signupdatafun={signupdatafun} />}
               </TabPanel>
            <TabPanel>
              {/* <Settperform/> */}
            </TabPanel>

          </TabPanels>
        </Tabs>

      </div>


    </div>
  )
}

export default Login