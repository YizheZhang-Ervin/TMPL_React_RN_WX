import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pubsub from 'pubsub-js'

export default class Phone extends Component {
    static propTypes = {
        num: PropTypes.number
    }

    constructor(props){
        super(props);
        Pubsub.subscribe("evt",(msg,data)=>{console.log(data)});
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
