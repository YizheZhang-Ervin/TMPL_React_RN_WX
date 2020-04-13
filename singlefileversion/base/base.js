let txt = "aaaa";
let num = 111;

let user = {v:"bbb"};
let obj = {a:'555',b:'666'};

let arr = [<h6>222</h6>,
            <h6>333</h6>,
            <h6>444</h6>];
let arr2 = ['A','B','C'];
let i = -1;

let link = "https://www.google.com";
let style1 = {color:"red",backgroundColor:"orange"};

function getvalue(obj){
    return `value=${obj.v}`;
}

// array: map
function getarr(arr){
    return arr.map((v,i)=>{return <p key={i}>{v}</p>})
}

// array: for in 
function getarr2(arr){
    let newarr = []
    for(let index in arr){
    newarr.push(<p style={{color:index===i?'green':''}} key={index} onClick={()=>{i=index;render()}}>{arr[index]}</p>)
    }
    return newarr;
}

let myDom1 = (
    <div>
        {/* code document in JSX */}
        <p>string here:{txt}</p>
        <p>number here:{num+1000}</p>
        <p>function here:{getvalue(user)}</p>   
        <p>Ternary operator here:{num>100?"mt100":"lt100"}</p> 
        <div>array here 1:{arr}</div>
        <a href={link}>hyperlink here</a>
        <div style={style1}>style here</div>
        {/* className can use when html/css/js in one file */}
        {/* <div className={class2}>class here</div> */}
        <div>array here 2:{getarr(arr2)}</div>
        <div>array here 3:{getarr2(arr2)}</div>
        <div>object here:
            {Object.keys(obj).map((v,i)=>{return <p>{v}{obj[v]}</p>})}
        </div>
    </div>
);

function render(){
    ReactDOM.render(myDom1,document.getElementById("div001"));
}
render();