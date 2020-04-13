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
    static propTypes = {
        num: PropTypes.number
    }

    constructor(props){
        super(props);
        this.state = {arr:[],num:store.getState()}
    }

    ajaxfun=()=>{
        axios.get("http://localhost:4000/arr").then((ok)=>{
            console.log(ok);
            this.setState({arr:ok.data});
        })
    }

    componentDidMount(){
        this.ajaxfun();
        // when use api by setting in node_modules\react-scripts\config\webpackDevServer.config.js
        // axios.get("/api/xx.html").then((ok)=>{console.log(ok)})
        store.subscribe(()=>{
            this.setState({
                num:store.getStore()
            })
        })
    }


    dataFun=(text)=>{
        console.log(text);
        this.setState({text:text});
    }

    render() {
        return (
            <Fragment>
                <div>home here</div>
                <img src={require("../assets/1.jpg")}/>
                <img src={ImgA}/>
                <div>{this.state.arr.map((v,i)=>{
                    return <p key={i}>{v.name}</p> 
                    })}
                </div>
                {/* <News text="abc" fun={this.dataFun}/> */}
                {/* <Phone/> */}

                {/* redux */}
                <div>
                    {this.state.num}
                </div>
                <button onClick={()=>{store.dispatch(action.add(1))}}></button>
                <button onClick={()=>{store.dispatch(action.minus(1))}}></button>

                <Route path="/home/homesub" component={Homesub}/>
                <NavLink to="/home/homesub">Homesub</NavLink>
            </Fragment>
            
        )
    }
}
