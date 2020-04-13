let text = "aaa";
let num = 123;
let obj = {text:"bbb",num:321};


// function component
function MyCom(props){
    return (<div>
        {props.text}{props.num}
    </div>)
}
// default value
MyCom.defaultProps = {text:"ccc"};
// verify
MyCom.prototypes = {num:PropTypes.number.isRequired};
let com = <MyCom text={text} num={num}/>;
ReactDOM.render(com,document.getElementById("div001"));


// class component
class MyCom2 extends React.Component{
    // default value
    static defaultProps = {name:"ddd"};
    render(){
        return(
            <div>{this.props.text}{this.props.num}

            </div>
        )
    }
}
//verify
MyCom2.Prototypes={num:PropTypes.number}
let com2 = <MyCom2 {...obj}/>
ReactDOM.render(com2,document.getElementById("div001"));