import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ImgA from '../assets/1.jpg'
import News from './News'
import Phone from './Phone'
import Homesub from './Homesub'
import axios from 'axios'
import {Route,NavLink} from 'react-router-dom'
import {store} from '../redux/store'
import * as action from '../redux/action'

export default class Home extends Component {
    // verify
    static propTypes = {
        num: PropTypes.number
    }

    // redux
    constructor(props){
        super(props);
        this.state = {arr:[],num:store.getState()}
    }

    // data request & json-server
    ajaxfun=()=>{
        axios.get("http://localhost:4000/arr").then((ok)=>{
            console.log(ok);
            this.setState({arr:ok.data});
        })
    }

    componentDidMount(){
        // data request & json-server
        this.ajaxfun();
        // Cross domain request
        // axios.get("/api/xx.html").then((ok)=>{console.log(ok)})
        store.subscribe(()=>{
            this.setState({
                num:store.getState()
            })
        })
    }

    // pass value(child->parent) 
    dataFun=(text)=>{
        console.log(text);
        this.setState({text:text});
    }

    render() {
        return (
            // several line tags
            <Fragment>
                {/* use image */}
                {/* <img src={require("../assets/1.jpg")}/>
                <img src={ImgA}/> */}

                {/* data request & json-server */}
                {/* <div>{this.state.arr.map((v,i)=>{
                    return <p key={i}>{v.name}</p> 
                    })}
                </div> */}

                {/* pass value(child->parent)  */}
                {/* <News text="abc" fun={this.dataFun}/> */}
                {/* pass value(same value) */}
                {/* <Phone/> */}

                {/* redux */}
                <div>
                    -----REDUX:{this.state.num}-----
                </div>
                <button onClick={()=>{store.dispatch(action.add(1))}}>REDUX001</button>
                <br/>
                <button onClick={()=>{store.dispatch(action.minus(1))}}>REDUX002</button>
                <br/>

                {/* Route & Navgation */}
                <Route path="/home/homesub" exact component={Homesub}/>
                <NavLink to="/home/homesub">-----ROUTE-Homesub-----</NavLink>
            </Fragment>
            
        )
    }
}
