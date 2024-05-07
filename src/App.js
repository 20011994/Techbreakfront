import logo from './logo.svg';
import './App.css';
import Login from './login/Login';
import { ChakraProvider } from '@chakra-ui/react'
import NavbarMain from './navigationbar/NavbarMain';
import HomePage from './homepagemain/HomePage';


function App() {
  return (
    <ChakraProvider>
    <div className="">
    {/* <Login/> */}
    <NavbarMain/>
    <HomePage/>
    
     </div> 
     </ChakraProvider>
  );
}

export default App;
