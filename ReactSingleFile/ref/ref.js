class Com extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    render(){
        return(
            <div>
                <input type="text" ref="demoInput" placeholder="xx"/>
                <input type="text" ref={(input)=>{this.textinput=input}}/>
                <input type="text" ref={this.myRef} placeholder="xx"/>
                <button onClick={this.fun}>click</button>
            </div>
        )
    }
    fun=()=>{
        console.log(this.refs.demoInput.value);
        console.log(this.textinput.value);
        console.log(this.myRef.current.value);
    }
}

ReactDOM.render(<Com/>,document.getElementById("div001"));