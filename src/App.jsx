import './App.css';
import { Box } from 'theme-ui';
import {Navbar1,Hero,Counter,Services,Features,Try,About,Translate} from "./components/pages";
import {  BrowserRouter as Router,  Routes,  Route,  }  from 'react-router-dom';  
import './css/translate.css'

function App() {
  return (
    <Box mx={20}>
      <Router>
        <Navbar1 />
        <Routes>
        <Route path="/Translate" element={<Translate/>}/>  
        <Route path="/" element={<Hero/>}/>  
        {/* <Contact/> */}
        </Routes>
        </Router>
    </Box>
  );
}

export default App;