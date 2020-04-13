
var obj = [{name:'xx',age:18}]

export function data(state=obj[0].age,action){
    switch(action.type){
        case "ADD":return state+action.data;break;
        case "MINUS":return state-action.data;break;
        default:
            return state;break;
    }
}