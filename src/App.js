import React from 'react';
// import logo from './logo.svg';
import './App.css';
// 引入路由组件
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import Cinema from './components/Cinema'
import login from './components/login'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">验证</Link></li>
        <li><Link to="/cinema">注册</Link></li>
        <li><Link to="/login">登陆</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/cinema" component={Cinema}/>
      <Route path="/login" component={login}/>
    </div>
  </Router>
)

export default App;
