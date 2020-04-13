import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pubsub from 'pubsub-js'

export default class News extends Component {
    static propTypes = {
        num: PropTypes.number
    }

    constructor(props){
        super(props);
        this.state={subText:"ssssss",num:11111};
    }

    // Route pass parameters
    componentDidMount(){
        console.log(this.props.location.query.name);
    }

    // pass value between same level
    pubsub(){
        Pubsub.publish("evt",this.state.num)
    }

    render() {
        return (
            <div>
                -------------News page-------------
                <p>{this.props.text}--{this.state.subText}</p>
                {/* pass value between child&parent */}
                <button onClick={this.props.fun.bind(this,this.state.subText)}>home+news</button>
                {/* pass value between same level */}
                <button onClick={this.pubsub.bind(this)}>news+phone</button>
            </div>
        )
    }
}
