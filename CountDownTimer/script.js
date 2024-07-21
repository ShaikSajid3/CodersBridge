inputid = document.getElementById('timer');
labelid = document.getElementById('show');
resetid = document.getElementById('resetbtn');
setTimeid = document.getElementById('setbtn');
stopid = document.getElementById('stopbtn');
restartid = document.getElementById('restartbtn');
cardid = document.getElementById('card');


var x;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isPaused = 0;
let initialhours = 0;
let initialminutes = 0;
let initialseconds = 0;


function startInterval() {
    x = setInterval(function () {
        labelid.innerHTML = hours + "hr " + minutes + "m " + seconds + "s";

        if (seconds == 0) {
            if (minutes == 0) {
                if (hours == 0) {
                    clearInterval(x);
                }
                else {
                    hours -= 1;
                    minutes = 59;
                    seconds = 59;
                }
            }
            else {
                minutes -= 1;
                seconds = 59;
            }
        }
        else {
            seconds -= 1;
        }
    }, 1000);
}

setTimeid.addEventListener('click', () => {
    clearInterval(x);
    isPaused = false;
    var updatedtime = inputid.value;

    cardid.style.display = "none";
    var arr = updatedtime.split(":");
    hours = Number(arr[0]);
    minutes = Number(arr[1]);
    seconds = Number(arr[2]);
    initialhours = hours;
    initialminutes = minutes;
    initialseconds = seconds;
    startInterval();
});


stopid.addEventListener('click', () => {
    if (isPaused) {
        isPaused = false;
        startInterval();
        stopid.value = "Stop";
        stopid.style.backgroundColor = 'red';
    }
    else {
        isPaused = true;
        clearInterval(x);
        stopid.value = "Resume";
        stopid.style.backgroundColor = 'green';
    }
});



resetid.addEventListener('click', () => {
    cardid.style.display = "inline-block";
});

restartid.addEventListener('click', () => {
    clearInterval(x);
    hours = initialhours;
    minutes = initialminutes;
    seconds = initialseconds;
    startInterval();
});
