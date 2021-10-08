
import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './Firebse/InitializeFirebase';

initializeAuthentication();
const googleprovider = new GoogleAuthProvider();
function App() {

  const handlegooglesignin=()=>{
    const auth = getAuth();
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
  }

  const handleRegistration=e=>{
   console.log('Registration will be addaed');
   e.preventDefault();
  }
  return (
    <div className="container py-5">
    <h3 className="text-primary">Please Register</h3>
    <form onSubmit={handleRegistration}>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control w-25" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control w-25" id="inputPassword3"/>
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
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>

      {/* <button onClick={handlegooglesignin}>Google Signin</button> */}
    </div>
  );
}

export default App;
