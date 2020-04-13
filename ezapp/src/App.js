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

  props.history.listen((link)=>{
    console.log(link)
  })

  return (
    <div className="App">
      {/* Router here */}
      <Route path="/home" exact component={Home}/>
      <Route path="/phone" exact component={Phone}/>
      <Route path="/news" exact component={News}/>
      <div>
        <Link to="/home">Link to home</Link>
        <NavLink to="/home">Navlink to home</NavLink>
      </div>
      {/* ensure only render one */}
      <switch>
        <Route path="/" exact component={Home}/>
      </switch>
      <Redirect from="/" to="/home" exact/>
      {/* pass parameters */}
      {/* method1 */}
      <Route path="/phone/:id" component={Phone}/>
      <NavLink to="/phone/xx">pass value to xx phone</NavLink>
      {/* method2 */}
      <NavLink to={{pathname:"/News",query:{name:'xx'}}}>pass value to xx news</NavLink>


      {/* listen to route */}
      <button onClick={()=>{props.history.push("/home")}}>route listen to homepage</button>

      {/* hook */}
      <div>{val}</div>
      <button onClick={()=>{setVal(val+1)}}>hook</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home/>
    </div>
  );
}

export default withRouter(App);
