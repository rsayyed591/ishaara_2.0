import './App.css';
import { Box } from 'theme-ui';
import {Navbar,Hero,Counter,Services,Features,Try,About,Translate,Pricing} from "./components/pages";
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
        <Route path="/pricing" element={<Pricing/>}/>  
        {/* <Contact/> */}
        </Routes>
        </Router>
    </Box>
  );
}

export default App;