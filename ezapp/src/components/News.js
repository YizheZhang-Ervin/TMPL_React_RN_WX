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

    componentDidMount(){
        console.log(this.props.location.query.name);
    }

    pubsub(){
        Pubsub.publish("evt",this.state.num)
    }

    render() {
        return (
            <div>
                <p>{this.props.text}--{this.state.subText}</p>
                <button onClick={this.props.fun.bind(this,this.state.subText)}>home+news</button>
                <button onClick={this.pubsub.bind(this)}>news+phone</button>
            </div>
        )
    }
}
