import './App.css';
import { Box } from 'theme-ui';
import {Navbar,Hero,Counter,Services,Features,Try,About} from "./components/pages";

function App() {
  return (
    <Box mx={20}>
        <Navbar />
        <Hero/>
        <Counter />
        <Services/>
        <Features/>
        <Try />
        <About/>
        {/* <Contact/> */}
    </Box>
  );
}

export default App;