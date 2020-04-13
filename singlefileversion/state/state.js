class Com extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'xx',xxhtml:"<p>xxxx</p>"};
    }
    
    fun(){
        this.setState({bool:!this.state.bool})
    }

    render(){
        // conditional render
        let text;
        if(this.state.bool){
            text="A"
        }else{
            text="B"
        }
        return(
        <div>
            <button onClick={()=>{this.setState({name:"yy"})}}>change name</button>
            <button onClick={this.fun.bind(this)}>change text</button>
            <p>{this.state.name}</p>
            <p>{text}</p>
            <div dangerouslySetInnerHTML={{__html:this.state.xxhtml}}></div>
        </div>
        )
    }
}

ReactDOM.render(<Com/>,document.getElementById("div001"));