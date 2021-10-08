
import './App.css';
import { getAuth, signInWithPopup,createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './Firebse/InitializeFirebase';
import { useState } from 'react';

initializeAuthentication();
const googleprovider = new GoogleAuthProvider();
function App() {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const auth = getAuth();
  const handlegooglesignin=()=>{  
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
  }

const handleEmail=e=>{
  setEmail(e.target.value)
}
const handlepassword=e=>{
  setPass(e.target.value)
}

  const handleRegistration=e=>{
   console.log(email,pass);
   createUserWithEmailAndPassword(auth, email, pass)
   .then((result) => {
    const user = result.user;
    console.log(user);
  })


   e.preventDefault();
  }
  return (
    <div className="container py-5">
    <h3 className="text-primary">Please Register</h3>
    <form onSubmit={handleRegistration}>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" onBlur={handleEmail} className="form-control w-25" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" onBlur={handlepassword} className="form-control w-25" id="inputPassword3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>

      {/* <button onClick={handlegooglesignin}>Google Signin</button> */}
    </div>
  );
}

export default App;
