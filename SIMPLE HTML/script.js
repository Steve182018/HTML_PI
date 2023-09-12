function display(value){
    document.getElementById("result").value += value;
}

function display1(value){
    // document.getElementById("result").value += value;

    if(document.getElementById("result").value >= 0){
        let v = value;
        document.getElementById("result").value = "-"+value;
    }else{
        document.getElementById("result").value = "+"+ value;
    }
}

function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function clearScreen() {
    document.getElementById("result").value = "";
}
