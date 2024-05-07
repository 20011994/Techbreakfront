import React from 'react'
import "./HomePage.css"
import {ChevronDownIcon,SearchIcon,DragHandleIcon,HamburgerIcon } from '@chakra-ui/icons'
import { Checkbox, CheckboxGroup, Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,Select,Grid,GridItem, 
  SimpleGrid} from '@chakra-ui/react'
  import { Divider } from '@chakra-ui/react'
import ProfileImage from './ProfileImage'


function HomePage() {
  return (<>
    <div className='master-div'>
        <div className='main-div'>
          <div className='filter-div'>

                <h1>Filters <ChevronDownIcon/></h1>
            </div>
            <div className='input-filter'>
                <input placeholder='Java Developer'/>
            </div>
           
            <div className='search-icon'>
                <div> <SearchIcon/></div>
                <div>
             <ChevronDownIcon/>
                </div>
            </div>
        </div>
        <div className='clear-section'>
        <p>Clear Section </p>
          <div className='save-profile'><h1>Save Profile</h1></div>
        </div>
        
       
    </div>
    <div className='sidebar-middlebar'>
          <div className='sidebar-left'>
            <div className='sidebar-text'>
              <div className='plat-formdata'>
                <h3 style={{width:"100%"}}>Platform Data</h3>
              </div>
              <div className='clear-all'>
                <h3 style={{width:"100%"}}>Clear All</h3>
              </div>
            </div>
            <div className='experience'>
              <h1>Experience</h1>
              <p>Fresher ( Year of passing)</p>
              </div>
              <div className='check-box'>
             <div> <Checkbox colorScheme='yellow' style={{borderColor:"#303030"}} defaultChecked>2023</Checkbox></div>
             <div> <Checkbox  style={{borderColor:"#303030"}} >2021</Checkbox></div>
             <div> <Checkbox   style={{borderColor:"#303030"}}>2020</Checkbox></div>
             <div> <Checkbox   style={{borderColor:"#303030"}} >2019</Checkbox></div>
            </div>
            <div className='slider'>
                <p>Year of Experience</p>
                <div>
                <Slider aria-label='slider-ex-1' defaultValue={30}>
                      <SliderTrack>
                       <SliderFilledTrack />
                       </SliderTrack>
                       <SliderThumb />
                      </Slider>
                </div>
                <div className='select-dropdown'>

                <div><select placeholder='2' >
                 <option value='option1'>2</option>
                   <option value='option2'>Option 2</option>
                   <option value='option3'>Option 3</option>
                   </select></div>
                            <div className='to-text'><p>to</p></div>
                 <div><select placeholder='4'style={{marginLeft:"15px"}}  >
                 <option value=''>4</option>
                <option value='option2'>Option 2</option>
                 <option value='option3'>Option 3</option>
                 </select></div>
                </div>
               
            </div>
            <div style={{marginTop:"5px"}}>
            <Divider style={{backgroundColor:"#303030"}} orientation='horizontal' height="1px"   />
            </div>
            
            <div style={{marginTop:"10px"}}>
            <div className='experience'>
              <h1>Placement Status</h1>
              {/* <p>Fresher ( Year of passing)</p> */}
              </div>
              <div className='check-box'>
             <div> <Checkbox colorScheme='yellow' style={{borderColor:"#303030"}} defaultChecked>Not Placed</Checkbox></div>
             <div> <Checkbox  style={{borderColor:"#303030"}} >Placed</Checkbox></div>
            
            </div>
            <div className='slider'>
                {/* <p>Year of Experience</p> */}
                <div>
                
                <Slider aria-label='slider-ex-1' defaultValue={30}>
                      <SliderTrack>
                       <SliderFilledTrack />
                       </SliderTrack>
                       <SliderThumb />
                      </Slider>
                </div>
                <div className='select-dropdown'>

                <div><select placeholder='2' >
                 <option value='option1'>2</option>
                   <option value='option2'>Option 2</option>
                   <option value='option3'>Option 3</option>
                   </select></div>
                            <div className='to-text'><p>to</p></div>
                 <div><select placeholder='4'style={{marginLeft:"15px"}}  >
                 <option value=''>4</option>
                <option value='option2'>Option 2</option>
                 <option value='option3'>Option 3</option>
                 </select></div>
                </div>
               
            </div>
            <div>
            <Divider style={{backgroundColor:"#303030",marginTop:"8px"}} orientation='horizontal' height="1px" />

            </div>
            </div>

            

            <div style={{marginTop:"10px"}}>
            <div className='experience'>
              <h1>Total EIS</h1>
              {/* <p>Fresher ( Year of passing)</p> */}
              </div>
              {/* <div className='check-box'>
             <div> <Checkbox colorScheme='yellow' style={{borderColor:"#303030"}} defaultChecked>Not Placed</Checkbox></div>
             <div> <Checkbox  style={{borderColor:"#303030"}} >Placed</Checkbox></div>
            
            </div> */}
            <div className='slider'>
                {/* <p>Year of Experience</p> */}
                <div>
                
                <Slider aria-label='slider-ex-1' defaultValue={30}>
                      <SliderTrack>
                       <SliderFilledTrack />
                       </SliderTrack>
                       <SliderThumb />
                      </Slider>
                </div>
                <div className='select-dropdown'>

                <div><select placeholder='2' >
                 <option value='option1'>2</option>
                   <option value='option2'>Option 2</option>
                   <option value='option3'>Option 3</option>
                   </select></div>
                            <div className='to-text'><p>to</p></div>
                 <div><select placeholder='4'style={{marginLeft:"15px"}}  >
                 <option value=''>4</option>
                <option value='option2'>Option 2</option>
                 <option value='option3'>Option 3</option>
                 </select></div>
                </div>
               
            </div>
            <div>
            <Divider style={{backgroundColor:"#303030",marginTop:"8px"}} orientation='horizontal' height="1px" />
              
            </div>
            </div>
            <div style={{marginTop:"10px"}}>
            <div className='experience'>
              <h1>Coursewise EIS</h1>
              {/* <p>Fresher ( Year of passing)</p> */}
              </div>
              <div className='check-box'>
             <div> <Checkbox colorScheme='yellow' style={{borderColor:"#303030"}} defaultChecked> AMCAT</Checkbox></div>
             <div> <Checkbox  colorScheme='yellow' style={{borderColor:"#303030"}} >Verbale Ability</Checkbox></div>
             <div> <Checkbox  colorScheme='yellow' style={{borderColor:"#303030"}} >Amazone Test</Checkbox></div>
             <div> <Checkbox colorScheme='yellow' style={{borderColor:"#303030"}} >Aptitude</Checkbox></div>
             <div> <Checkbox  colorScheme='yellow' style={{borderColor:"#303030"}} >Reasonig </Checkbox></div>
             

            
            </div>
            </div>
            <div>
            <Divider style={{backgroundColor:"#303030",marginTop:"8px"}} orientation='horizontal' height="1px" />
              
            </div>
            <div>
            <div style={{marginTop:"10px"}}>
            <div className='experience'>
              <h1>stopStalk score</h1>
              {/* <p>Fresher ( Year of passing)</p> */}
              </div>
              {/* <div className='check-box'>
             <div> <Checkbox colorScheme='yellow' style={{borderColor:"#303030"}} defaultChecked>Not Placed</Checkbox></div>
             <div> <Checkbox  style={{borderColor:"#303030"}} >Placed</Checkbox></div>
            
            </div> */}
            <div className='slider'>
                {/* <p>Year of Experience</p> */}
                <div>
                
                <Slider aria-label='slider-ex-1' defaultValue={30}>
                      <SliderTrack>
                       <SliderFilledTrack />
                       </SliderTrack>
                       <SliderThumb />
                      </Slider>
                </div>
                <div className='select-dropdown'>

                <div><select placeholder='2' >
                 <option value='option1'>2</option>
                   <option value='option2'>Option 2</option>
                   <option value='option3'>Option 3</option>
                   </select></div>
                            <div className='to-text'><p>to</p></div>
                 <div><select placeholder='4'style={{marginLeft:"15px"}}  >
                 <option value=''>4</option>
                <option value='option2'>Option 2</option>
                 <option value='option3'>Option 3</option>
                 </select></div>
                </div>
               
            </div>
           
            </div>
            </div>
            <div>
            <Divider style={{backgroundColor:"#303030",marginTop:"8px"}} orientation='horizontal' height="1px" />
              
            </div>
            <div>
            <div style={{marginTop:"10px"}}>
            <div className='experience'>
              <h1>Collage Department</h1>
              {/* <p>Fresher ( Year of passing)</p> */}
              </div>
              <div className='check-box'>
             <div> <Checkbox colorScheme='yellow' style={{borderColor:"#303030"}} defaultChecked> All</Checkbox></div>
             <div> <Checkbox  colorScheme='yellow' style={{borderColor:"#303030"}} >Computer Science</Checkbox></div>
             <div> <Checkbox  colorScheme='yellow' style={{borderColor:"#303030"}} >ECE</Checkbox></div>
             <div> <Checkbox colorScheme='yellow' style={{borderColor:"#303030"}} >EEE</Checkbox></div>
             <div> <Checkbox  colorScheme='yellow' style={{borderColor:"#303030"}} >IT</Checkbox></div>
             

            
            </div>
            </div>
            </div>
            <div>
              <span style={{color:"#0B2572",fontSize:"14px",fontWeight:"600"}}>
                + 20 more
              </span>
            </div>
            <div>
            <Divider style={{backgroundColor:"#303030",marginTop:"8px"}} orientation='horizontal' height="1px" />
              
            </div>
            <div>
            <div style={{marginTop:"10px"}}>
            <div className='experience'>
              <h1>Collage Type</h1>
              {/* <p>Fresher ( Year of passing)</p> */}
              </div>
              <div className='check-box'>
             <div> <Checkbox colorScheme='yellow' style={{borderColor:"#303030"}} defaultChecked>Arts </Checkbox></div>
             <div> <Checkbox  colorScheme='yellow' style={{borderColor:"#303030"}} >Engineering</Checkbox></div>
             <div> <Checkbox  colorScheme='yellow' style={{borderColor:"#303030"}} >Polytechnic</Checkbox></div>
            

            
            </div>
            </div>
            </div>
            <div>
            <Divider style={{backgroundColor:"#303030",marginTop:"25px"}} orientation='horizontal' height="1px" />
              
            </div>
          </div>
          <div className='sidebar-right'>
            <div className='sidebar-right-head'>
           <div className='student-preference'>
            <h1>Student preference</h1>
            <ChevronDownIcon/>
           </div>
           <div className='profile-text'><p>200 Profile for java developer</p></div>
           <div className='sortby-text'><h1>Sort by</h1> <ChevronDownIcon/></div>
           <div className='rightbar-icons'>
           <div> <Checkbox  colorScheme='yellow' style={{borderColor:"#303030"}} >Select All</Checkbox></div>
           <div><DragHandleIcon/></div>
           <div><HamburgerIcon/></div>


           </div>
           </div>
          <SimpleGrid columns ={[1,2,3,4]} spacing={5}>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>
            <ProfileImage/>

          </SimpleGrid>
         
          </div>
        </div>
    </>
  )
}

export default HomePage