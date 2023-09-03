import Navbar from './Components/Navbar'
import './App.css';
import {MainDIV} from './Common/CommonComponents';
import Heading from './Components/Heading';
function App() {
  return (
    <>
    <MainDIV>
         <Navbar userName="John Doe" />
         <Heading/>
    </MainDIV>
   
    </>
  );
}

export default App;
