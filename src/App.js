import React, { useState } from "react" ;
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Profile from "./Profile";

function App() {
  
  const history = useHistory();
  const[userid, setUserid] = useState("");
  const[password, setPassword] = useState("");
  const [LoginStatus, setLoginStatus] = useState("");


  const Add =()=>{
    Axios.post('http://localhost:3001/add',{
        userid: userid,
      password: password,
    }).then((response) =>
   {
    setLoginStatus(response.data.message);
   } );
  };

  const Login =() =>{
      Axios.post("http://localhost:3001/Login",{
      userid: userid,
      password: password,
    }).then((response) => {
      console.log(response);
         if(response.data.message){
       setLoginStatus(response.data.message);
        }else{
        setLoginStatus("Valid user");
      history.push('/Profile');
      history.go();

      console.log(history);
    
             } 
    });
  };


  return (
   <Router>
 <div className="App">
  <div className="Login">
    <h1>Login Page</h1>
    <input type ="text" placeholder="USER_ID" onChange= {(e) => {setUserid(e.target.value);}} /><br></br>
    <input type ="password" placeholder="PASSWORD" onChange= {(e) => {setPassword(e.target.value);}}/><br></br>
    <button onClick={Login}>LOGIN</button>        <button onClick={Add}> ADD_USER </button>
  </div>
  {LoginStatus}
  </div>   
 <Switch>
   <Route path="/Profile" component = {Profile}/>
 </Switch>
</Router>
 );
}

export default App;
