var btnstart = document.getElementById("start");
var btnstop = document.getElementById("stop");
var btnreset = document.getElementById("reset");
var btnlap = document.getElementById("lap");

var hour = 0;
var minute = 0;
var second = 0;
var milisecond = 0;
lap = null;
var x = 1;

btnstop.disabled = true
btnreset.disabled = true
btnlap.disabled = true


btnstart.addEventListener("click", function () {
    timer = true;
    if (timer == true) {
        watchstart();
        btnstop.disabled = false
        btnreset.disabled = false
        btnlap.disabled = false
        btnstart.disabled = true
        console.log("start");
    }

});

btnstop.addEventListener("click", function () {
    console.log("stop");
    timer = false;
    btnstart.disabled = false
    btnstop.disabled = true
});

btnlap.addEventListener("click", function () {

    console.log("laps")
    lap = `${hour}:${minute}:${second}:${milisecond}`
    var count = x++;
    document.getElementById("num").innerHTML += `<br>` + count + `.`
    document.getElementById("laps").innerHTML += `<br>` + lap

});

btnreset.addEventListener("click", function () {
    console.log("clickreset");
    timer = false;
    hour = minute = second = milisecond = 0;
    x = 1;
    document.getElementById("msec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("num").innerHTML = "";
    document.getElementById("laps").innerHTML = "";

    btnstop.disabled = true
    btnreset.disabled = true
    btnlap.disabled = true
    btnstart.disabled = false
});


function watchstart() {
    if (timer) {
        milisecond++

        if (milisecond == 100) {
            second++;
            milisecond = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        function time(value) {
            if (value < 10) {
                return "0" + value
            } else {
                return "" + value
            }
        }


        document.getElementById("msec").innerHTML = time(milisecond);
        document.getElementById("sec").innerHTML = time(second);
        document.getElementById("min").innerHTML = time(minute);
        document.getElementById("hour").innerHTML = time(hour);
        setTimeout(watchstart, 10)
    } else {

    }
}