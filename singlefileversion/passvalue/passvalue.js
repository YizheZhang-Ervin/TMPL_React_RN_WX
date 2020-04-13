let dataArr = ["A","B","C"];

let SubCom = (props) =>{
    return (
    <div>
        {props.arr.map((v,i)=>{return <p key={i}>{v}</p>})}
    </div>
    )
}

let SuperCom = () =>{
    return (
        <div>
            <SubCom arr={dataArr}/>
        </div>
    )
}

ReactDOM.render(<SuperCom/>,document.getElementById("div001"));