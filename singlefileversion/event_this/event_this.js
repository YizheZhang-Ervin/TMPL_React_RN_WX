class Com extends React.Component{
    constructor(props){
        super(props);
        this.f3 = this.f3.bind(this);
    }
    render(){
        return(
            <div>
                <button onClick={this.f1.bind(this)}>b1</button>
                <button onClick={this.f2}>b2</button>
                <button onClick={this.f3}>b3</button>
                <button onClick={ ()=>{this.f1()} }>b4</button>
                <button onClick={ this.f4.bind(this,"xx") }>b5</button>
                <button onClick={ ()=>{this.f4("xx")} }>b6</button>
                <button onClick={ (e)=>{this.f5("xx",e)} }>b7</button>
            </div>
        )
    }

    f1(){
        console.log(this);
    }
    
    f2=()=>{
        console.log(this);
    }
    
    f3(){
        console.log(this);
    }
    
    f4=(i)=>{
        console.log(i);
    }
    
    f5=(i,e)=>{
        console.log(i,e);
    }

}

ReactDOM.render(<Com/>,document.getElementById("div001"));

