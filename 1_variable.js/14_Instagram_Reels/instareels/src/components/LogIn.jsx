import React,{useState} from 'react'

// rkv@gmail.com and pass - 1234567890 of firebase
import {auth,} from "../firebase"
import {signInWithEmailAndPassword, signOut} from "firebase/auth"

export default function LogIn() {
  const[email, setEmail] = useState("");
  const[password, setPassword]  = useState("");
  const[user, setUser] = useState(null)
  const[loader, setLoader] = useState(false)
  const[error, setError] = useState("")

  const trackEmail = (e) => {
    setEmail(e.target.value);
  }

  const trackPassword = (e) => {
    setPassword(e.target.value);
  }

  const printDetails = async(e) => {
   // alert(email+ " "+password)
   try{
     setLoader(true)
     let userCred = await
    signInWithEmailAndPassword(auth, email, password)
    //console.log(userCred.user)
    setUser(userCred.user)
   } catch (err){
     setError(err.message);

     setTimeout(() => {
       setError("")
     }, 2000)
   }
    setLoader(false);
    
  }
  const signout = async function () {
    await signOut(auth);
    setUser(null);
  }

  return (
    <>
    {
      error !== "" ? <h1>Error is{error}</h1> :
        loader === true ? <h1>...Loading</h1> :
          user !== null ? 
          <>
          <button
            onClick={signout}
          >Signout</button>
          <h1>user is {user.uid}</h1>
        </>
          :
        <>  <input type="email" onChange={trackEmail} value={email} placeholder="email"></input>
          <br></br>
        <input type="password" onChange={trackPassword} value={password} placeholder="password"></input>
        <br></br>
        <button type="click" onClick={printDetails}>LogIn</button>
        </>
    }
     
    </>

    
  )
}
