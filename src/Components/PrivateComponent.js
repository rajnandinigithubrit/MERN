import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import SignUp from './SignUp/SignUp';

const PrivateComponent = () =>{
const auth = localStorage.getItem("user")
console.log(auth)
return auth?<Outlet />:<Navigate to="/signup" />

   

}

export default PrivateComponent;