import './App.css';
import { Box } from 'theme-ui';
import {Navbar,Hero,About,Translate,Pricing,Modal} from "./components/pages";
// import {Navbar,Hero,Counter,Services,Features,Try,About,Translate,Pricing} from "./components/pages";
import {  BrowserRouter as Router,  Routes,  Route,  }  from 'react-router-dom';  
import './css/translate.css'

function App() {
  return (
    <Box mx={20}>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/Translate" element={<Translate/>}/>  
        <Route path="/" element={<Hero/>}/>  
        <Route path="/Pricing" element={<Pricing/>}/>  
        <Route path="/About" element={<About/>}/>  
        <Route path="/Modal" element={<Modal/>}/>  
        {/* <Contact/> */}
        </Routes>
        </Router>
    </Box>
  );
}

export default App;