let result = document.getElementById("result");

function clickbutton_reset(){
    result.innerHTML = "0";
}

function clickbutton_equal(){
    result.innerHTML = eval(result.innerHTML);
}

function clickbutton_operator(target){
    let val = target.innerHTML;
    if(result.innerHTML.slice(-1) == "+" ||
       result.innerHTML.slice(-1) == "-" ||
       result.innerHTML.slice(-1) == "*" ||
       result.innerHTML.slice(-1) == "/" ){
        result.innerHTML = result.innerHTML.slice(0,-1) + val;
       } else {
        result.innerHTML += val;
       }
}

function clickbutton(target){
    let val = target.innerHTML;
    if(result.innerHTML == "0" && val == "0"){
        result.innerHTML = "0";
    } else if(result.innerHTML == "0" && val == "00"){
        result.innerHTML = "0";
    } else if(result.innerHTML == "0"){
        result.innerHTML = val;
    } else {
        result.innerHTML += val;
    }
}

function clickbutton_point(target){
    let val = target.innerHTML;
    if(result.innerHTML == "0" && val == "."){
        result.innerHTML = "0.";
    } else if(result.innerHTML.slice(-1) == "."){
        result.innerHTML = result.innerHTML.slice(0,-1) + val;
    } else {
        result.innerHTML += val;
    }
}