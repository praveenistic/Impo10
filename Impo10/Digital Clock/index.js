const hourE1 = document.getElementById("hour")
const minuteE1 = document.getElementById("minutes")
const secondE1 = document.getElementById("seconds")
const ampmE1 = document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    // let ampm = "PM";
    let ampm = h>12 ? "PM" : "AM"; //direct if-else statement in 
 
    // if (h > 12) {
    //     // h = h - 12;
    //     ampm = "PM";
    // }
    
    // ampm = h<12 ? "AM" : ampm; //short syntax of if-else statement 

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;

    setTimeout(()=>{updateClock()}, 1000)

}

updateClock();