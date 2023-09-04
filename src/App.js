import Navbar from './Components/Navbar'
import './App.css';
import {MainDIV, TaskContainer} from './Common/CommonComponents';
import Heading from './Components/Heading';
import BasicDateCalendar from './Components/Calendar';
function App() {
  return (
    <>
    <MainDIV>
         <Navbar userName="John Doe" />
         <Heading/>
         <TaskContainer>
          <div className={"left"} style={{width:'50%',height:'100%'}}>
            <div className='calendar' style={{width:'100%',height:'60%'}}>
              <BasicDateCalendar/>
            </div>
            <div className='addTask' style={{width:'100%',height:'40%',background:'red'}}></div>
          </div>
          <div className={"right"} style={{width:'50%',height:'100%',background:'purple'}}>

          </div>
         </TaskContainer>
    </MainDIV>
   
    </>
  );
}

export default App;
