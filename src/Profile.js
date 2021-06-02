import React from "react" ;
import { useEffect, useState } from "react" ;
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import { BrowserRouter as Route,Switch} from "react-router-dom";
import './App.css';

function Profile ()
 {   let history = useHistory();
  const[datalist, setDatalist]= useState([]);
  const[userid, setUserid] = useState("");
  const[password, setPassword] = useState("");
  const[username, setUsername] = useState("");
  const[contact, setContact] = useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/Getdata").then((response)=> {setDatalist(response.data);});
  }, []);

  useEffect(()=>{
    getuser();},[])

  function getuser()
  {
    fetch("http://localhost:3001/Getdata").then((result)=>{
      result.json().then((res)=>{
        setDatalist(res);
        setUserid(res[0].userid);
        setPassword(res[0].password);
        setUsername(res[0].username);
        setContact(res[0].contact);
         
      });
    });
  };

  function sel(i)
  {
    console.warn(i);
    console.warn(datalist[i]);
    let it=datalist[i];
    setUserid(it.userid);
    setPassword(it.password);
    setUsername(it.username);
    setContact(it.contact);
 }

const Update=(userid,password,contact,username)=>{
  Axios.put('http://localhost:3001/Update',{
  userid:userid,
  password:password,
   contact:contact,
   username:username
  
  }).then((response) => {
    console.log(response);
  });
};

 
const del=(id)=>{
    Axios.delete(`http://localhost:3001/Delete/${id}`);
    history.go();       };
  
const Back=()=>{
    history.goBack();   };

function Refresh(){
      history.go();   };

return (
  <Route> 
  <div className= "pro">
  <h1>Employee Data</h1>
  <div className= "prof">
  <table border='1px'>
  <tbody>
    <tr>
    <td><b>Id</b></td><td><b>Username</b></td><td><b>Contact</b></td><td></td><td></td>
    </tr>  
  { datalist.map((val,i) => 
    <tr key ={i}><td>{val.userid}</td><td>{val.username}</td><td>{val.contact}</td>
    <td><button onClick={()=>{del(val.userid)}}>Delete</button></td> 
    <td><button onClick={()=>{sel(i)}}>Update</button></td>
    </tr>
      )}
      </tbody>
</table>
<div><br></br>
USER_ID   :<input type ="text" value={userid} /><br></br>
PASSWORD :<input type ="text" value={password} onChange= {(e)=>{setPassword(e.target.value);}}/><br></br>
USER_NAME:<input type ="text" value={username} onChange= {(e)=>{setUsername(e.target.value);}}/><br></br>
CONTACT   :<input type ="text" value={contact}  onChange= {(e)=>{setContact(e.target.value);}}/><br></br>
<button onClick={Update(userid,password,contact,username)}>Update Data</button>  <button onClick={Refresh}>Refresh Data</button>   
</div>
   </div>
   <div className ="butback">
  <button onClick={Back}>GoBack</button>    
  </div>
   </div>
   <Switch>
   
 </Switch>
   </Route>
  );
    } 
    
export default Profile;