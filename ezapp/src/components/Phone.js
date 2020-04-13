import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pubsub from 'pubsub-js'

export default class Phone extends Component {
    static propTypes = {
        num: PropTypes.number
    }

    // pass value(same value)
    constructor(props){
        super(props);
        Pubsub.subscribe("evt",(msg,data)=>{console.log(data)});
    }

    // Route pass parameters
    componentDidMount(){
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                 -------------Phone page-------------
            </div>
        )
    }
}
