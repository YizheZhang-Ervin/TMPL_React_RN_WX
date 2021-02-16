import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Route,Link,NavLink,Redirect,withRouter} from 'react-router-dom';
import Phone from './components/Phone';
import News from './components/News';


function App(props) {
  
  // hook
  let [val,setVal] = useState(0);

  // High order component
  props.history.listen((link)=>{
    console.log(link)
  })

  return (
    <div className="App">
      {/* Route navigation */}
      <Route path="/home" exact component={Home}/>
      <Route path="/phone" exact component={Phone}/>
      <Route path="/news" exact component={News}/>
      <div>
        <Link to="/home">Link to home</Link>
        <br/>
        <NavLink to="/home">Navlink to home</NavLink>
        <br/>
      </div>
      {/* ensure only render one */}
      <switch>
        <Route path="/" exact component={Home}/>
      </switch>
      <Redirect from="/" to="/home" exact/>

      {/* Route pass parameters */}
      {/* method1 */}
      <Route path="/phone/:id" component={Phone}/>
      <NavLink to="/phone/xx">pass value to xx phone</NavLink>
      <br/>
      {/* method2 */}
      <NavLink to={{pathname:"/News",query:{name:'xx'}}}>pass value to xx news</NavLink>
      <br/>
      {/* listen to route */}
      <button onClick={()=>{props.history.push("/home")}}>route listen to homepage</button>
      <br/>

      {/* hook */}
      <div>{val}</div>
      <button onClick={()=>{setVal(val+1)}}>hook</button>
      <br/>

      {/* origin page */}
      <header className="App-header"><img src={logo} className="App-logo" alt="logo" /></header>
      
      {/* Embed Homepage */}
      {/* <Home/> */}
    </div>
  );
}

// High order component
export default withRouter(App);
