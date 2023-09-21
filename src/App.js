import { useEffect, useReducer, useState } from 'react';
import './App.css';
import {MainDIV} from './Common/CommonComponents';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import TaskPages from './Components/TaskPages/TaskPages';
import { loginUser, signUpUser } from './Services/Services';
import CircularProgress from '@mui/joy/CircularProgress';


function reducerFn(state,action){

 switch(action.type){

  case "ADD_USER": console.log("User Addded");
  break;
  case "USER_LOGGED": return {...state,isLoggedIn:true,tasks:[{taskname:"Do a task"}]};
  case "ADD_TASK": console.log("Task Addded");
  break;
  case "GET_USER": console.log("Get User Details");
  break;
  case "USER_LOGGED_OUT": return {...state,isLoggedIn:false,tasks:[]};
 }



}






function App() {

 
  const [userState,dispatchAction] = useReducer(reducerFn,{isLoggedIn:false,tasks:[]})
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    const jwtToken = localStorage.getItem('jwtToken');
    if(jwtToken){
      dispatchAction({type:'USER_LOGGED'});
      setLoading(false);
    }
    setLoading(false);

  },[])

  function login(email,password){

    loginUser(email,password,()=>{
      dispatchAction({type:'USER_LOGGED'})
    })
    ;
  }

  const logOutHandler = () => {
    localStorage.removeItem('jwtToken');
    dispatchAction({type:'USER_LOGGED_OUT'});
  }
  

  function signUp(userName,email,password){

    signUpUser(userName,email,password,()=>{
      dispatchAction({type:'ADD_USER'})
    })
    ;
  }

  return (
    <>
    {loading && <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}><CircularProgress   sx={{
    "--CircularProgress-size": "60px",
    "--CircularProgress-trackThickness": "10px",
    "--CircularProgress-progressThickness": "10px"
  }} color='danger'  variant="solid" />
  <h1 style={{marginLeft:'2px'}}>Loading....</h1>
  </div>}

  {!loading &&<> {!userState.isLoggedIn?<Login onLogin={login}/>:
   <MainDIV>
         <TaskPages onLogOut={logOutHandler}/>
    </MainDIV> 
     }
  </>
  }
     
      {/* <SignUp onSignUp={signUp}/> */}
    </>
  );
}

export default App;