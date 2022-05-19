import React from 'react';
import { Route, Switch } from "react-router-dom";
import Feed from "./components/Feed";
import LogIn from "./components/LogIn";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import SignUP from "./components/SignUP";


function App() {
  return (
   <>
   <Switch>
   <Route path="/feed">
   <Feed/>
   </Route>

   <Route path="/logIn"> 
  <LogIn/>
   </Route>

   <Route path="/signUp">
   <SignUP/>
   </Route>

   <Route path="/profile">
   <Profile/>
   </Route>

   <Route>
   <PageNotFound/>
   </Route>
   </Switch>
 
  
  <LogIn/>
  
  
  
   </>
   
  );
}

export default App;
