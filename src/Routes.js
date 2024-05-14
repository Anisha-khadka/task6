import React from 'react'
import Login from './Component/Login'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './Component/Signup';
import Main from './Component/Main';

export default function Routes() {
  return (
    <div>
    <Route path="/" component={Login}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/main" component={Main}></Route>


    </div>
  )
}
