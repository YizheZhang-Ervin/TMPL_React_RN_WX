class Sub1 extends React.Component{
    render(){
        return(
        <div>{this.props.text}</div>
        )
    }
}

class Sub2 extends React.Component{
    render(){
        return(
        <div>{this.props.text}</div>
        )
    }
}

class Com extends React.Component{
    constructor(props){
        super(props);
        this.state={context:"xxx"};
    }

    fun=()=>{
        this.setState({context:"yyy"})
    }

    render(){
        return(
            <div>
                <button onClick={this.fun}>b1</button>
                <Sub1 text={this.state.context}/>
                <Sub2 text={this.state.context}/>
            </div>
        )    
        
    }
}

ReactDOM.render(<Com/>,document.getElementById("div001"));